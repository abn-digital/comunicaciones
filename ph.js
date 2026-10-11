// PostHog: project Hike (651073, org ABN Group) through the e.hikethecloud.com
// proxy. Visitors are anonymous: no identify and no person profile. Autocapture
// never reads what someone types into a form. The key is the public write key
// and ships in the page by design.
(function () {
  var APP = "comunicaciones";
  if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return;

  // Query params a login or a shared link can carry: a code or a token someone
  // could reuse if it reached PostHog. Same list as hike-products' analitica.ts.
  var SENSITIVE = ["code", "state", "token", "access_token", "refresh_token", "id_token", "oobcode", "apikey"];
  function cleanUrl(value) {
    var url;
    try {
      url = new URL(value);
    } catch (e) {
      return value;
    }
    Array.from(url.searchParams.keys()).forEach(function (key) {
      if (SENSITIVE.indexOf(key.toLowerCase()) !== -1) url.searchParams.delete(key);
    });
    url.hash = "";
    return url.toString();
  }
  function cleanUrls(props) {
    if (!props) return;
    Object.keys(props).forEach(function (key) {
      var value = props[key];
      if (typeof value === "string" && /(url|referrer)$/i.test(key) && /^https?:/i.test(value)) props[key] = cleanUrl(value);
    });
  }

  !(function (t, e) {
    var o, n, p, r;
    e.__SV ||
      ((window.posthog = e),
      (e._i = []),
      (e.init = function (i, s, a) {
        function g(t, e) {
          var o = e.split(".");
          2 == o.length && ((t = t[o[0]]), (e = o[1]));
          t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments)));
          };
        }
        ((p = t.createElement("script")).type = "text/javascript"),
          (p.crossOrigin = "anonymous"),
          (p.async = !0),
          (p.src = s.api_host + "/static/array.js"),
          (r = t.getElementsByTagName("script")[0]).parentNode.insertBefore(p, r);
        var u = e;
        void 0 !== a ? (u = e[a] = []) : (a = "posthog");
        u.people = u.people || [];
        u.toString = function (t) {
          var e = "posthog";
          return "posthog" !== a && (e += "." + a), t || (e += " (stub)"), e;
        };
        u.people.toString = function () {
          return u.toString(1) + ".people (stub)";
        };
        o =
          "init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setIdentity setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(
            " ",
          );
        for (n = 0; n < o.length; n++) g(u, o[n]);
        e._i.push([i, s, a]);
      }),
      (e.__SV = 1));
  })(document, window.posthog || []);

  window.posthog.init("phc_noaqcyPaKS9ym4X3XA4J5JtEUoY3FyyH2XXm42Xhn45T", {
    api_host: "https://e.hikethecloud.com",
    ui_host: "https://us.posthog.com",
    defaults: "2026-08-30",
    person_profiles: "identified_only",
    autocapture: true,
    capture_pageleave: true,
    capture_performance: { web_vitals: true },
    capture_exceptions: true,
    disable_session_recording: true,
    session_recording: { maskAllInputs: true },
    before_send: function (event) {
      if (!event) return event;
      cleanUrls(event.properties);
      cleanUrls(event.$set);
      cleanUrls(event.$set_once);
      return event;
    },
    loaded: function (ph) {
      ph.register({ app: APP });
    },
  });
})();
