/* ============================================================= ICONS */
const I={
home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/>',
spark:'<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>',
route:'<circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="5" r="2.4"/><path d="M8.4 19H14a4 4 0 0 0 4-4V8"/>',
map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
terminal:'<polyline points="5 8 9 12 5 16"/><line x1="12" y1="16" x2="19" y2="16"/>',
puzzle:'<path d="M19 11.5a2 2 0 1 0 0-4V5a1 1 0 0 0-1-1h-2.5a2 2 0 1 0-4 0H9a1 1 0 0 0-1 1v2.5a2 2 0 1 0 0 4V14a1 1 0 0 0 1 1h2.5a2 2 0 1 0 4 0H18a1 1 0 0 0 1-1Z"/>',
bolt:'<polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2"/>',
chat:'<path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-6A8.4 8.4 0 1 1 21 11.5Z"/>',
beaker:'<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><line x1="7" y1="15" x2="17" y2="15"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
search:'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
cli:'<polyline points="4 7 9 12 4 17"/><line x1="12" y1="17" x2="20" y2="17"/>',
doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 3 14 8 19 8"/><line x1="9" y1="13" x2="15" y2="13"/>',
git:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/><circle cx="18" cy="6" r="3"/>',
mcp:'<rect x="2" y="3" width="20" height="6" rx="1"/><rect x="2" y="13" width="20" height="6" rx="1"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="16" x2="6.01" y2="16"/>',
loop:'<path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h14"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H3"/>',
agents:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
bulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z"/>',
};
const svg=(p,w)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w||2}" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICO_COPY=svg(I.copy,2);

/* logo mark — spark + orbita girando (siempre actualizándose) */
const LOGO=`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="13" fill="#C15F3C"/>
  <rect width="48" height="48" rx="13" fill="url(#lg)" opacity=".35"/>
  <g stroke="#FBF3EA" stroke-width="3.2" stroke-linecap="round">
    <line x1="24" y1="11" x2="24" y2="37"/>
    <line x1="11" y1="24" x2="37" y2="24"/>
    <line x1="15" y1="15" x2="33" y2="33"/>
    <line x1="33" y1="15" x2="15" y2="33"/>
  </g>
  <circle cx="24" cy="24" r="3.4" fill="#FBF3EA"/>
  <g style="transform-origin:24px 24px;animation:orbit 9s linear infinite">
    <circle cx="24" cy="6.5" r="2.1" fill="#FBF3EA"/>
  </g>
  <defs><linearGradient id="lg" x1="0" y1="0" x2="48" y2="48"><stop stop-color="#E08B5C"/><stop offset="1" stop-color="#A8492A"/></linearGradient></defs>
</svg>`;
// inyectar keyframes de la órbita
(function(){const s=document.createElement('style');s.textContent='@keyframes orbit{to{transform:rotate(360deg)}}';document.head.appendChild(s);})();

/* ============================================================= STATE */
const LS={get:(k,d)=>{try{return JSON.parse(localStorage.getItem('clhq_'+k))??d}catch{return d}},set:(k,v)=>localStorage.setItem('clhq_'+k,JSON.stringify(v))};
let progress=LS.get('progress',{});
let userPrompts=LS.get('uprompts',[]);
let streak=LS.get('streak',{n:0,last:null,total:0});
let pathSel='operador', promptFilter='Todos', promptQuery='';

/* ============================================================= HELPERS */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function toast(m){const t=document.getElementById('toast');document.getElementById('toast-txt').textContent=m;t.classList.add('show');clearTimeout(window._tt);window._tt=setTimeout(()=>t.classList.remove('show'),1800)}
function copyText(t){navigator.clipboard.writeText(t).then(()=>toast('Copiado ✓')).catch(()=>{const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove();toast('Copiado ✓')})}
function codeLine(c){return `<div class="codeline"><code>${esc(c)}</code><button class="copybtn" title="Copiar" onclick="copyText(this.previousElementSibling.textContent)">${ICO_COPY}</button></div>`}
function codeBlock(a){return a.map(codeLine).join('')}
function linkBtn(l){return l[1].startsWith('http')?`<a class="linkbtn" href="${l[1]}" target="_blank" rel="noopener">${l[0]} ↗</a>`:`<button class="linkbtn" onclick="go('${l[1]}')">${l[0]} →</button>`}
function promptBox(p,label){return `<div class="promptbox"><span class="lbl">${svg(I.bolt,2)} ${label||'Prompt para Claude Code'}</span><pre>${esc(p)}</pre><button class="btn small" onclick="copyText(this.previousElementSibling.textContent)">Copiar prompt</button></div>`}
function extras(ex){if(!ex)return '';let h='';if(ex.code)h+=codeBlock(ex.code);if(ex.links)h+=`<div class="linkrow">${ex.links.map(linkBtn).join('')}</div>`;if(ex.prompt)h+=promptBox(ex.prompt);if(ex.go)h+=`<div class="linkrow"><button class="linkbtn" onclick="go('${ex.go}')">Ir a la sección →</button></div>`;return h?`<div class="extras">${h}</div>`:''}
function ringSVG(pct){const r=56,c=2*Math.PI*r,off=c*(1-pct/100);return `<svg width="128" height="128"><circle cx="64" cy="64" r="${r}" fill="none" stroke="var(--line)" stroke-width="11"/><circle cx="64" cy="64" r="${r}" fill="none" stroke="var(--clay)" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" style="transition:stroke-dashoffset .6s"/></svg>`}

