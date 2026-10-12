---
tags: [claude-code, delta, baseline]
fuente: claude-learning-hq/novedades
actualizado: 2026-10-12
---

# Delta de baseline — qué cambió en las mejores prácticas

El actualizador escribe acá cada vez que una novedad cambia **lo que Claude debería hacer
diferente**. No es un log de features: es el historial de "antes hacía X, ahora hay que hacer Y".

Sirve para: saber qué actualizar en configuraciones existentes, auditar qué tuneups ya aplicaste.

## Tabla de cambios

| Fecha | Área | Anterior | Nuevo | Origen |
|-------|------|----------|-------|--------|
| 2026-10-07 | Modelo para subagentes de volumen | `claude-haiku-4-5` | `claude-haiku-5-5` (75% más barato, effort controls) | Lanzamiento Haiku 5.5 |
| 2026-10-06 | Effort en subagentes (Agent tool) | Sin control por subagente | Parámetro `effort` por llamada al Agent tool | v2.1.292 |
| 2026-10-06 | Servers MCP con nombres de herramienta >128 chars | Rompían toda la sesión | Fix: se manejan correctamente | v2.1.292 |
| 2026-10-05 | WebFetch en agentes | Cortaba en 100K chars silenciosamente | Entrega contenido completo con offset | v2.1.290 |
| 2026-09-30 | Tools MCP que devuelven objetos/números | Causaban 400 errors de API | Deben devolver texto (JSON.stringify si es objeto) | v2.1.286 |
| 2026-09-25 | Atribución de Claude en commits/PRs | Siempre activa | `"attribution": false` disponible en settings.json | v2.1.281 |
| 2026-09-25 | Prompt cache con servidores MCP | Se perdía si el server se desconectaba | Fix: se preserva correctamente | v2.1.281 |
| 2026-09-22 | Modelo default en planes Pro/Team Standard | Sonnet | Opus 5.5 (desde v2.1.280) | Lanzamiento Opus 5.5 |
| 2026-09-19 | Auto mode classifier | Se facturaba por separado | Gratis para API/Enterprise desde v2.1.278 (revisar con `/status`) | v2.1.278 |
| 2026-09-14 | omitClaudeMd en subagentes | No disponible | `omitClaudeMd: true` en frontmatter del agente | v2.1.271 |
| 2026-09-11 | Límite agentes concurrentes en Workflows | Default bajo | `CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS` hasta 256 | v2.1.269 |

## Cómo usar esta tabla

1. Buscá en la columna "Fecha" desde la última vez que aplicaste un tuneup.
2. Para cada fila nueva, revisá si el cambio aplica a tu setup.
3. Si usás alguna configuración de la columna "Anterior", actualizala al "Nuevo".
4. El skill `claude-code-tuneup` puede aplicar los cambios de settings automáticamente.

## Notas de aplicación

- **Haiku 5.5 para subagentes**: si tenés `compactModel` o subagentes hardcodeados con `claude-haiku-4-5`, cambiálos a `claude-haiku-5-5`.
- **effort en Agent tool**: si usás el Agent tool, podés agregar `effort: "low"` a subagentes de tareas simples para ahorrar tokens de reasoning.
- **attribution: false**: si el repo es privado o no querés las líneas de co-autoría de Claude, agregá `{ "attribution": false }` en `.claude/settings.json`.
