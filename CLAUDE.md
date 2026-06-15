# CLAUDE.md — Claude Learning HQ

Reglas para trabajar en este proyecto. Leelo antes de tocar nada.

## Qué es
La academia central de Claude de Juan: una app web de **un solo archivo** (sin build, sin
dependencias, sin framework). Funciona abriendo `index.html` o publicada en GitHub Pages.
Público: Juan y cualquiera que contrate para aprender Claude. Idioma de TODO el contenido:
**español rioplatense**, directo, sin relleno.

🟢 En vivo: https://juanchiansaldi.github.io/claude-learning-hq/
📦 Repo: https://github.com/juanchiansaldi/claude-learning-hq

## Estructura
- `index.html` — estilos, HTML y **todos los datos** (arrays `NOVEDADES`, `PROMPTS`, `SLASHES`,
  `CONCEPTOS`, `ROADMAP`, `PATHS`, `AG_*`, `RETOS`, `NAV`) + la constante `LAST_SYNC`.
- `app.js` — íconos, el logo SVG, funciones de render, estado en `localStorage`, navegación.
- `actualizador-novedades.md` — prompt del auto-actualizador de la sección Novedades.
- `claude-hq-v3.html` — prototipo viejo. NO se usa; no lo edites ni lo borres sin avisar.

## Cómo está armado (para no romperlo)
- Toda sección nueva: agregá su entrada en `NAV` (index.html) + un ícono en `I` (app.js) +
  una función `secX()` en `app.js` y sumala al array de `buildAll()`.
- Las secciones con tareas (roadmap, paths) usan claves de progreso `rm-<fase>-<tarea>` y
  `pt-<path>-<paso>`. No cambies el formato de esas claves: rompés el progreso guardado.
- El contenido del usuario (prompts propios, progreso, racha) vive en `localStorage` con
  prefijo `clhq_`. No lo toques.
- La entrada del Lab se escapa con `esc()` antes de inyectarse. Mantené eso (anti-XSS).

## Datos de modelos = fuente de verdad
Los modelos y sus IDs que aparecen en la app (Fable 5, Opus 4.8, Sonnet 4.6, Haiku 4.5) salen
de la skill **claude-api**. Antes de cambiar cualquier dato de modelo, precio o capacidad,
**volvé a leer esa skill** — no lo edites de memoria.

## Novedades (auto-update)
Para refrescar la sección Novedades, seguí `actualizador-novedades.md`: busca en la web lo
nuevo de Claude desde `LAST_SYNC`, lo agrega arriba del array `NOVEDADES`, pone `fresh:false`
en las viejas, sube `LAST_SYNC` a hoy, y NADA más. No reescribas otras secciones en esa corrida.

## Flujo de trabajo
- Commits chicos, en español (feat/fix/chore). Rama `master` es la que publica Pages.
- **Publicar = pushear**: `git add -A && git commit && git push`. Pages redeploya en ~30s.
- Después de cambios visuales, verificá en navegador (skill `browse`) antes de pushear:
  revisá que no haya errores de consola y que la sección cambiada renderice.
- No agregues librerías ni build tools: la gracia es que sea un solo HTML que se abre y anda.
- **Cache-busting:** cada vez que edites `app.js`, bumpeá la query de versión en
  `index.html` (`<script src="app.js?v=...">`). GitHub Pages cachea con max-age=600, así que
  sin bump el navegador puede servir un `app.js` viejo durante 10 min. El auto-actualizador
  no toca `app.js`, así que no necesita bumpear.

## Guardarraíles
- No borres archivos sin confirmación. No toques `claude-hq-v3.html`.
- No metas secrets ni API keys en el repo (es público).
- Si un cambio toca más de un par de secciones, mostrá el plan antes de ejecutar.
