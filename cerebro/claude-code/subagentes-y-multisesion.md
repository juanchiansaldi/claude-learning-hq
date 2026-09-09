---
tags: [claude-code, agentes, subagentes, workflow]
fuente: claude-learning-hq/novedades
actualizado: 2026-09-09
---

# Subagentes, multi-sesión y Workflow

## Límites actuales

- Máx **20 subagentes concurrentes** (v2.1.217).
- Nesting (subagente que lanza subagente) **deshabilitado por defecto**; habilitado llega hasta
  profundidad 3 (v2.1.219).
- Los subagentes **heredan el permission mode del padre**; el parámetro `mode` en Task quedó
  deprecado (v2.1.234).

## System prompt de subagente desde archivo

Para prompts largos que no entran como argumento del shell:

```bash
claude --append-subagent-system-prompt-file ./prompts/subagente.md -p "tarea"
```
(v2.1.261)

## Ver lo que dice el subagente

```bash
claude --forward-subagent-text
```
Reenvía el texto del subagente al padre en vez de solo el resultado final (v2.1.211).

## Herramientas de tareas en modelos nuevos

`TaskCreate`, `TaskGet`, `TaskUpdate`, `TaskList`, `TodoWrite` **no están** por defecto en
Opus 4.8, Sonnet 5, Fable 5 y posteriores. Si un workflow las usa:

```bash
export CLAUDE_CODE_ENABLE_TODO_TOOLS=1
```
(v2.1.233) — ver [[env-vars]].

## Coordinar sesiones entre sí

- `ListAgents` — lista sesiones locales, en nube y Remote Control.
- `SendMessage({to, message})` — manda un turno a otra sesión. Si la sesión está offline en
  otra máquina, queda **en cola** hasta que reconecte (v2.1.261).

Patrón: sesión orquestadora → sesión de tests / sesión de review / sesión de docs.

## Workflow tool

- `agent('tarea', { schema })` valida el JSON Schema **antes** de lanzar el agente; si es
  imposible de satisfacer falla rápido (v2.1.260).
- Tamaño de workflow configurable en `/config` ("Dynamic workflow size") (v2.1.202).
- Requiere opt-in explícito del usuario ("usá un workflow", "ultracode").

## Agentes en background

Desde v2.1.198 hacen commit, push y abren PR borrador solos. Desde v2.1.225 piden trust
prompt antes de correr en un repo nuevo.

Relacionado: [[hooks]] · [[costo-y-cache]] · [[settings-json-cheatsheet]]
