---
tags: [claude-code, modelos, agentes]
fuente: claude-learning-hq/novedades + skill claude-api
actualizado: 2026-10-12
---

# Selector de modelo

> **Precios y parámetros exactos:** siempre de la skill `claude-api`, no de acá.
> Este archivo responde "¿qué modelo pongo para este caso de uso?".

## Lineup actual (oct 2026)

| Modelo | ID | Para qué brilla | Cuándo NO usarlo |
|--------|----|-----------------|------------------|
| **Fable 5.1** | `claude-fable-5-1` | Razonamiento complejo, arquitectura, tareas que requieren máximo esfuerzo | Tareas de alto volumen (caro), cuando Opus 5.5 alcanza |
| **Opus 5.5** | `claude-opus-5-5` | Agentic coding, knowledge work intensivo, pipelines largos | Si Sonnet 5.5 resuelve el problema — costo innecesario |
| **Sonnet 5.5** | `claude-sonnet-5-5` | Asistente de código del día a día, orquestador de workflows, tareas balanceadas | Volumen masivo de llamadas cortas (usar Haiku) |
| **Haiku 5.5** | `claude-haiku-5-5` | Clasificación, routing, compaction, form filling, computer use repetitivo, subagentes de alto volumen | Agentic coding complejo, contextos que requieren reasoning profundo |

## Regla práctica por caso de uso

### Agente principal (orquestador)
→ **Sonnet 5.5** por defecto. Escalá a Opus 5.5 si el agente hace decisiones de arquitectura.

### Subagentes de fan-out (muchas tareas paralelas simples)
→ **Haiku 5.5** con effort `low` o `medium`. Desde oct 2026 es el más barato del lineup (75% menos que Haiku 4.5) y el primero con effort controls.

### Compaction / summarization automática
→ **Haiku 5.5** (configurable en Claude Code con `compactModel`).

### Tareas únicas de alto razonamiento
→ **Fable 5.1** o **Opus 5.5** según si el costo extra se justifica.

### Asistente interactivo (el que escribe código en el día a día)
→ **Sonnet 5.5** (es el default en planes Pro/Team desde v2.1.280).

## Settings relacionados en Claude Code

```json
// settings.json — forzar modelo global:
{ "model": "claude-sonnet-5-5" }

// Por subagente (Agent tool):
// { effort: "low" }  → usa el modelo configurado al nivel de esfuerzo pedido

// Modelo de compaction:
{ "compactModel": "claude-haiku-5-5" }
```

## Cómo actualiza el actualizador
Cada corrida del actualizador revisa si el lineup cambió (nuevo modelo, cambio de pricing que
altera la decisión de uso, nuevo modelo default en Claude Code) y actualiza esta tabla.
Si cambia la recomendación de columna (ej: Haiku 5.5 reemplaza a Haiku 4.5 para subagentes),
también anota el cambio en `delta.md`.