/* progreso global de tareas (roadmap + paths) */
function allTaskKeys(){let keys=[];ROADMAP.forEach((p,pi)=>p.tasks.forEach((t,ti)=>keys.push('rm-'+pi+'-'+ti)));PATHS.forEach(p=>p.steps.forEach((s,si)=>keys.push('pt-'+p.id+'-'+si)));return keys}
function doneCount(){return allTaskKeys().filter(k=>progress[k]).length}
function toggleTask(k,rer){progress[k]=!progress[k];LS.set('progress',progress);if(rer)window[rer]();renderRail();}

/* ============================================================= NAV */
function renderRail(){
  const done=doneCount(),total=allTaskKeys().length;
  let h='';
  NAV.forEach(grp=>{
    h+=`<div class="navsec">${grp.g}</div>`;
    grp.items.forEach(it=>{
      const fresh=it[0]==='novedades'&&isFresh();
      h+=`<button class="navbtn" data-sec="${it[0]}" onclick="go('${it[0]}')"><span class="ic">${svg(I[it[2]],2)}</span>${it[1]}${fresh?'<span class="dot"></span>':''}</button>`;
    });
  });
  document.getElementById('railnav').innerHTML=h;
  // topnav (mobile): flat
  let t='';NAV.forEach(g=>g.items.forEach(it=>{t+=`<button class="navbtn" data-sec="${it[0]}" onclick="go('${it[0]}')"><span class="ic">${svg(I[it[2]],2)}</span>${it[1]}</button>`}));
  document.getElementById('topnav').innerHTML=t;
  setActive(current);
  document.getElementById('foot-sync').textContent=fmtDate(LAST_SYNC);
}
function setActive(sec){document.querySelectorAll('.navbtn[data-sec]').forEach(b=>b.classList.toggle('active',b.dataset.sec===sec))}

let current='inicio';
function go(sec){
  current=sec;
  document.querySelectorAll('section').forEach(s=>s.classList.remove('visible'));
  const el=document.getElementById('sec-'+sec);
  if(el){el.classList.add('visible')}
  setActive(sec);
  window.scrollTo({top:0,behavior:'instant'});
  LS.set('last',sec);
}

/* ============================================================= RENDER: build all sections once */
function isFresh(){const seen=LS.get('novseen',null);return seen!==LAST_SYNC}
function fmtDate(d){const m=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];const[y,mo,da]=d.split('-');return `${parseInt(da)} ${m[parseInt(mo)-1]} ${y}`}

function buildAll(){
  const m=document.getElementById('main');
  m.innerHTML=[
    secInicio(),secNovedades(),secPaths(),secRoadmap(),secConceptos(),
    secComandos(),secSkills(),secPrompts(),secAgentes(),secLab(),secReto()
  ].join('');
  bindLab();
}

