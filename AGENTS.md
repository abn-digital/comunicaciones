# Comunicaciones ABN — Guía para agentes

Repo de **comunicados listos para compartir con clientes**. Drop HTML → GitHub Pages.
Contexto humano: [README.md](./README.md).

**Job del agente:** alguien tira una noticia / link / mensaje de Slack → vos investigás,
armás una pieza linda autocontenida, la listás en el índice, y **devolvés el link
público**. No un borrador en el chat: un HTML publicado (o listo para push).

---

## Layout

| Path | Rol |
|---|---|
| `index.html` | Índice de piezas (actualizar siempre que sumes una) |
| `<slug>/index.html` | Comunicación en **español** (default) |
| `<slug>/en/index.html` | Misma pieza en **inglés** |
| `<slug>/*` | Assets compartidos (`og.png`, `og-en.png`, mockup…) — desde `/en` con `../` |
| `.nojekyll` | Obligatorio para GitHub Pages |
| `.agents/skills/nueva-comunicacion/` | Skill del flujo completo |

No hay build, npm ni framework. El site se sirve desde `main`.

**Base URL:** `https://abn-digital.github.io/comunicaciones/`  
**Pieza ES (default):** `https://abn-digital.github.io/comunicaciones/<slug>/`  
**Pieza EN:** `https://abn-digital.github.io/comunicaciones/<slug>/en/`

---

## Flujo cuando llega una noticia

1. **Leé esta guía y la skill** [nueva-comunicacion](./.agents/skills/nueva-comunicacion/SKILL.md).
2. **Investigá** la fuente oficial (no te quedes solo con el forward de Slack).
3. **Elegí un `slug`** corto, kebab-case, en inglés o marca+tema (`youtube-views`, `chatgpt-ads`).
4. **Copiá el patrón** de la pieza más cercana (`youtube-views/` o `chatgpt-ads/`), no inventes otro sistema visual.
5. **Escribí** el HTML autocontenido + assets en la carpeta.
6. **Sumá la card** al `index.html` de la raíz (arriba de la lista = más reciente).
7. **Actualizá** la sección “Contenido actual” del README.
8. **Cerrá** con el link público. Si todavía no pushearon: decí la URL final + pedí push a `main` (o pusheá si te lo pidieron).

Entrevista mínima si falta contexto: ¿para qué audiencia? ¿partner/plataforma? ¿hay mockup o creativo? ¿fecha de vigencia? Lo que no sepas: **no inventes cifras ni fechas** — marcá `PENDIENTE` visible o omití el claim.

---

## Look & feel (duro)

Base boutique ABN. Las piezas existentes son la verdad visual; no “modernices” hacia purple gradients, Inter, ni dark-first.

### Tokens

| Token | Light | Uso |
|---|---|---|
| Fondo | `#f3f0e9` / `#ece6db` | Marfil, no blanco puro |
| Card | `#fffdf9` | Superficies |
| Ink | `#211d1a` | Títulos |
| Body | `#564f47` | Párrafos |
| Muted | `#8d8478` | Meta, captions |
| Tipo | Helvetica Neue / Helvetica / Arial | Display fino (weight 200) + medium (500) |
| Radio | ~16–18px cards, chips pill | |
| Ancho | `.wrap` ~940px | |

Dark mode: misma estructura, fondos `#161310` / `#1d1914`, ink `#f4f0e8`. Soportar `prefers-color-scheme` **y** toggle que setea `data-theme` en `<html>`.

### Tema por defecto

**El default es el del sistema** (`prefers-color-scheme`). No forzar dark ni light al cargar.
El botón de tema solo escribe `data-theme="dark|light"` cuando el usuario lo toca.

### Marca ABN

- Isotipo ABN inline (SVG path del índice / piezas actuales). Color = `currentColor` / ink.
- **ABN no usa rojo como acento de marca** en estas piezas.
- Co-brand: `ABN Group × <Partner>` en topbar. El **acento de color es del partner** (YouTube rojo `#ff0000`, ChatGPT/OpenAI verde `#10a37f`, etc.).

### Anatomía de una pieza (orden típico)

