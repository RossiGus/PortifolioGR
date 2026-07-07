# Portfólio — Gustavo Rossi

Portfólio pessoal de suporte técnico e análise de sistemas, em **página única**, com direção editorial (papel + cobalto, tipografia serifada), animações reativas ao mouse e ao scroll, **tema claro/escuro** e **idiomas PT/EN**.

Construído inteiramente com **HTML, CSS e JavaScript puros** — sem frameworks, sem dependências, sem build.

> Conteúdo baseado no currículo real de Gustavo Rossi (FIAP · ETEC Zona Leste · Magazine Luiza · Alltec).

## ✨ Destaques

- **Zero dependências** — nada de npm install, bundlers ou libs de animação
- **Design editorial** — paleta papel + cobalto, textura de papel gerada em CSS/SVG, sem imagens externas
- **Tema claro/escuro** com detecção de preferência do sistema e persistência
- **Bilíngue (PT/EN)** com dicionário de traduções centralizado
- **Acessível por padrão** — `prefers-reduced-motion`, contraste AA, skip link, funciona sem JS

## 🚀 Como rodar

Não há build. Qualquer servidor estático serve:

```bash
npx serve .
```

Ou simplesmente abra `index.html` no navegador.

## 📁 Estrutura

```
index.html       página única (masthead, hero, trabalho, manifesto, stack, sobre, contato)
styles.css       tokens de design, layout e todas as animações CSS
script.js        animações de mouse/scroll e dicionário de traduções (sem libs)
docs/
  design.md      design system: cores, tipografia, grid, decisões
  animacoes.md   especificação de cada animação e onde vive no código
```

## 🛠 Stack

| Camada | Tecnologia |
| --- | --- |
| Marcação | HTML5 semântico, JSON-LD (`Person`) para SEO |
| Estilo | CSS moderno — grid, multicol, `animation-timeline: scroll()`, `clip-path` |
| Interação | JavaScript vanilla — IntersectionObserver + um único rAF |
| Tipografia | [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (display) · [Newsreader](https://fonts.google.com/specimen/Newsreader) (corpo) · [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (rótulos) |
| Assets | Nenhuma imagem externa — paleta e textura de papel geradas em CSS/SVG |

## 🌗 Tema e idioma

**Tema claro/escuro** — botão ☾/☀ no cabeçalho. Inicia pela preferência do sistema (`prefers-color-scheme`) e grava a escolha em `localStorage`. As cores vivem nos tokens `:root` e `[data-theme="dark"]` no topo de `styles.css`.

**PT/EN** — botão EN/PT no cabeçalho. Todo texto traduzível tem `data-i18n` (ou `data-i18n-html`) no HTML, e as traduções vivem no dicionário `I18N` em `script.js`. A escolha também é gravada em `localStorage`.

## ♿ Acessibilidade e robustez

- Todas as animações colapsam para estático sob `prefers-reduced-motion` — a página fica 100% legível sem movimento.
- Nenhum listener de `scroll`: apenas IntersectionObserver, barra de progresso via CSS `scroll()` e um único `requestAnimationFrame` (parallax do hero), que só roda com ponteiro fino e motion habilitado.
- Contraste AA, foco visível em todos os elementos interativos e skip link por teclado.
- Sem JavaScript a página continua legível: `<noscript>` revela o conteúdo e o pull-quote de código já vem completo no HTML.
- Favicon inline (SVG), `theme-color` e JSON-LD de `Person` para SEO.

## ✅ Pendências

O conteúdo textual já é o real; faltam apenas os assets e links que não estavam no currículo:

1. **Links sociais** — `.socials` em `#contato` aponta para `#`; trocar pelas URLs reais de LinkedIn e GitHub.
2. **Retrato** — o bloco `.portrait` é um placeholder (`[ retrato ]` / `[ portrait ]`); trocar por `<img>` mantendo o `aspect-ratio: 4/5`.
3. **og:image** — tirar um print da hero em 1200×630, salvar como `og.png` e adicionar no `<head>`:
   ```html
   <meta property="og:image" content="og.png">
   ```

> **Ao editar qualquer texto**, lembre de atualizar as duas versões (`pt` e `en`) no dicionário `I18N` em `script.js`.

## Link

https://gustavorossi.vercel.app/
