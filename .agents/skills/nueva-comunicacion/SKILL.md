---
name: nueva-comunicacion
description: >-
  Arma un comunicado cliente-ready en el repo de comunicaciones ABN (HTML
  estático → GitHub Pages). Usar cuando alguien manda una noticia, un link
  oficial, un forward de Slack, un cambio de plataforma (YouTube, OpenAI,
  Meta, Google, etc.) o pide “una comunicación”, “un comunicado” o “algo
  lindo para mandarle a clientes”. La entrega es el link público de la pieza,
  no un resumen en el chat.
---

# Nueva comunicación

Leé primero [AGENTS.md](../../../AGENTS.md). Ahí está el look, el publish y las reglas duras.

## Entrada típica

Cualquiera de estas alcanza para arrancar:

- Link a help center / blog / changelog de una plataforma
- Mensaje de Slack (“acá en España ya lanzaron…”)
- Pedido explícito: “armame una comunicación de X”

No esperes un brief perfecto. Investigá vos.

## Pasos

### 1. Investigar

- Abrí la fuente oficial (y 1–2 confiables si hace falta).
- Anotá: qué cambió, desde cuándo, a quién afecta, precios/límites solo si la fuente los dice, links canónicos.
- Si hay mockup o captura del usuario, usala como asset (no la re-generes si ya sirve).

### 2. Definir la pieza

| Campo | Cómo |
|---|---|
| `slug` | kebab-case corto (`chatgpt-ads`, `youtube-views`) |
| Partner | Marca del ecosistema (YouTube, ChatGPT, Meta…) → acento de color de **ellos** |
| Tesis del H1 | Una frase; negrita parcial en la palabra clave |
| Audiencia | Partners / clientes ABN — tono briefing |

Preguntá solo lo bloqueante (audiencia, creativo faltante, fecha). Todo lo demás: fuente oficial o `PENDIENTE` visible.

### 3. Implementar

1. Creá `<slug>/` **y** `<slug>/en/`.
2. Partí de la pieza canónica más cercana:
   - Bilingüe + ads/rollout → `chatgpt-ads/` (ES + `en/`)
   - Cambio técnico / APIs → `youtube-views/` (aún ES-only; al tocar, migrá a ES+EN)
3. HTML **autocontenido** (CSS+JS inline). Assets en la carpeta raíz del slug; desde `/en` usá `../`.
4. Incluí: chrome (pill **ES | EN** + theme), topbar co-brand, hero, motivo visual, secciones, **Fuentes · bibliografía**, disclaimer.
5. Tema: **default = sistema**; toggle con `data-theme`.
6. Meta OG/Twitter + `hreflang` + `og.png` / `og-en.png`.
7. Si el cuerpo toca un tema técnico, linkeá la doc profunda en ambos idiomas.

### 4. Cablear el repo

- Card nueva **arriba** en `/index.html`.
- Línea en README → Contenido actual.
- No toques slugs viejos.

### 5. Entregar

Siempre cerrá con el link:

```
ES  https://abn-digital.github.io/comunicaciones/<slug>/
EN  https://abn-digital.github.io/comunicaciones/<slug>/en/
```

Si aún no hay push a `main`, decí ambas URLs y que hace falta commit + push (o hacelo si te lo pidieron).

## Checklist antes de dar por cerrado

- [ ] Hechos alineados a fuente oficial (sin cifras inventadas)
- [ ] ES + EN (`/<slug>/` y `/<slug>/en/`) con pill de idioma
- [ ] Footer con documento base + bibliografía (no invento nuestro)
- [ ] Look ABN boutique + acento del partner (ABN sin rojo)
- [ ] Default de tema = system, no dark forzado
- [ ] Listada en `index.html` raíz + README
- [ ] `og.png` + `og-en.png` 2400×1260 + meta OG/Twitter + hreflang
- [ ] Links públicos ES y EN en la respuesta final
