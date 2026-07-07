# Portfólio — Gustavo Rossi

Portfólio de suporte técnico / análise de sistemas: página única, direção editorial (papel + cobalto, tipografia serifada), com animações reativas ao mouse e ao scroll, **tema claro/escuro** e **idiomas PT/EN**. Sem frameworks e sem dependências: HTML, CSS e JavaScript puros.

Conteúdo baseado no currículo de Gustavo Rossi (FIAP · ETEC Zona Leste · Magazine Luiza · Alltec).

## Como rodar

Não há build. Qualquer servidor estático serve:

```bash
npx serve .
# ou simplesmente abra index.html no navegador
```

## Estrutura

```
index.html    página única (masthead, hero, trabalho, manifesto, stack, sobre, contato)
styles.css    tokens, layout e todas as animações CSS
script.js     animações de mouse e scroll (sem libs)
docs/
  design.md      design system: cores, tipografia, grid, decisões
  animacoes.md   especificação de cada animação e onde vive no código
```

## Stack do site

- HTML5 semântico, CSS moderno (grid, multicol, `animation-timeline: scroll()`, `clip-path`), JS vanilla
- Fontes: Instrument Serif (display) + Newsreader (corpo) + IBM Plex Mono (rótulos) — Google Fonts
- Sem imagens externas: a paleta e a textura de papel são geradas em CSS/SVG

## Tema e idioma

- **Tema claro/escuro:** botão ☾/☀ no cabeçalho. Inicia pela preferência do sistema (`prefers-color-scheme`) e grava a escolha em `localStorage`. Cores nos tokens `:root` e `[data-theme="dark"]` no topo de `styles.css`.
- **PT/EN:** botão EN/PT no cabeçalho. Todo texto traduzível tem `data-i18n` (ou `data-i18n-html`) no HTML e a tradução vive no dicionário `I18N` em `script.js`. Grava a escolha em `localStorage`.

## O que ainda falta personalizar

O conteúdo textual já é o real (currículo do Gustavo). Faltam só os assets/links que não estavam no currículo:

1. **Links sociais:** `.socials` em `#contato` aponta para `#` — trocar pelas URLs reais de LinkedIn e GitHub.
2. **Retrato:** o bloco `.portrait` é um placeholder rotulado `[ retrato ]`/`[ portrait ]`; trocar por `<img>` mantendo o `aspect-ratio: 4/5`.
3. **og:image:** ver seção de acessibilidade abaixo.
4. **Textos/traduções:** ao editar qualquer texto, atualizar as duas versões no dicionário `I18N` (`pt` e `en`) em `script.js`.

## Acessibilidade e robustez

- Todas as animações colapsam para estático sob `prefers-reduced-motion` (verificado ao vivo — o ambiente de preview força esse modo e a página fica 100% legível).
- Nenhum listener de `scroll`: só IntersectionObserver, uma barra de progresso via CSS `scroll()` e um único rAF (parallax do hero), que só roda com ponteiro fino e motion habilitado.
- Contraste AA; foco visível em todos os interativos; skip link por teclado.
- Sem JS a página continua legível (`<noscript>` revela o conteúdo; o code pull-quote já vem completo no HTML).
- Favicon inline (SVG), `theme-color` e JSON-LD de `Person` para SEO.
- Falta só um `og:image` para compartilhamento: tire um print da hero (1200×630), salve como `og.png` e adicione `<meta property="og:image" content="og.png">` no `<head>`.

## Nota sobre o design

Esta versão substituiu um conceito anterior (tema dark-tech). O design atual foi fornecido como direção fechada e portado do arquivo único para a estrutura de três arquivos acima, com uma camada extra de animações (ver `docs/animacoes.md`).
=======
# PortifolioGR
>>>>>>> 61c708c45ddf0022f13eca8f5f24226e8c3d9d1e