/* ---------- INICIO ---------- */
function secInicio(){
  const done=doneCount(),total=allTaskKeys().length,pct=total?Math.round(done/total*100):0;
  const quick=[
    ['novedades','spark','clay','Novedades de Claude','Lo último de Claude y Claude Code, actualizado solo.'],
    ['paths','route','pine','Ruta 0→100','El camino para que alguien aprenda todo lo que sabés.'],
    ['prompts','bolt','gold','Biblioteca de prompts','Webs hermosas, agentes, seguridad. Copiá y pegá.'],
    ['agentes','chat','berry','Agentes WPP/IG','Cómo construir el servicio que te van a pedir.'],
    ['comandos','terminal','slate','Comandos /','Qué hace cada slash: /loop, /goal, /agents…'],
    ['skills','puzzle','clay','Skills','Convertí lo que sabés en conocimiento reutilizable.'],
  ];
  return `<section id="sec-inicio">
    <div class="hero">
      <span class="badge"><span class="pulse"></span> Sincronizado al ${fmtDate(LAST_SYNC)}</span>
      <h1>La escuela donde <em>Claude</em> deja de ser una caja negra.</h1>
      <p>Tu base de operaciones: cada prompt que funciona, cada skill, cada comando, y cómo construir agentes de WhatsApp e Instagram. Se mantiene al día sola.</p>
      <div class="cta">
        <button class="btn" onclick="go('paths')">${svg(I.route,2)} Empezar la ruta 0→100</button>
        <button class="btn ghost" onclick="go('novedades')">Ver novedades</button>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><div class="n">${done}/${total}</div><div class="l">tareas completas</div></div>
      <div class="stat"><div class="n">${streak.n}</div><div class="l">racha (días)</div></div>
      <div class="stat"><div class="n">${PROMPTS.length+userPrompts.length}</div><div class="l">prompts guardados</div></div>
      <div class="stat dark"><div class="n">${NOVEDADES.length}</div><div class="l">novedades cargadas</div></div>
    </div>
    <div class="card" style="margin-bottom:24px">
      <div class="ringwrap">
        <div class="ring">${ringSVG(pct)}<div class="pct">${pct}<small>%</small></div></div>
        <div>
          <div class="eyebrow" style="margin-bottom:8px">tu progreso</div>
          <h3 class="serif" style="font-size:1.4rem;margin-bottom:6px">${pct<10?'Recién arrancás. Bienvenido.':pct<50?'Buen ritmo. Seguí así.':pct<100?'Ya sos peligroso con Claude.':'Dominás Claude. A enseñarle a otro.'}</h3>
          <p style="color:var(--ink2);max-width:50ch">Completaste ${done} de ${total} tareas entre el roadmap y las rutas de aprendizaje. Todo se guarda en este navegador.</p>
          <div style="margin-top:14px;display:flex;gap:9px;flex-wrap:wrap">
            <button class="btn small" onclick="go('roadmap')">Ir al roadmap</button>
            <button class="btn ghost small" onclick="go('reto')">Reto del día</button>
          </div>
        </div>
      </div>
    </div>
    <div class="eyebrow">explorá la academia</div>
    <div class="qgrid">
      ${quick.map(q=>`<button class="qcard ${q[2]}" onclick="go('${q[0]}')"><div class="ic">${svg(I[q[1]],2)}</div><h3 class="serif">${q[3]}</h3><p>${q[4]}</p><span class="arw">abrir →</span></button>`).join('')}
    </div>
  </section>`;
}

/* ---------- NOVEDADES ---------- */
function secNovedades(){
  LS.set('novseen',LAST_SYNC);
  return `<section id="sec-novedades">
    <div class="eyebrow">se actualiza solo</div>
    <h2 class="pagetitle">Novedades de Claude</h2>
    <p class="lede tight">Un agente revisa el changelog de Claude cada pocos días y agrega lo nuevo acá arriba. Vos solo leés lo último, sin perseguir blogs.</p>
    <div class="syncbar">
      <div class="l"><span class="dot"></span> <span>Última sincronización: <b>${fmtDate(LAST_SYNC)}</b></span></div>
      <div class="meta">fuente: code.claude.com/docs/changelog · anthropic.com/news</div>
    </div>
    <div class="timeline">
      ${NOVEDADES.map(n=>{const hm=!!n.more;return `<div class="tlitem ${n.fresh?'fresh':''}"><div class="nov ${hm?'has-more':''}" ${hm?'onclick="this.classList.toggle(\'open\')"':''}>
        <div class="top"><span class="tag ${n.tagc}">${n.tag}</span>${n.fresh?'<span class="tag new">nuevo</span>':''}<span class="date">${fmtDate(n.date)}</span></div>
        <h3 class="serif">${n.title}</h3>
        <p>${n.body}</p>
        ${n.why?`<div class="why"><b>Por qué te importa:</b> ${n.why}</div>`:''}
        ${hm?`<div class="nov-cta"><span class="lbl-c">Ver cómo se usa</span><span class="lbl-o">Cerrar</span><span class="chev">${svg('<polyline points="9 6 15 12 9 18"/>',2.4)}</span></div>
        <div class="nov-more" onclick="event.stopPropagation()">
          <h4>Qué es y para qué sirve</h4><p>${n.more.detail}</p>
          ${n.more.code?`<h4 class="howlbl">Cómo se usa</h4>${codeBlock(n.more.code)}`:''}
          ${n.more.links?`<div class="linkrow">${n.more.links.map(linkBtn).join('')}</div>`:''}
        </div>`:''}
      </div></div>`}).join('')}
    </div>
    <div class="callout clay" style="margin-top:24px">
      <div class="i">${svg(I.loop,2)}</div>
      <p><b>¿Cómo se mantiene al día?</b> En la carpeta del proyecto hay un archivo <code class="inline">actualizador-novedades.md</code>: un prompt listo para que Claude Code (en bucle programado) busque las novedades nuevas y las agregue solo a esta lista. Tu academia no envejece.</p>
    </div>
  </section>`;
}

