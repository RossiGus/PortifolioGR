const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;

/* ---------- traduções (pt / en) ---------- */
const I18N = {
  pt: {
    title: 'Gustavo Rossi — Suporte técnico & Análise de sistemas',
    metaDesc: 'Gustavo Rossi — suporte técnico especializado e análise de sistemas. Diagnóstico de problemas complexos, análise de causa raiz e documentação técnica.',
    skip: 'Pular para o conteúdo',
    navWork: 'Experiência', navProjects: 'Projetos', navStack: 'Competências', navAbout: 'Sobre', navContact: 'Contato',
    eyebrow: 'Suporte técnico · Analista Jr. · Est. 2023',
    heroL1: 'Eu acho a', heroL2: '<em>causa raiz</em> que', heroL3: 'o seu sistema', heroL4: 'esconde.',
    heroAria: 'Eu acho a causa raiz que o seu sistema esconde.',
    deck: 'Suporte técnico especializado e análise de sistemas. Diagnostico problemas complexos, encontro padrões e documento cada caso com clareza, do ticket à causa raiz.',
    statusAvail: 'Disponível · 2026', statusLoc: 'São Paulo / Remoto',
    workTitle: 'Experiência', projectsTitle: 'Projetos', workMeta: 'Edição 2026',
    e1folio: 'Magazine Luiza · Mai 2025 →', e1title: 'Assistente de Vendas Sr',
    e1desc: 'Atendimento técnico especializado a clientes com demandas complexas de produtos financeiros, cartões e serviços: diagnóstico, tratativa e comunicação da resolução. Análise de recorrências e proposta de correções de processo.',
    e2folio: 'Alltec Refrigerações · Jul 2024 – Fev 2025', e2title: 'Almoxarife',
    e2desc: 'Controle e documentação de entradas e saídas de estoque, identificando divergências e acionando fornecedores com registro formal das ocorrências.',
    e3folio: 'Projeto · Python · Keras',
    e3desc: 'Pipeline de dados, treino de modelos e documentação de metodologia, resultados e decisões técnicas em relatório estruturado, equivalente a análise de requisitos e documentação funcional.',
    e4folio: 'Projeto · React Native · Node.js',
    e4desc: 'App mobile completo com integração de APIs e persistência de dados: evidencia capacidade de analisar fluxos de sistema e identificar pontos de falha.',
    tagSupport: 'Suporte técnico', tagRoot: 'Causa raiz', tagTicket: 'Tickets', tagDoc: 'Documentação',
    tagInv: 'Estoque', tagProc: 'Processos', tagML: 'Machine learning',
    manifesto: 'A resolução que fica é a que foi <em>documentada</em>. O resto volta como chamado novo.',
    stackTitle: 'Competências',
    viewProject: 'Ver projeto ↗',
    skFullStack: 'Desenvolvimento Full Stack',
    skSupport: 'Suporte técnico', skRoot: 'Análise de causa raiz', skTicket: 'Gestão de tickets',
    skDoc: 'Documentação técnica', skReq: 'Validação de requisitos', skSysAn: 'Análise de sistemas',
    about1: 'Estudo Ciências da Computação na FIAP (2025–atual), depois do técnico em Análise e Desenvolvimento de Sistemas na ETEC Zona Leste (2023–2024).',
    about2: 'Atuo com suporte técnico de alta demanda e resolução de problemas complexos em ambiente financeiro. Perfil analítico e orientado ao cliente: identifico a causa raiz, registro cada caso com clareza e proponho melhorias de processo.',
    cta: 'Bora resolver um problema? Vamos conversar.',
    foot: '© 2026 Gustavo Rossi · São Paulo, SP · Feito com cuidado',
    pull: [
      { t: '// causa raiz > sintoma.\n', c: 'c' },
      { t: 'function ', c: 'k' }, { t: 'resolver(chamado) {\n' },
      { t: '  return ', c: 'k' }, { t: 'chamado.causaRaiz && documentado;\n' },
      { t: '}' },
    ],
    ticker: (n, total) => 'Item ' + n + ' — ' + total,
  },
  en: {
    title: 'Gustavo Rossi — Technical support & Systems analysis',
    metaDesc: 'Gustavo Rossi — specialized technical support and systems analysis. Complex problem diagnosis, root-cause analysis and technical documentation.',
    skip: 'Skip to content',
    navWork: 'Experience', navProjects: 'Projects', navStack: 'Skills', navAbout: 'About', navContact: 'Contact',
    eyebrow: 'Technical support · Jr. Analyst · Est. 2023',
    heroL1: 'I find the', heroL2: '<em>root cause</em>', heroL3: 'your system', heroL4: 'hides.',
    heroAria: 'I find the root cause your system hides.',
    deck: 'Specialized technical support and systems analysis. I diagnose complex problems, spot patterns, and document every case clearly, from ticket to root cause.',
    statusAvail: 'Available · 2026', statusLoc: 'São Paulo / Remote',
    workTitle: 'Experience', projectsTitle: 'Projects', workMeta: 'Edition 2026',
    e1folio: 'Magazine Luiza · May 2025 →', e1title: 'Senior Sales Assistant',
    e1desc: 'Specialized technical support for clients with complex demands around financial products, cards and services: diagnosis, handling and clear resolution. Recurrence analysis and process-fix proposals.',
    e2folio: 'Alltec Refrigerações · Jul 2024 – Feb 2025', e2title: 'Stock Controller',
    e2desc: 'Controlled and documented stock inflow and outflow, spotting discrepancies and contacting suppliers with formal records of each occurrence.',
    e3folio: 'Project · Python · Keras',
    e3desc: 'Data pipeline, model training and documentation of methodology, results and technical decisions in a structured report, equivalent to requirements analysis and functional documentation.',
    e4folio: 'Project · React Native · Node.js',
    e4desc: 'Full mobile app with API integration and data persistence: shows the ability to analyze system flows and pinpoint failure points.',
    tagSupport: 'Technical support', tagRoot: 'Root cause', tagTicket: 'Tickets', tagDoc: 'Documentation',
    tagInv: 'Inventory', tagProc: 'Processes', tagML: 'Machine learning',
    manifesto: 'The fix that lasts is the one that was <em>documented</em>. The rest comes back as a new ticket.',
    stackTitle: 'Skills',
    viewProject: 'View project ↗',
    skFullStack: 'Full-Stack Development',
    skSupport: 'Technical support', skRoot: 'Root cause analysis', skTicket: 'Ticket management',
    skDoc: 'Technical documentation', skReq: 'Requirements validation', skSysAn: 'Systems analysis',
    about1: "I'm studying Computer Science at FIAP (2025–present), after a technical degree in Systems Analysis and Development at ETEC Zona Leste (2023–2024).",
    about2: 'I work in high-volume technical support and complex problem-solving in a financial environment. Analytical and client-oriented: I find the root cause, log every case clearly and propose process improvements.',
    cta: "Got a problem to solve? Let's talk.",
    foot: '© 2026 Gustavo Rossi · São Paulo, SP · Made with care',
    pull: [
      { t: '// root cause > symptom.\n', c: 'c' },
      { t: 'function ', c: 'k' }, { t: 'resolve(ticket) {\n' },
      { t: '  return ', c: 'k' }, { t: 'ticket.rootCause && documented;\n' },
      { t: '}' },
    ],
    ticker: (n, total) => 'Item ' + n + ' — ' + total,
  },
};

