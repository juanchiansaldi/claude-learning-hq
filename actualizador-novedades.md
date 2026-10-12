# Actualizador de novedades — Claude Learning HQ

Este archivo es un **prompt listo para correr**. Lo ejecuta Claude Code (a mano o en bucle
programado) para mantener al día la sección **Novedades** de la academia, sin que vos hagas nada.

## Cómo se usa

**A mano**, cuando quieras refrescar:

```
claude
```

…y dentro de la sesión, pegá el prompt de abajo (o decí: "seguí las instrucciones de actualizador-novedades.md").

**En automático**, programado cada pocos días (ver "Activar el automático" al final).

---

## EL PROMPT (esto es lo que ejecuta Claude)

> Sos el actualizador de **Claude Learning HQ**. Tu única tarea es mantener fresca la sección
> Novedades de `index.html`. Seguí estos pasos:
>
> 1. **Leé** `index.html` y encontrá la constante `LAST_SYNC` (la fecha de la última
>    sincronización) y el array `NOVEDADES`.
>
> 2. **Buscá en la web** novedades de Claude y Claude Code publicadas **después** de `LAST_SYNC`.
>    Fuentes confiables, en este orden:
>    - `https://code.claude.com/docs/en/changelog` (changelog oficial de Claude Code)
>    - `https://www.anthropic.com/news` (anuncios de modelos y producto)
>    - `https://docs.claude.com/en/release-notes` (release notes de la API / apps)
>    Quedate solo con lo **relevante** para alguien que construye webs y agentes con Claude
>    (modelos nuevos, comandos nuevos, features de Claude Code, skills, MCP, precios, límites).
>    Ignorá cambios menores de bugfix sin impacto para el usuario.
>
> 3. **Por cada novedad nueva**, armá un objeto con esta forma exacta y agregalo **al principio**
>    del array `NOVEDADES` (las más nuevas arriba):
>    ```js
>    {date:"AAAA-MM-DD", tag:"modelo|claude code|skills|api|app", tagc:"berry|clay|pine|slate|gold",
>     fresh:true, title:"Título corto y claro",
>     body:"2-4 frases en español rioplatense explicando qué cambió, sin tecnicismos innecesarios.",
>     why:"Una frase: por qué le importa a quien construye webs y agentes.",
>     more:{detail:"Párrafo más largo: qué es a fondo y para qué sirve.",
>       code:["comando o ejemplo de cómo se usa"],
>       links:[["texto del link","https://url"]]}},
>    ```
>    El campo `more` es **obligatorio** (hace que la card se expanda al clickearla mostrando
>    "Qué es y para qué sirve" + "Cómo se usa"). `more.detail` es texto; `more.code` (opcional)
>    es un array de líneas copiables (comandos/ejemplos); `more.links` (opcional) es un array de
>    `["texto","url"]`. Convención de color (`tagc`): modelo→`berry`, claude code→`clay`,
>    skills/mcp→`pine`, api→`slate`, app/otros→`gold`.
>
> 4. **Marcá `fresh:false`** en TODAS las entradas que ya estaban (sacales el resaltado de "nuevo").
>    Solo las que agregues en esta corrida llevan `fresh:true`.
>
> 5. **Actualizá** `LAST_SYNC` a la fecha de hoy (formato `AAAA-MM-DD`).
>
> 6. **No toques nada más** de `index.html`. No cambies estilos, ni otras secciones, ni `app.js`.
>    Si no encontrás novedades nuevas, igual actualizá `LAST_SYNC` a hoy y dejá una nota en el
>    resumen final ("sin novedades nuevas esta corrida").
>    **Alcance de esta regla:** aplica a `index.html` y `app.js`. Los archivos de `cerebro/` son
>    salida esperada de esta corrida (paso 6b), no "tocar otra cosa". Si el prompt que te invocó
>    dice "no toques nada más", interpretalo así.
>
> 6b. **Alimentá el cerebro** (OBLIGATORIO para todo lo accionable). Seguí estos tres pasos:
>
>    **B1 — Notas específicas:** si la novedad trae un setting, flag, hook, env var, comando nuevo
>    o límite que cambió, agregalo a la nota correspondente en `cerebro/claude-code/`:
>    `settings-json-cheatsheet.md`, `hooks.md`, `env-vars.md`, `costo-y-cache.md`,
>    `subagentes-y-multisesion.md`, `slash-commands.md`. Una fila o bloque corto, con versión
>    de origen, y subí `actualizado:` en el frontmatter. Solo si es accionable; un fix
>    transparente no va.
>
>    **B2 — delta.md** (SIEMPRE que algo del baseline cambie): si la novedad implica que algo se
>    debería hacer diferente a como se hacía antes (nuevo modelo recomendado, nuevo setting útil,
>    comportamiento que cambió), agregá una fila a `cerebro/claude-code/delta.md` con:
>    fecha | área | anterior | nuevo | origen. Actualizá también `actualizado:` en su frontmatter.
>
>    **B3 — modelos.md** (cuando cambie el lineup): si hay un nuevo modelo, un cambio de pricing
>    que altera la decisión de uso, o un cambio de modelo default en Claude Code, actualizá la
>    tabla de `cerebro/claude-code/modelos.md`. Actualizá `actualizado:` en el frontmatter.
>
>    **B4 — tuneup SKILL.md** (cuando cambie el baseline): si el paso B2 agrega algo que debería
>    estar en la sección "Baseline por defecto" del skill `claude-code-tuneup`, actualizalo
>    también. Esto asegura que el próximo tuneup ya incluya la mejora automáticamente.
>
> 7. Al terminar, mostrame un resumen: cuántas novedades agregaste, los títulos y qué notas de
>    `cerebro/` tocaste.