/* ---------- PATHS (0→100) ---------- */
function secPaths(){
  return `<section id="sec-paths">
    <div class="eyebrow">onboarding por rol</div>
    <h2 class="pagetitle">Ruta 0→100</h2>
    <p class="lede tight">Si contratás a alguien, mandalo por acá. Tres caminos según lo que va a hacer; cada uno enseña lo que vos ya sabés, en orden. Se marca el progreso solo.</p>
    <div class="pathtabs" id="pathtabs"></div>
    <div class="progressbar"><i id="pathbar"></i></div>
    <div id="pathbody"></div>
  </section>`;
}
function renderPaths(){
  const tabs=document.getElementById('pathtabs');if(!tabs)return;
  tabs.innerHTML=PATHS.map(p=>`<button class="ptab ${p.id===pathSel?'active':''}" onclick="selPath('${p.id}')"><div class="ic">${svg(I[p.ic],2)}</div><div><div class="tt">${p.t}</div><div class="ts">${p.s}</div></div></button>`).join('');
  const p=PATHS.find(x=>x.id===pathSel);
  const keys=p.steps.map((s,i)=>'pt-'+p.id+'-'+i);
  const done=keys.filter(k=>progress[k]).length;
  document.getElementById('pathbar').style.width=(done/p.steps.length*100)+'%';
  document.getElementById('pathbody').innerHTML=`<div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <h3 class="serif" style="font-size:1.25rem">${p.t}</h3>
      <span class="tag clay">${done}/${p.steps.length} pasos</span>
    </div>
    ${p.steps.map((s,i)=>{const k='pt-'+p.id+'-'+i;const d=!!progress[k];return `<label class="task ${d?'done':''}"><input type="checkbox" ${d?'checked':''} onchange="toggleTask('${k}','renderPaths')"><div><div class="tt">${i+1}. ${s[0]}</div><div class="ts">${s[1]}</div></div></label>${extras(s[2])}`}).join('')}
  </div>`;
}
function selPath(id){pathSel=id;renderPaths()}

/* ---------- ROADMAP ---------- */
function secRoadmap(){
  return `<section id="sec-roadmap">
    <div class="eyebrow">12 semanas · 80% práctica</div>
    <h2 class="pagetitle">Roadmap completo</h2>
    <p class="lede tight">El programa entero para volverte pro con Claude Code, de los fundamentos a construir un producto real. Andá a tu ritmo; se guarda todo.</p>
    <div id="rmbody"></div>
  </section>`;
}
function renderRoadmap(){
  const el=document.getElementById('rmbody');if(!el)return;
  el.innerHTML=ROADMAP.map((ph,pi)=>{
    const keys=ph.tasks.map((t,ti)=>'rm-'+pi+'-'+ti);
    const done=keys.filter(k=>progress[k]).length,pct=Math.round(done/ph.tasks.length*100);
    return `<div class="phase" id="ph${pi}">
      <div class="ph" onclick="document.getElementById('ph${pi}').classList.toggle('open')">
        <div class="pic">${svg(I[ph.icon],2)}</div>
        <div class="pt"><div class="wk">${ph.wk}</div><h3 class="serif">${ph.title}</h3><div class="ct">${done}/${ph.tasks.length} tareas completas</div></div>
        <div class="mini"><div class="bar"><i style="width:${pct}%"></i></div><span class="pp">${pct}%</span><span class="chev">${svg('<polyline points="9 6 15 12 9 18"/>',2.4)}</span></div>
      </div>
      <div class="body">${ph.tasks.map((t,ti)=>{const k='rm-'+pi+'-'+ti;const d=!!progress[k];return `<label class="task ${d?'done':''}"><input type="checkbox" ${d?'checked':''} onchange="toggleTask('${k}','renderRoadmap')"><div><div class="tt">${t[0]}</div><div class="ts">${t[1]}</div></div></label>${extras(t[2])}`}).join('')}</div>
    </div>`;
  }).join('');
}

/* ---------- CONCEPTOS ---------- */
function secConceptos(){
  return `<section id="sec-conceptos">
    <div class="eyebrow">los cimientos</div>
    <h2 class="pagetitle">Conceptos clave</h2>
    <p class="lede">Si entendés estos 11 conceptos, entendés Claude. Cero relleno: qué es cada cosa y para qué te sirve.</p>
    <div class="grid c2">${CONCEPTOS.map(c=>`<div class="concept"><h3 class="serif"><span class="k">${c.k}</span> ${c.t}</h3><p>${c.d}</p></div>`).join('')}</div>
    <div class="sectit"><span class="n">↗</span> Modelos de Claude (hoy)</div>
    <p class="secsub">Cuál usar para qué. Cambiás de modelo con <code class="inline">/model</code>.</p>
    <div class="card" style="padding:6px 8px">
      <table class="mtable"><thead><tr><th>Modelo</th><th>ID</th><th>Para qué</th></tr></thead><tbody>
        <tr><td data-l="Modelo"><b>Claude Fable 5</b></td><td data-l="ID" class="mono">claude-fable-5</td><td data-l="Para qué">El más capaz. Razonamiento exigente y trabajo agéntico de largo horizonte.</td></tr>
        <tr><td data-l="Modelo"><b>Claude Opus 4.8</b></td><td data-l="ID" class="mono">claude-opus-4-8</td><td data-l="Para qué">El mejor para construir día a día. Lo que conviene por defecto.</td></tr>
        <tr><td data-l="Modelo"><b>Claude Sonnet 4.6</b></td><td data-l="ID" class="mono">claude-sonnet-4-6</td><td data-l="Para qué">Equilibrio velocidad/inteligencia. Volumen y tareas medianas.</td></tr>
        <tr><td data-l="Modelo"><b>Claude Haiku 4.5</b></td><td data-l="ID" class="mono">claude-haiku-4-5</td><td data-l="Para qué">Rápido y barato. Clasificar, tareas simples y mecánicas.</td></tr>
      </tbody></table>
    </div>
    <div class="callout"><div class="i">${svg(I.bulb,2)}</div><p><b>Regla práctica:</b> arrancá en Opus 4.8. Bajá a Sonnet/Haiku para ahorrar en tareas simples, subí a Fable 5 solo para lo más difícil. No elijas modelo por costo a ciegas: el tiempo perdido reescribiendo sale más caro.</p></div>
  </section>`;
}

