# cerebro/ — vault de conocimiento de Claude

Notas en formato Obsidian (frontmatter YAML + `[[wikilinks]]`) que destilan lo **accionable** de la
sección Novedades de la app. La app (`index.html`) cuenta *qué salió*; acá queda *cómo se usa*.

## Conectarlo a tu vault local

Elegí una:

```bash
# 1) Symlink dentro del vault (recomendado: siempre al día con git pull)
ln -s ~/ruta/a/claude-learning-hq/cerebro ~/ruta/a/tu-vault/claude-learning-hq

# 2) Abrir esta carpeta como vault aparte en Obsidian: "Open folder as vault" → cerebro/
```

## Quién escribe acá

- El auto-actualizador de novedades (`actualizador-novedades.md`, paso 6b): cuando encuentra
  algo accionable, actualiza la nota correspondiente en `claude-code/`.
- La skill `claude-code-tuneup` (`.claude/skills/`) **lee** estas notas para aplicar la config.

## Índice

- [[claude-code/settings-json-cheatsheet]] — settings útiles para `~/.claude/settings.json`
- [[claude-code/hooks]] — hooks nuevos y qué reciben
- [[claude-code/subagentes-y-multisesion]] — subagentes, SendMessage/ListAgents, Workflow
- [[claude-code/costo-y-cache]] — prompt caching, `/cost`, TTLs, cost-optimize
- [[claude-code/env-vars]] — variables de entorno que cambian el comportamiento
- [[claude-code/slash-commands]] — comandos nuevos y cuándo usarlos