let currentLang = 'pt';
const langBtn = document.getElementById('lang-btn');
const heroTitle = document.querySelector('.hero-title');

function applyLang(lang) {
  const d = I18N[lang];
  if (!d) return;
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = d.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.content = d.metaDesc;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = d[el.dataset.i18n]; if (v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = d[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v;
  });
  if (heroTitle && d.heroAria) heroTitle.setAttribute('aria-label', d.heroAria);
  if (langBtn) {
    langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    langBtn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para português');
  }
  try { localStorage.setItem('lang', lang); } catch (e) {}
  splitHero();       // re-quebra a headline (applyLang reescreveu o HTML das linhas)
  buildPullcode();   // reconstrói o bloco de código no idioma atual
}

/* ---------- tema (claro / escuro) ---------- */
const themeBtn = document.getElementById('theme-btn');
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  const tc = document.querySelector('meta[name="theme-color"]');
  if (tc) tc.content = t === 'dark' ? '#14100a' : '#ece6d7';
  if (themeBtn) {
    themeBtn.textContent = t === 'dark' ? '☀' : '☾';
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Modo claro' : 'Modo escuro');
  }
  try { localStorage.setItem('theme', t); } catch (e) {}
}
if (themeBtn) themeBtn.addEventListener('click', () =>
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
if (langBtn) langBtn.addEventListener('click', () =>
  applyLang(currentLang === 'pt' ? 'en' : 'pt'));

/* ---------- reveal por scroll ---------- */
const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.reveal,.entry').forEach(el => io.observe(el));

// stagger dos itens do índice de stack
document.querySelectorAll('.index-list .row').forEach((r, i) => { r.style.transitionDelay = (i * 0.05) + 's'; });

/* ---------- ticker de fólio na margem ---------- */
const ticker = document.querySelector('.folio-ticker');
const entries = [...document.querySelectorAll('.entry')];
const workSecs = [...document.querySelectorAll('#trabalho, #projetos')];
if (ticker && workSecs.length && entries.length && !reduce) {
  const total = String(entries.length).padStart(2, '0');
  const showState = new Map();
  const secIO = new IntersectionObserver((es) => {
    es.forEach(e => showState.set(e.target, e.isIntersecting));
    ticker.classList.toggle('show', [...showState.values()].some(Boolean));
  }, { threshold: 0 });
  workSecs.forEach(s => secIO.observe(s));
  const curIO = new IntersectionObserver((es) => { es.forEach(e => {
    if (e.isIntersecting) {
      const n = String(entries.indexOf(e.target) + 1).padStart(2, '0');
      ticker.textContent = I18N[currentLang].ticker(n, total);
    }
  }); }, { threshold: .5 });
  entries.forEach(el => curIO.observe(el));
}

/* ---------- relógio ao vivo (dateline de São Paulo) ---------- */
const clock = document.getElementById('clock');
if (clock) {
  const fmt = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const tick = () => { clock.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 1000);
}

/* ---------- parallax do hero por ponteiro (rAF + lerp) ---------- */
(function () {
  const bg = document.querySelector('.hero-bg');
  const hero = document.querySelector('.hero');
  if (!bg || !hero || reduce || !fine) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    tx = (((e.clientX - r.left) / r.width) - .5) * 2 * 14;
    ty = (((e.clientY - r.top) / r.height) - .5) * 2 * 14;
  });
  hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
  (function loop() {
    cx += (tx - cx) * .08; cy += (ty - cy) * .08;
    bg.style.setProperty('--px', cx.toFixed(2));
    bg.style.setProperty('--py', cy.toFixed(2));
    requestAnimationFrame(loop);
  })();
})();

