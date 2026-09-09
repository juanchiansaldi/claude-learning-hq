---
name: claude-code-tuneup
description: Aplicá lo último de Claude Code a la configuración de Juan (settings.json de usuario o proyecto, hooks, env vars, subagentes, prompt caching) usando las notas de cerebro/claude-code/ como fuente. Usala siempre que el usuario pida "hacer a Claude más inteligente", "optimizar/configurar/tunear Claude Code", "aplicar las novedades", o nombre cualquier setting o flag (bashOutputMaxChars, promptCacheTtl, modelPicker, PreModelSwitch, --restricted, /skill-doctor, etc.), aunque no diga la palabra skill.
---

# claude-code-tuneup

Objetivo: que la configuración de Claude Code de Juan refleje las últimas features útiles,
sin adivinar de memoria. La fuente de verdad son las notas de `cerebro/claude-code/`;
esta skill solo las aplica.

## Pasos

1. **Leé las notas** que apliquen al pedido. Siempre `cerebro/claude-code/settings-json-cheatsheet.md`;
   sumá `hooks.md`, `env-vars.md`, `costo-y-cache.md`, `subagentes-y-multisesion.md` o
   `slash-commands.md` según el tema. No inventes settings que no estén ahí.

2. **Relevá el estado actual** (en paralelo):
   - `claude --version`
   - `~/.claude/settings.json`, `.claude/settings.json`, `.claude/settings.local.json`
   - variables de entorno relevantes (`env | grep -E 'CLAUDE|ANTHROPIC'`)

3. **Proponé el diff** en una tabla: setting · valor actual · propuesto · por qué · nota fuente.
   Si la versión instalada es anterior a la que introduce un setting, decilo y sugerí
   `claude update` primero.

4. **Aplicá**:
   - Nivel usuario (`~/.claude/settings.json`): pedí confirmación antes de escribir.
   - Nivel proyecto dentro del repo: aplicá directo con `Edit` (merge sobre lo existente,
     nunca pisar claves ajenas).
   - Validá el JSON: `python3 -m json.tool <archivo>`.

5. **Lo procedural no se automatiza**: si la novedad es un comando interactivo
   (`/skill-doctor`, `/claude-api cost-optimize`, `/cost`), indicá al usuario que lo corra
   y qué mirar en el output.

6. **Cerrá** con: qué cambió, dónde, y qué requiere reiniciar la sesión.

## Baseline por defecto

Si el pedido es genérico ("hacé a Claude más inteligente"), proponé este mínimo a nivel usuario:

```json
{
  "bashOutputMaxChars": 131072,
  "taskOutputMaxChars": 131072,
  "autoResumeOnLimitReset": true,
  "outputStyle": "concise"
}
```

y recomendá correr `/skill-doctor` una vez para podar skills que no se usan.

## Reglas

- Precios e IDs de modelo salen de la skill `claude-api`, no de estas notas.
- No toques `claude-hq-v3.html` ni las secciones de `index.html`.
- En Claude Code web, `~/.claude/settings.json` es efímero: avisá que el cambio útil es el
  del repo o el de la máquina local del usuario.
