# Claude Learning HQ — la escuela de Claude

La academia central de Claude: prompts que funcionan, skills, comandos, agentes de
WhatsApp e Instagram, rutas de aprendizaje 0→100 y **novedades que se actualizan solas**.

App de un solo archivo, sin build ni dependencias. Funciona abriendo `index.html`
en el navegador o publicada en GitHub Pages.

## Secciones
- **Inicio** — dashboard con tu progreso y racha.
- **Novedades** — lo último de Claude y Claude Code, actualizado por un agente.
- **Ruta 0→100** — onboarding por rol (operador / web / agentes) para enseñarle a un nuevo.
- **Roadmap** — programa completo de 12 semanas.
- **Conceptos** — los fundamentos + tabla de modelos.
- **Comandos /** — qué hace cada slash (incluidos `/loop` y `/goal`).
- **Skills**, **Prompts** (con los tuyos), **Agentes WPP/IG**, **Lab** y **Reto del día**.

## Cómo se mantiene al día
`actualizador-novedades.md` es un prompt listo para que Claude Code busque las novedades
nuevas de Claude y las agregue solo a la sección Novedades. Se puede correr a mano,
con `/loop`, o como agente programado.

## Archivos
- `index.html` — la app (estilos, estructura y datos).
- `app.js` — lógica, render y estado (se guarda en el navegador).
- `actualizador-novedades.md` — el prompt del auto-actualizador.

---
Hecho con Claude Code.