1. Chrome fijo: **switch ES | EN** (pill boutique) + toggle de tema
2. Topbar co-brand (isotype ABN × logo/mark del partner)
3. Hero: eyebrow “Comunicado para partners” → H1 fino → lead → datechip
4. Motivo visual propio del tema (player YouTube, mockup phone, etc.) — **una** firma, no un dashboard
5. Secciones numeradas (`01` / `02` …) con kicker + H2 + cuerpo
6. Cards / lista advisory / timeline según el contenido
7. Footer con **Fuentes · bibliografía** (obligatorio) + firma ABN + disclaimer

### Fuentes · bibliografía (obligatorio)

Toda pieza declara de qué documento oficial está hablando. No es un invento nuestro.

- **Documento base:** 1 link primario (help center / changelog / blog oficial) — el que dispara la comunicación.
- **Profundidad:** links secundarios solo donde aporten (medición, APIs, policies).
- Si en el cuerpo mencionás un tema técnico (p. ej. medición), linkeá ahí mismo a la doc profunda (“si querés saber más…”).

Motion: reveals on scroll + 1–2 acentos (pulse del datechip, etc.). Respetar `prefers-reduced-motion`.

### Idiomas (obligatorio ES + EN)

Toda pieza nueva sale en **los dos idiomas**:

| URL | Idioma |
|---|---|
| `/<slug>/` | Español (default, `x-default`) |
| `/<slug>/en/` | English |

- Switch boutique pill `ES | EN` al lado del theme toggle (misma barra `.chrome`).
- `hreflang` + `og:locale` / `og:locale:alternate` en ambas.
- Ads Manager / Help Center: link localizado (`es-419` / `es-es` en ES; default EN en inglés).
- Unfurl: `og.png` (ES) y `og-en.png` (EN), mismo layout, copy del idioma.

### Tipografía y copy

- H1: weight 200, una idea; **negrita parcial** (`<b>`) en la palabra clave.
- Español: **neutro** por default (cartera LATAM + España). Rioplatense solo si la pieza es claramente AR.
- Inglés: partner briefing claro, US/Intl English, sin calco del español.
- Tono: partner briefing, no blog, no hype. Frases cortas. Cifras solo con fuente.
- Código, comentarios y commits: **inglés**.

### OG / share (unfurl)

Cada pieza **lleva unfurl propio por idioma**: `og.png` (ES) y `og-en.png` (EN), 2400×1260, dark boutique, co-brand ABN × partner, eyebrow, H1, datechip, marca grande del partner — mismo layout que `youtube-views/og.png`. Eso es lo que WhatsApp/Slack/iMessage muestran al pegar el link; no uses el mockup cuadrado.

Meta `og:*` y `twitter:card=summary_large_image` con URLs absolutas y dimensiones reales, más `hreflang` ES/EN/`x-default`.

Favicon: data-URI del isotype ABN (como en las piezas actuales).

---

## Publicar

1. Carpeta `<slug>/` con `index.html` (+ assets).
2. Card nueva en `index.html` raíz.
3. Línea en README → Contenido actual.
4. Commit + push a `main`.
5. En ~1 minuto: `https://abn-digital.github.io/comunicaciones/<slug>/`

HTML **autocontenido**: CSS y JS inline. Sin dependencias externas obligatorias (no CDNs que rompan offline). Imágenes locales con rutas relativas.

No renombres ni borres slugs ya compartidos con clientes sin que lo pida el dueño del repo.

---

## Referencias canónicas

| Pieza | Qué mirar |
|---|---|
| [`youtube-views/`](./youtube-views/) | Patrón completo: co-brand, hero con motivo, cards before/after, APIs, footer |
| [`chatgpt-ads/`](./chatgpt-ads/) | Co-brand OpenAI, mockup, markets, pricing callout, timeline de rollout |

Ante duda de layout o CSS: **duplicá y adaptá**, no reescribas desde cero.

---

## Qué no hacer

- Inventar métricas, fechas de launch o precios “de mercado”.
- Meter el rojo ABN / genéricos purple-AI / Inter como display.
- Forzar dark mode por defecto.
- Dejar la pieza fuera del índice raíz.
- Entregar solo markdown en el chat cuando pidieron una comunicación.
- Dependencias de build o frameworks.