/* ---------- COMANDOS ---------- */
function secComandos(){
  return `<section id="sec-comandos">
    <div class="eyebrow">claude code cli</div>
    <h2 class="pagetitle">Comandos slash</h2>
    <p class="lede tight">Cada comando: qué hace, cuándo usarlo y un ejemplo en acción. Los dos estrella que preguntaste — <code class="inline">/loop</code> y <code class="inline">/goal</code> — arriba de todo.</p>
    <div id="cmdlist">${SLASHES.map((c,i)=>`
      <div class="cmd" id="cmd${i}">
        <div class="ch">
          <span class="name">${c.n.replace('/','/').replace(c.n.slice(1),'<b>'+c.n.slice(1)+'</b>')}</span>
          ${c.hot?'<span class="tag new">clave</span>':''}
          <span class="what">${c.what}</span>
          <button class="linkbtn demobtn" onclick="document.getElementById('cmd${i}').classList.toggle('open')">▶ Ver en acción</button>
        </div>
        <div class="when"><b>Cuándo:</b> ${c.when}</div>
        <div class="demo">${c.demo.map(d=>`<div class="ln ${d[0]==='cm'?'':d[0]}">${d[0]==='cm'?'<span class="cm">❯ '+esc(d[1])+'</span>':esc(d[1])}</div>`).join('')}</div>
      </div>`).join('')}
    </div>
    <div class="sectit"><span class="n">⌨</span> Atajos del teclado</div>
    <p class="secsub">No son comandos, pero los vas a usar todo el tiempo.</p>
    <div class="grid c2">${ATAJOS.map(a=>`<div class="concept"><h3 class="serif"><span class="k">${esc(a[0])}</span></h3><p>${a[1]}</p></div>`).join('')}</div>
  </section>`;
}

/* ---------- SKILLS ---------- */
function secSkills(){
  return `<section id="sec-skills">
    <div class="eyebrow">conocimiento reutilizable</div>
    <h2 class="pagetitle">Skills</h2>
    <p class="lede">Una skill es una carpeta con un <code class="inline">SKILL.md</code> que Claude carga <b>solo cuando hace falta</b>. Es la forma de convertir lo que sabés (tu voz de marca, tu estándar de QA, tu manera de armar agentes) en algo que Claude aplica solo, en cada proyecto.</p>

    <div class="sectit"><span class="n">1</span> Cómo crear una skill</div>
    <p class="secsub">La forma más fácil: pedíselo a Claude. La description tiene que decir <b>cuándo</b> se activa.</p>
    <div class="card">${promptBox(SKILL_M2_PROMPT,'Prompt para crear cualquier skill')}
      <div style="margin-top:14px">
        <div class="eyebrow" style="margin-bottom:8px">o a mano</div>
        ${codeBlock(["mkdir -p ~/.claude/skills/mi-skill","# pegá el SKILL.md dentro de esa carpeta","/reload-skills  # o reiniciá la sesión"])}
      </div>
    </div>

    <div class="sectit"><span class="n">2</span> Las skills que te conviene armar</div>
    <p class="secsub">Las 4 que más rinden para tu trabajo (webs + agentes). Copiá el prompt y Claude la crea.</p>
    <div class="grid c2">${SKILL_RECS.map((s,i)=>`<div class="card flat"><div style="display:flex;align-items:center;gap:9px;margin-bottom:7px"><span class="tag ${s.tag}">skill</span><h3 class="serif" style="font-size:1.08rem">${s.t}</h3></div><p style="font-size:.88rem;color:var(--ink2);margin-bottom:6px">${s.d}</p><button class="btn small" onclick="copyText(SKILL_RECS[${i}].prompt)">Copiar prompt</button></div>`).join('')}</div>

    <div class="sectit"><span class="n">3</span> Skills y plugins oficiales</div>
    <p class="secsub">Claude ya trae skills internas (debug, code-review, etc.) y podés sumar más desde el marketplace.</p>
    <div class="card">${codeBlock(["/plugin marketplace add anthropics/claude-code","/plugin   # explorar e instalar","/reload-skills"])}
      <div class="linkrow" style="margin-top:12px">${linkBtn(["Docs de skills","https://docs.claude.com/en/docs/claude-code/skills"])}${linkBtn(["Marketplace","https://github.com/anthropics/claude-code"])}</div>
    </div>

    <div class="sectit"><span class="n">↗</span> MCP: las "manos" de Claude</div>
    <p class="secsub">Los servidores MCP conectan a Claude con herramientas externas. Se gestionan con <code class="inline">/mcp</code>.</p>
    <div class="grid c3">${MCPS.map(s=>`<div class="concept"><h3 class="serif"><span class="tag ${s.tag}" style="margin-right:0">${s.t}</span></h3><p style="margin-top:4px">${s.d}</p></div>`).join('')}</div>
  </section>`;
}