---

## Activar el automático

Para que corra solo cada pocos días, tenés opciones:

- **Dentro de Claude Code:** `/loop` con un intervalo, apuntando a este archivo. Ej:
  `claude` → `/loop 3d seguí las instrucciones de actualizador-novedades.md`
  (se mantiene mientras la sesión siga viva).

- **Agente programado en la nube (`/schedule`):** crea una rutina cron que corre aunque tengas
  la compu apagada. Necesita que esta carpeta esté en un repo de git. Pedíselo a Claude:
  *"Programá un agente que cada 3 días siga actualizador-novedades.md"*.

- **Cron del sistema (macOS):** un `launchd`/`cron` local que abra Claude Code con este prompt.

> Sugerencia: cada 3–4 días alcanza. Claude saca pocas novedades grandes por semana.

---

## Prompt de la rutina programada (pegar tal cual en `/schedule`)

La rutina de la nube guarda su propio prompt, que **no vive en este repo**. Si la editás,
usá este texto — ya incluye el paso 6b (alimentar `cerebro/`):

```text
Sos el actualizador automático de la sección Novedades de la app Claude Learning HQ.
Estás en un checkout del repo claude-learning-hq.

1. Leé `actualizador-novedades.md` y `CLAUDE.md` y seguilos al pie de la letra.
2. Buscá en la web (WebSearch/WebFetch) novedades de Claude y Claude Code publicadas DESPUÉS
   de la fecha de `LAST_SYNC` en index.html. Fuentes: code.claude.com/docs/en/changelog,
   anthropic.com/news, platform.claude.com/docs/en/release-notes. Quedate SOLO con lo
   relevante para quien construye webs y agentes (modelos, comandos, features de Claude Code,
   skills, MCP, precios, límites). Ignorá bugfixes menores.
3. Por cada novedad, agregá un objeto al PRINCIPIO del array NOVEDADES con la forma exacta de
   los existentes: {date, tag, tagc, fresh:true, title, body, why, more:{detail, code, links}}.
   El campo `more` es obligatorio. Español rioplatense.
4. Poné fresh:false en TODAS las entradas que ya estaban.
5. Actualizá LAST_SYNC a hoy (AAAA-MM-DD).
6. No toques otras secciones de index.html ni app.js. SÍ ejecutá el paso 6b del
   actualizador completo:
   - Lo accionable va a las notas de cerebro/claude-code/ (settings, hooks, env-vars, etc.)
   - Si cambia el baseline (nuevo modelo recomendado, nuevo setting útil), anotá el cambio
     en cerebro/claude-code/delta.md (tabla: fecha | área | anterior | nuevo | origen).
   - Si hay un nuevo modelo o cambio de uso recomendado, actualizá cerebro/claude-code/modelos.md.
   - Si el baseline del tuneup cambia, actualizá .claude/skills/claude-code-tuneup/SKILL.md.
7. Si no encontrás novedades, igual actualizá LAST_SYNC.
8. Verificá que index.html siga siendo JS válido (node --check sobre el bloque <script>).
   Commit en español ('chore: actualizar novedades AAAA-MM-DD') y push a master.

Al final resumí cuántas novedades agregaste, sus títulos y qué notas de cerebro/ tocaste.
```

> El paso 6 es el que importa: la versión vieja decía *"NO toques nada más: ni estilos, ni
> app.js, ni otras secciones, ni otros archivos"*, y ese "ni otros archivos" bloqueaba `cerebro/`.
