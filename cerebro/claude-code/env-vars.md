---
tags: [claude-code, env, config]
fuente: claude-learning-hq/novedades
actualizado: 2026-09-13
---

# Variables de entorno útiles

Van en `~/.zshrc` / `~/.bashrc`, o dentro de un hook `SessionStart` vía `$CLAUDE_ENV_FILE`
(ver [[hooks]]).

| Variable | Qué hace | Desde |
|---|---|---|
| `CLAUDE_CODE_ENABLE_TODO_TOOLS=1` | Restaura TaskCreate/TodoWrite en Opus 4.8, Sonnet 5, Fable 5+ | v2.1.233 |
| `CLAUDE_CODE_TOOL_MEMORY_LIMIT=512m` | Límite de RAM (cgroup) para comandos Bash sandboxeados. Linux. | v2.1.233 |
| `CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS=900000` | TTL del caché de WebFetch (default 15 min) | v2.1.233 |
| `CLAUDE_CODE_PROJECT_DIR_NAME=mi-proyecto` | Nombre del directorio de transcripts por proyecto | v2.1.234 |
| `ANTHROPIC_DEFAULT_FABLE_MODEL="claude-fable-5-1[1m]"` | Pin del modelo Fable con ventana 1M para agentes `model: fable` | v2.1.260 |
| `API_TIMEOUT_MS` | Cuánto espera el reintento si la API no manda headers (default 10 min) | v2.1.261 |
| `PLAYWRIGHT_BROWSERS_PATH` / `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` | En Claude Code web: Chromium ya está en `/opt/pw-browsers` | — |
| `CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS` | Sube el límite de agentes concurrentes del Workflow tool. Acepta 1–256. Usar para fan-outs intensivos donde la inferencia es el bottleneck. | v2.1.269 |
| `OTEL_METRICS_INCLUDE_REPOSITORY` | Etiqueta métricas y eventos OpenTelemetry con atributos `vcs.*` del repo activo. Combinar con `OTEL_LOG_TOOL_DETAILS` para commits con `vcs.ref.head.*`. | v2.1.269 |
| `CLAUDE_CODE_GATEWAY_MODEL_DISCOVERY_TIMEOUT_MS` | Extiende el timeout del endpoint `/v1/models` en gateways LLM propios. Default: 3000 ms. | v2.1.269 |

## En la nube (Claude Code on the web)

- `CLAUDE_CODE_REMOTE=true` — detectá que estás en un contenedor remoto.
- `CLAUDE_PROJECT_DIR` — raíz del repo clonado.
- El disco es una cuota fija por sesión: `df` engaña. Si falla por espacio, borrá artefactos.

Relacionado: [[settings-json-cheatsheet]] · [[costo-y-cache]]
