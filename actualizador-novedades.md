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
>     why:"Una frase: por qué le importa a quien construye webs y agentes."},
>    ```
>    Convención de color (`tagc`): modelo→`berry`, claude code→`clay`, skills/mcp→`pine`,
>    api→`slate`, app/otros→`gold`.
>
> 4. **Marcá `fresh:false`** en TODAS las entradas que ya estaban (sacales el resaltado de "nuevo").
>    Solo las que agregues en esta corrida llevan `fresh:true`.
>
> 5. **Actualizá** `LAST_SYNC` a la fecha de hoy (formato `AAAA-MM-DD`).
>
> 6. **No toques nada más** del archivo. No cambies estilos, ni otras secciones, ni `app.js`.
>    Si no encontrás novedades nuevas, igual actualizá `LAST_SYNC` a hoy y dejá una nota en el
>    resumen final ("sin novedades nuevas esta corrida").
>
> 7. Al terminar, mostrame un resumen: cuántas novedades agregaste y los títulos.

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
