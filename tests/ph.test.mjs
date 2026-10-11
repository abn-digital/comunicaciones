// Self-check for ph.js: node --test tests/ph.test.mjs
// Runs the snippet against a fake page and reads what it handed to posthog.init.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";

const SCRIPT = readFileSync(new URL("../ph.js", import.meta.url), "utf8");

function run(hostname) {
  const inserted = [];
  const window = {};
  const document = {
    createElement: () => ({}),
    getElementsByTagName: () => [{ parentNode: { insertBefore: (el) => inserted.push(el) } }],
  };
  window.document = document;
  vm.runInNewContext(SCRIPT, { window, document, location: { hostname }, URL });
  return { posthog: window.posthog, inserted };
}

test("initialises project Hike through the proxy, anonymous", () => {
  const { posthog, inserted } = run("abn-digital.github.io");
  const [key, options] = posthog._i[0];
  assert.equal(key, "phc_noaqcyPaKS9ym4X3XA4J5JtEUoY3FyyH2XXm42Xhn45T");
  assert.equal(options.api_host, "https://e.hikethecloud.com");
  assert.equal(inserted[0].src, "https://e.hikethecloud.com/static/array.js");
  assert.equal(options.person_profiles, "identified_only");
  assert.equal(options.disable_session_recording, true);
  assert.equal(options.session_recording.maskAllInputs, true);
  assert.equal(options.capture_exceptions, true);
  assert.equal(Boolean(options.mask_all_text), false);
  const registered = [];
  options.loaded({ register: (props) => registered.push(props) });
  // The snippet runs in its own realm: compare as JSON.
  assert.equal(JSON.stringify(registered), JSON.stringify([{ app: "comunicaciones" }]));
});

test("before_send drops tokens, codes and fragments from URLs", () => {
  const [, options] = run("abn-digital.github.io").posthog._i[0];
  const event = options.before_send({
    properties: {
      $current_url: "https://abn-digital.github.io/page?token=abc&utm_source=mail&apikey=k#part",
      $referrer: "https://accounts.example.com/?code=123&state=x",
      title: "kept",
    },
  });
  assert.equal(event.properties.$current_url, "https://abn-digital.github.io/page?utm_source=mail");
  assert.equal(event.properties.$referrer, "https://accounts.example.com/");
  assert.equal(event.properties.title, "kept");
});

test("sends nothing from localhost", () => {
  assert.equal(run("localhost").posthog, undefined);
});
