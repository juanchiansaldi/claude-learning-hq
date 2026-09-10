---
tags: [claude-code, settings, config]
fuente: claude-learning-hq/novedades
actualizado: 2026-09-10
---

# settings.json — cheatsheet

Dónde va cada cosa:
- `~/.claude/settings.json` → usuario (aplica a todos los proyectos)
- `.claude/settings.json` → proyecto (se commitea)
- `.claude/settings.local.json` → proyecto, personal (no se commitea)
- Managed settings de org → lo fija el admin, pisa todo

## Baseline recomendado (usuario)

```json
{
  "bashOutputMaxChars": 131072,
  "taskOutputMaxChars": 131072,
  "autoResumeOnLimitReset": true,
  "outputStyle": "concise",
  "spellcheck": true
}
```

## Salida de comandos

| Setting | Qué hace | Desde |
|---|---|---|
| `bashOutputMaxChars` | Cuántos caracteres de un comando Bash ve Claude inline antes de mandarlos a archivo. Máx 128K (`131072`). Sin esto, builds/tests largos se cortan y Claude pierde el error. | v2.1.261 |
| `taskOutputMaxChars` | Lo mismo para tareas en segundo plano. | v2.1.261 |

## Sesión y UX

| Setting | Qué hace | Desde |
|---|---|---|
| `autoResumeOnLimitReset` | Al llegar al límite de uso, espera el reset y retoma sola. Clave para corridas nocturnas. | v2.1.234 |
| `outputStyle: "concise"` | Claude arranca directo con el resultado, sin preámbulo. | v2.1.237 |
| `spellcheck: true` | Subraya errores mientras escribís el prompt (usa aspell/hunspell/ispell del sistema). | v2.1.235 |
| `restricted: true` | Sin Bash/Task/WebFetch, archivos solo en cwd, no permite bypassPermissions. Para revisar código ajeno. Equivale al flag `claude --restricted`. | v2.1.248 |
| `fallbackModel` | Modelo de respaldo si el principal no está disponible. | — |

## Control de esfuerzo y rendering

| Setting | Qué hace | Desde |
|---|---|---|
| `maxEffortLevel` | Fija el techo de nivel de esfuerzo global o por modelo (`low`/`medium`/`high`/`xhigh`/`max`). Los usuarios pueden bajar pero no superar el máximo. Ideal para orgs con extended-thinking que quieren controlar el gasto. | v2.1.267 |

```json
{ "maxEffortLevel": "high" }
{ "modelSettings": { "claude-opus-4-1": { "maxEffortLevel": "xhigh" } } }
```

## Modelos y precios (org / equipo)

| Setting | Qué hace | Desde |
|---|---|---|
| `modelPicker` | Lista ordenada de modelos que aparecen en `/model`, con `id` y `label`. Acepta IDs de Bedrock/Vertex. | v2.1.243 |
| `modelPricing` | Precios contractuales por modelo → `/cost` y statusline muestran números reales. Managed setting. | v2.1.243 |
| `promptCacheTtl` / `subagentPromptCacheTtl` | TTL del caché del hilo principal (3600) vs subagentes (300). Solo API key / cloud providers. Ver [[costo-y-cache]]. | v2.1.243 |

```json
{
  "modelPicker": [
    { "id": "claude-opus-5", "label": "Opus 5" },
    { "id": "claude-sonnet-5", "label": "Sonnet 5" }
  ],
  "promptCacheTtl": 3600,
  "subagentPromptCacheTtl": 300
}
```

## Cambiar settings sin abrir el archivo

```
/config bashOutputMaxChars=131072
```
(`/config key=value` desde v2.1.2xx — junio 2026). Ver [[slash-commands]].

## Ojo

- `keybindingFlavor` **ya no hace nada** desde v2.1.261: las teclas de edición de palabra
  siguen Bash por defecto (Ctrl+W borra hasta el espacio).
- Validá el JSON después de editar: `python3 -m json.tool ~/.claude/settings.json`.

Relacionado: [[hooks]] · [[env-vars]] · [[subagentes-y-multisesion]]
