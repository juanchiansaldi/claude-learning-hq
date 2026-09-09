---
tags: [claude-code, costo, prompt-caching, api]
fuente: claude-learning-hq/novedades
actualizado: 2026-09-09
---

# Costo y prompt caching

> Precios y IDs de modelo: **no los anotes acá**, salen de la skill `claude-api`.

## Diagnóstico rápido

```
/cost
```
Desde v2.1.260 dice **por qué** falló el caché: `tool definitions changed`,
`system prompt modified`, `TTL expired`. El statusline suma el campo `prompt_cache`
(hit ratio, misses, warm/cold).

```
/claude-api cost-optimize
```
Perfila el uso de la API en el proyecto y lista palancas con ahorro estimado: caching,
Batch API (hasta 50% off), bajar de modelo, recortar contexto. Solo lectura (v2.1.247).

## Qué invalida el caché (evitá)

- Cambiar tool definitions a mitad de sesión.
- Modificar el system prompt (CLAUDE.md incluido) entre turnos.
- Dejar pasar el TTL: 5 min por defecto, 1 h para el hilo principal si lo configurás.
- **Bug viejo (< v2.1.237):** gateway/URL base propia invalidaba el caché en cada turno.
  Si usás proxy propio, actualizá.
- **Bug viejo (< v2.1.260):** en Fable 5.1 el contexto después de tool results no se cacheaba.

## TTLs

```json
{ "promptCacheTtl": 3600, "subagentPromptCacheTtl": 300 }
```
Solo para API key / Bedrock / Vertex. Hilo largo → 1 h; subagentes cortos → 5 min.
Ver [[settings-json-cheatsheet]].

## Fable 5.1 y la ventana de 1M

```bash
export ANTHROPIC_DEFAULT_FABLE_MODEL="claude-fable-5-1[1m]"
```
Con `model: fable` en el agente, el pin `[1m]` se respeta desde v2.1.260. Auto-compact
dispara antes del límite de 1M para no cortar la sesión.

## Precio real vs. lista

`modelPricing` (managed setting) hace que `/cost` use tus precios contractuales.
Los workspaces con data-residency US suman premium 1.1× (ya se refleja en Stats, v2.1.239).

## Contexto que se paga sin usar

```
/skill-doctor
```
Lista skills cargadas que no se usaron y cuántos tokens cuestan. Podá las que no aportan
(v2.1.261). Ver [[slash-commands]].

Relacionado: [[env-vars]] · [[subagentes-y-multisesion]]
