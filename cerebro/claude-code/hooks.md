---
tags: [claude-code, hooks, config]
fuente: claude-learning-hq/novedades
actualizado: 2026-10-10
---

# Hooks de Claude Code

Los hooks van en `settings.json` bajo `"hooks"`. Cada evento recibe JSON por stdin y puede
responder JSON por stdout. Forma general:

```json
{
  "hooks": {
    "<Evento>": [
      { "matcher": "", "hooks": [ { "type": "command", "command": "./scripts/mi-hook.sh" } ] }
    ]
  }
}
```

## Eventos y para qué sirven

| Evento | Cuándo dispara | Uso típico | Desde |
|---|---|---|---|
| `PreToolUse` / `PostToolUse` | Antes/después de cada herramienta | Bloquear comandos, loguear | — |
| `SessionStart` | Al iniciar/reanudar/clear/compact | Instalar deps, exportar env. Ver skill `session-start-hook` | — |
| `PreModelSwitch` | Antes de que el agente cambie de modelo | Bloquear o pedir confirmación al escalar a Opus | v2.1.251 |
| `PostModelSwitch` | Después del cambio | Auditoría / logging | v2.1.251 |
| `DirectoryAdded` | Al hacer `/add-dir` | Validar o preparar el directorio nuevo | v2.1.219 |
| `Notification` | Cuando Claude notifica | Desktop / VS Code | — |

## PreModelSwitch — contrato

Recibe:
```json
{ "current_model": "claude-sonnet-5", "proposed_model": "claude-opus-5", "reason": "..." }
```
Responde:
```json
{ "action": "block", "message": "Solo Sonnet 5 en este proyecto" }
{ "action": "confirm" }
```
Sin respuesta o exit 0 → el cambio procede.

## SessionStart (resume) — campos nuevos

Desde v2.1.251 el hook de `source: "resume"` recibe `session_age` (segundos) y
`estimated_recache_cost`. Sirve para decidir si conviene reanudar o arrancar sesión nueva.

## Variables disponibles en hooks

- `$CLAUDE_PROJECT_DIR` — raíz del repo
- `$CLAUDE_ENV_FILE` — archivo donde escribir `export VAR=...` para persistir en la sesión
- `$CLAUDE_CODE_REMOTE` — `true` si corre en la nube (Claude Code on the web)

## agentId en plugin hooks (v2.1.293+, oct 2026)

Desde oct 2026, el evento `tool.check` de los plugin hooks incluye el campo `agentId`.
Permite aplicar lógica de permiso distinta para la sesión principal (`'main'`) vs subagentes.

```js
// hooks.js de un plugin
export function tool_check({ agentId, tool, input }) {
  if (agentId !== 'main') {
    if (tool === 'Bash') return { deny: true }; // bloquear Bash en subagentes
  }
  return { allow: true };
}
```

## onFailure en hooks de comando y HTTP (oct 2026)

`onFailure: 'block'` en un hook de tipo `command` o `http` hace que si el hook falla
(error de ejecución, timeout) la acción que intentaba realizar se bloquee.

```json
{
  "hooks": {
    "PreToolUse": [{ "command": "./check.sh", "onFailure": "block" }]
  }
}
```

## Inference Hooks (org)

Distinto de los hooks locales: un servidor tuyo (DLP) inspecciona cada prompt **antes** de que
llegue al modelo. Se configura a nivel org/gateway, no en `settings.json`.

Relacionado: [[settings-json-cheatsheet]] · [[subagentes-y-multisesion]]