/* ---------- headline cinética: caracteres "entintam" perto do cursor ---------- */
let chars = [], centers = [];
const R = 150; // raio de influência do cursor
const mix = f => `rgb(${Math.round(23 + 19 * f)},${Math.round(19 + 28 * f)},${Math.round(12 + 178 * f)})`; // ink -> cobalt
function measure() { centers = chars.map(c => { const r = c.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }); }
function splitHero() {
  if (!heroTitle || reduce || !fine) return;
  const makeChar = (ch, em) => { const s = document.createElement('span'); s.className = 'ch' + (em ? ' em' : ''); s.textContent = ch; return s; };
  heroTitle.querySelectorAll('.hl > span').forEach(line => {
    const frag = document.createDocumentFragment();
    line.childNodes.forEach(node => {
      if (node.nodeType === 3) {
        for (const ch of node.textContent) frag.appendChild(makeChar(ch, false));
      } else if (node.nodeType === 1) { // <em>
        const em = node.cloneNode(false);
        for (const ch of node.textContent) em.appendChild(makeChar(ch, true));
        frag.appendChild(em);
      }
    });
    line.replaceChildren(frag);
  });
  chars = [...heroTitle.querySelectorAll('.ch')];
  measure();
}
if (heroTitle && fine && !reduce) {
  heroTitle.addEventListener('pointerenter', measure);
  addEventListener('resize', measure);
  heroTitle.addEventListener('pointermove', e => {
    for (let i = 0; i < chars.length; i++) {
      const c = centers[i]; if (!c) continue;
      const f = Math.max(0, 1 - Math.hypot(e.clientX - c.x, e.clientY - c.y) / R);
      chars[i].style.transform = f ? `translateY(${(-f * 10).toFixed(1)}px)` : '';
      if (!chars[i].classList.contains('em')) chars[i].style.color = f ? mix(f) : '';
    }
  });
  heroTitle.addEventListener('pointerleave', () => chars.forEach(c => { c.style.transform = ''; if (!c.classList.contains('em')) c.style.color = ''; }));
}

/* ---------- pull-quote de código: efeito máquina de escrever ao entrar em vista ---------- */
let pullcodeAnimated = false;
function buildPullcode() {
  const el = document.querySelector('.pullcode');
  if (!el) return;
  const tokens = I18N[currentLang].pull;
  const totalChars = tokens.reduce((n, t) => n + t.t.length, 0);
  const flat = tokens.map(t => t.t).join('');
  const caret = document.createElement('span');
  caret.className = 'caret';

  const build = (upTo) => {
    el.textContent = '';
    let shown = 0;
    for (const tok of tokens) {
      if (shown >= upTo) break;
      const take = Math.min(tok.t.length, upTo - shown);
      const span = document.createElement('span');
      if (tok.c) span.className = tok.c;
      span.textContent = tok.t.slice(0, take);
      el.appendChild(span);
      shown += take;
    }
    el.appendChild(caret);
  };

  if (reduce || pullcodeAnimated) { build(Infinity); return; } // troca de idioma: preenche instantâneo

  build(0);
  new IntersectionObserver((es, obs) => {
    if (!es[0].isIntersecting) return;
    obs.disconnect();
    pullcodeAnimated = true;
    let n = 0;
    (function step() {
      build(n);
      if (n >= totalChars) return;
      const nextIsNL = flat[n] === '\n';
      n++;
      setTimeout(step, nextIsNL ? 130 : 16);
    })();
  }, { threshold: .4 }).observe(el);
}

/* ---------- e-mail/telefone magnético no contato ---------- */
if (fine && !reduce) {
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(dx * 0.12).toFixed(1)}px, ${(dy * 0.18).toFixed(1)}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ---------- init: aplica idioma + tema salvos ---------- */
(function init() {
  let lang = 'pt', theme = 'light';
  try {
    lang = localStorage.getItem('lang') || ((navigator.language || '').startsWith('pt') ? 'pt' : 'en');
    theme = document.documentElement.dataset.theme || 'light';
  } catch (e) {}
  applyTheme(theme);
  applyLang(lang);
})();