/* ---------- PROMPTS ---------- */
function secPrompts(){
  return `<section id="sec-prompts">
    <div class="eyebrow">tu biblioteca</div>
    <h2 class="pagetitle">Prompts</h2>
    <p class="lede tight">Tu colección de prompts que funcionan: webs hermosas, agentes de WhatsApp e Instagram, seguridad, QA. Copiá, pegá, ganá tiempo. Y guardá los tuyos.</p>
    <div class="toolbar">
      <div class="search">${svg(I.search,2)}<input id="psearch" placeholder="Buscar prompt…" oninput="promptQuery=this.value;renderPrompts()"></div>
      <button class="btn" onclick="openModal()">${svg(I.plus,2)} Guardar prompt</button>
    </div>
    <div class="filterrow" id="pfilters"></div>
    <div class="grid" id="plist"></div>
  </section>`;
}
function allPrompts(){return [...userPrompts.map(p=>({...p,user:true})),...PROMPTS]}
function promptCats(){const c=new Set(['Todos']);allPrompts().forEach(p=>c.add(p.cat));return [...c]}
function tagFor(cat){return {Web:'slate',WhatsApp:'pine',Instagram:'berry',Kickoff:'clay',Seguridad:'rust',QA:'gold',Contenido:'gold'}[cat]||'clay'}
function renderPrompts(){
  const fl=document.getElementById('pfilters');if(!fl)return;
  fl.innerHTML=promptCats().map(c=>`<button class="chip ${c===promptFilter?'active':''}" onclick="promptFilter='${c}';renderPrompts()">${c}</button>`).join('');
  const q=promptQuery.toLowerCase();
  const list=allPrompts().filter(p=>(promptFilter==='Todos'||p.cat===promptFilter)&&(!q||(p.title+p.desc+p.text).toLowerCase().includes(q)));
  const el=document.getElementById('plist');
  if(!list.length){el.innerHTML=`<div class="card flat" style="text-align:center;color:var(--ink3)">No hay prompts con ese filtro. Probá guardar uno tuyo.</div>`;return}
  el.innerHTML=list.map((p,i)=>{const tg=p.tag||tagFor(p.cat);const idx=allPrompts().indexOf(p);return `<div class="pcard ${p.user?'user':''}" id="pc${i}">
    <div class="head">
      <div><span class="tag ${tg}">${p.cat}</span><h3 class="serif">${esc(p.title)}</h3><div class="desc">${esc(p.desc||'')}</div></div>
      <div class="acts">
        <button class="btn ghost small" onclick="document.getElementById('pc${i}').classList.toggle('open')">Ver</button>
        <button class="btn small" onclick="copyPrompt(${idx})">Copiar</button>
      </div>
    </div>
    <pre>${esc(p.text)}</pre>
    ${p.user?`<div style="margin-top:10px"><button class="linkbtn" onclick="delUserPrompt(${userPrompts.indexOf(userPrompts.find(u=>u.title===p.title&&u.text===p.text))})">Borrar este prompt</button></div>`:''}
  </div>`}).join('');
}
function copyPrompt(idx){copyText(allPrompts()[idx].text)}

/* modal add prompt */
function openModal(){document.getElementById('modal').classList.add('show')}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function saveUserPrompt(){
  const t=document.getElementById('m-title').value.trim();
  const text=document.getElementById('m-text').value.trim();
  if(!t||!text){toast('Falta título o prompt');return}
  userPrompts.unshift({cat:document.getElementById('m-cat').value,title:t,desc:document.getElementById('m-desc').value.trim(),text});
  LS.set('uprompts',userPrompts);
  document.getElementById('m-title').value='';document.getElementById('m-desc').value='';document.getElementById('m-text').value='';
  closeModal();renderPrompts();renderRail();
  // refrescar inicio stats si está montado
  rebuildInicio();
  toast('Prompt guardado ✓');
}
function delUserPrompt(i){if(i<0)return;userPrompts.splice(i,1);LS.set('uprompts',userPrompts);renderPrompts();rebuildInicio()}
function rebuildInicio(){const el=document.getElementById('sec-inicio');if(el){const wrap=document.createElement('div');wrap.innerHTML=secInicio();el.replaceWith(wrap.firstElementChild);if(current==='inicio')document.getElementById('sec-inicio').classList.add('visible')}}

