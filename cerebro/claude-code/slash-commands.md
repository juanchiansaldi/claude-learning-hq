---
tags: [claude-code, comandos]
fuente: claude-learning-hq/novedades
actualizado: 2026-09-09
---

# Slash commands nuevos (jun–sep 2026)

| Comando | Para qué | Desde |
|---|---|---|
| `/skill-doctor` | Skills cargadas sin usar + costo en tokens. Correlo cada tanto y podá. | v2.1.261 |
| `/diff` | Panel lateral con los cambios sin commitear, togglable, en fullscreen. | v2.1.260 |
| `/cost` | Gasto de la sesión + diagnóstico de por qué falló el prompt cache. | v2.1.260 |
| `/advisor` · `/advisor <modelo>` · `/advisor off` | Modelo consejero que opina sobre el plan. Funciona en headless. | v2.1.260 |
| `/reload-plugins` | Recarga plugins sin reiniciar. | v2.1.260 |
| `/claude-api cost-optimize` | Perfil de gasto de la API del proyecto con palancas de ahorro. | v2.1.247 |
| `/claude-api upgrade` | Migra proyectos Python de SDK anthropic 0.x → 1.x. | v2.1.239 |
| `/usage-credits` | Créditos de uso en planes Enterprise. | v2.1.248 |
| `/config key=value` | Cambia un setting inline sin abrir el archivo. | jun 2026 |
| `/rewind` | Vuelve a un checkpoint; recupera la sesión después de `/clear`. | jun 2026 |
| `/goal` | Fija un objetivo persistente para la sesión (preview). | may 2026 |
| `/code-review --fix` | Revisa el diff y aplica los arreglos. | may 2026 |
| `/verify` · `/review` | Ya no se disparan solos: hay que invocarlos. | v2.1.215 |
| `/permissions` | Ahora abre mientras Claude trabaja; aplica al turno en curso. | v2.1.234 |
| `/status` · `claude doctor` | Suman línea "Organization policy" que explica si la policy no cargó. | v2.1.261 |

## Skills apiladas

```
/skill-a /skill-b hacé XYZ
```
Carga hasta 5 skills a la vez en un mismo prompt.

## Flags de CLI que conviene recordar

```bash
claude --restricted                # sandbox: sin Bash/Task/WebFetch, archivos solo en cwd
claude --worktree <url-PR-o-MR>    # worktree aislado; acepta MRs de GitLab
claude --append-subagent-system-prompt-file <archivo>
claude --forward-subagent-text
claude --proxy-authorization-command '<cmd>'   # gateways con token rotativo
claude -p --resume <file>          # headless reanudando transcript
```

Relacionado: [[costo-y-cache]] · [[subagentes-y-multisesion]] · [[settings-json-cheatsheet]]
