# COMUNICACIONES ABN Group

Comunicados listos para compartir con clientes. Publicación automática con **GitHub Pages**.

🔗 **En vivo:** https://abn-digital.github.io/comunicaciones/

Instrucciones para agentes (look, flujo, publish): **[AGENTS.md](./AGENTS.md)**.

---

## Cómo funciona

El repo sirve **estáticamente desde `main`**. Sin build: cualquier HTML que entre en `main` queda publicado.

### Sumar una comunicación

1. Carpeta bilingüe (ES default + EN):
   ```
   mi-comunicacion/
     ├── index.html      # español
     ├── en/index.html   # english
     ├── og.png
     └── og-en.png
   ```
2. Card nueva en el `index.html` de la raíz.
3. Commit + push a `main`.
4. En ~1 minuto:
   - ES `…/mi-comunicacion/`
   - EN `…/mi-comunicacion/en/`

> Usá carpeta + `index.html` (no `mi-comunicacion.html`) para URLs limpias.

### Notas

- HTML **autocontenido** (CSS/JS inline; imágenes con rutas relativas).
- `.nojekyll` evita que Pages ignore carpetas `_…`.
- Look: boutique ABN (marfil, Helvetica fina). Acento de color = del partner (YouTube, OpenAI, etc.), no rojo ABN.
- Tema: por defecto sigue al **sistema** del dispositivo; el toggle puede forzar claro/oscuro.

---

## Contenido actual

| Pieza | Tema |
|---|---|
| [`semana-2026-09-07/`](./semana-2026-09-07/) | Briefing semanal · Semana del 7 de septiembre de 2026 |
| [`readapt-clientes/`](./readapt-clientes/) | ABN Digital · Re·Adapt — Base bonificado + Pro 15 sep–15 dic 2026 |
| [`chatgpt-ads/`](./chatgpt-ads/) | OpenAI · Anuncios en ChatGPT (ES · MX · BR, ago 2026) |
| [`youtube-views/`](./youtube-views/) | YouTube · Cambio en el conteo de visualizaciones (24/8/2026) |