/* ---------- AGENTES ---------- */
function secAgentes(){
  return `<section id="sec-agentes">
    <div class="eyebrow">el servicio que te van a pedir</div>
    <h2 class="pagetitle">Agentes de WhatsApp & Instagram</h2>
    <p class="lede">Lo más pedido hoy: un bot que atienda, califique y venda por chat, 24/7. Acá está cómo funciona de punta a punta y los prompts para construirlo bien.</p>

    <div class="sectit"><span class="n">?</span> Qué te van a pedir</div>
    <div class="grid c3">${AG_ASKS.map(a=>`<div class="concept"><h3 class="serif"><span class="tag ${a.tag}" style="margin-right:0">${a.t}</span></h3><p style="margin-top:5px">${a.d}</p></div>`).join('')}</div>

    <div class="sectit"><span class="n">→</span> Cómo funciona (el flujo de un mensaje)</div>
    <p class="secsub">Esto es lo que tenés que entender antes de construir. Cinco pasos, de que el cliente escribe a que recibe respuesta.</p>
    <div class="card">${AG_ARCH.map(a=>`<div style="display:flex;gap:14px;padding:13px 0;border-bottom:1px solid var(--line2)"><div style="font-family:'Fraunces',serif;font-size:1.3rem;color:var(--clay);font-weight:600;flex-shrink:0;width:34px">${a[0].split(' ')[0]}</div><div><div style="font-weight:600;margin-bottom:3px">${a[0].split('·')[1]}</div><p style="font-size:.9rem;color:var(--ink2);line-height:1.55">${a[1]}</p></div></div>`).join('')}</div>

    <div class="sectit"><span class="n">⚙</span> Las piezas que vas a usar</div>
    <div class="grid c2">${AG_TOOLS.map(a=>`<div class="card flat"><h3 class="serif" style="font-size:1.05rem;margin-bottom:6px">${a[0]}</h3><p style="font-size:.88rem;color:var(--ink2);line-height:1.55">${a[1]}</p></div>`).join('')}</div>

    <div class="callout pine"><div class="i">${svg(I.chat,2)}</div><p><b>Lo más importante:</b> seguridad del webhook (verificá la firma de Meta), tokens fuera del repo, respetar las políticas de WhatsApp/Instagram (plantillas, ventana de 24h, opt-out) y un <b>handoff a humano</b> que pase toda la conversación. Un bot que no sabe cuándo callarse y pasar a una persona, espanta clientes.</p></div>

    <div class="sectit"><span class="n">▸</span> Los prompts para construirlo</div>
    <p class="secsub">Todo en la biblioteca, filtrado por canal.</p>
    <div class="linkrow"><button class="btn small" onclick="promptFilter='WhatsApp';go('prompts');renderPrompts()">Prompts de WhatsApp →</button><button class="btn ghost small" onclick="promptFilter='Instagram';go('prompts');renderPrompts()">Prompts de Instagram →</button></div>
  </section>`;
}

/* ---------- LAB ---------- */
function secLab(){
  return `<section id="sec-lab">
    <div class="eyebrow">practicá sin riesgo</div>
    <h2 class="pagetitle">Lab de prompts</h2>
    <p class="lede tight">Un simulador para practicar cómo le hablás a Claude. Escribí una instrucción y mirá si te devuelve un buen patrón (plan antes de actuar, preguntas, seguridad). No llama a ninguna API — es para entrenar el músculo.</p>
    <div class="chat">
      <div class="chatlog" id="chatlog">
        <div class="msg a"><b>Claude (simulado):</b> Probá pedirme algo como armarías un prompt real. Te muestro cómo respondería un buen agente: pidiendo contexto, proponiendo un plan y cuidando la seguridad. Ej: <i>"Arrancá un proyecto nuevo de e-commerce"</i>.</div>
      </div>
      <div class="typing" id="typing" style="display:none">claude está escribiendo…</div>
      <div class="chatin">
        <textarea id="chatin" placeholder="Escribí tu instrucción… (Enter para enviar)"></textarea>
        <button class="btn" onclick="sendChat()">Enviar</button>
      </div>
    </div>
  </section>`;
}
function bindLab(){const t=document.getElementById('chatin');if(t)t.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat()}})}
function sendChat(){
  const inp=document.getElementById('chatin');const v=inp.value.trim();if(!v)return;
  const log=document.getElementById('chatlog');
  log.insertAdjacentHTML('beforeend',`<div class="msg u">${esc(v)}</div>`);inp.value='';log.scrollTop=log.scrollHeight;
  document.getElementById('typing').style.display='block';
  setTimeout(()=>{document.getElementById('typing').style.display='none';log.insertAdjacentHTML('beforeend',`<div class="msg a">${labReply(v)}</div>`);log.scrollTop=log.scrollHeight},850);
}
function labReply(v){
  const t=v.toLowerCase();
  if(/(borr|elimin|rm |drop|reset)/.test(t))return `<b>Antes de avanzar:</b> eso es una acción destructiva. Un buen flujo: te pido confirmación explícita, propongo un commit o rama de respaldo, y recién ahí ejecuto. ¿Querés que arme la red de seguridad primero? <i>(Tip: cargá los guardarraíles desde Prompts → Seguridad.)</i>`;
  if(/(nuevo|arranc|empez|cero|0|kickoff|proyect)/.test(t))return `<b>Perfecto, pero primero entiendo el producto.</b> ¿Qué hace, para quién, hay pagos o datos sensibles? Después armo un PLAN.md y espero tu OK antes de codear. La base llevaría seguridad desde el commit 1. <i>(Este es justo el "Kickoff seguro 0→1" de la biblioteca.)</i>`;
  if(/(whatsapp|instagram|bot|agente|wpp|chat)/.test(t))return `<b>Buen proyecto.</b> ¿Es WhatsApp o Instagram? ¿Qué tiene que resolver y cuándo derivar a un humano? Armo el flujo de un mensaje de punta a punta (webhook firmado → contexto → API de Claude → respuesta/handoff) en un PLAN.md y lo revisamos. <i>(Mirá la sección Agentes.)</i>`;
  if(/(diseñ|web|landing|ui|lind|hermos|front)/.test(t))return `<b>Buenísimo.</b> Antes de codear te propongo 4 direcciones visuales (color, tipografía, concepto) para que elijas. Nada de estética genérica. Cuando elijas, armo el sistema completo y la web responsive en un archivo. ¿Avanzamos así? <i>(Es el prompt "Director de diseño".)</i>`;
  return `<b>Buena instrucción.</b> Para que salga bien: ¿querés que primero te haga preguntas de contexto y un plan corto antes de tocar nada? Así evitamos que arranque para el lado equivocado. Cuanto más claro el objetivo y los límites, mejor el resultado.`;
}

/* ---------- RETO ---------- */
function secReto(){
  const idx=(new Date().getDate())%RETOS.length;
  const todayKey=new Date().toISOString().slice(0,10);
  const doneToday=streak.last===todayKey;
  return `<section id="sec-reto">
    <div class="eyebrow">práctica diaria</div>
    <h2 class="pagetitle">Reto del día</h2>
    <p class="lede tight">Un reto chico por día. La constancia es la que te vuelve pro, no las maratones.</p>
    <div class="reto">
      <div class="k">${fmtDate(todayKey)}</div>
      <h3 class="serif">${RETOS[idx]}</h3>
      <p>Hacelo en un proyecto real o en uno de práctica. Cuando termines, marcalo y sumá a tu racha.</p>
      <div class="row">
        <button class="btn ${doneToday?'ghost':''}" id="retobtn" onclick="completarReto()" ${doneToday?'disabled':''}>${doneToday?'✓ Completado hoy':'Marcar como completado'}</button>
        <div style="display:flex;gap:24px"><div><div style="font-family:Fraunces,serif;font-size:1.7rem;color:#fff;font-weight:600" id="rstreak">${streak.n}</div><div style="font-size:.74rem;color:#D8CCB8;font-family:JetBrains Mono,monospace">racha (días)</div></div><div><div style="font-family:Fraunces,serif;font-size:1.7rem;color:#fff;font-weight:600" id="rtotal">${streak.total}</div><div style="font-size:.74rem;color:#D8CCB8;font-family:JetBrains Mono,monospace">retos hechos</div></div></div>
      </div>
    </div>
    <div class="grid c2" style="margin-top:20px">
      ${[1,2].map(o=>{const j=(idx+o)%RETOS.length;return `<div class="concept"><h3 class="serif" style="font-size:.92rem;color:var(--ink3)">Próximo</h3><p style="margin-top:4px;color:var(--ink)">${RETOS[j]}</p></div>`}).join('')}
    </div>
  </section>`;
}
function completarReto(){
  const today=new Date().toISOString().slice(0,10);
  if(streak.last===today)return;
  const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
  streak.n=(streak.last===y)?streak.n+1:1;
  streak.last=today;streak.total++;LS.set('streak',streak);
  const b=document.getElementById('retobtn');if(b){b.textContent='✓ Completado hoy';b.classList.add('ghost');b.disabled=true}
  document.getElementById('rstreak').textContent=streak.n;
  document.getElementById('rtotal').textContent=streak.total;
  toast('¡Sumado! Racha: '+streak.n+' 🔥');rebuildInicio();renderRail();
}

/* ============================================================= INIT */
function init(){
  document.getElementById('logo-d').innerHTML=LOGO;
  document.getElementById('logo-m').innerHTML=LOGO;
  buildAll();
  renderRail();
  renderRoadmap();
  renderPaths();
  renderPrompts();
  const last=LS.get('last','inicio');
  go(last||'inicio');
}
document.addEventListener('DOMContentLoaded',init);
