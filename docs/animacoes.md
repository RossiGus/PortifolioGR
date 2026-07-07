# Especificação de animações

Easing padrão: `cubic-bezier(.22,.61,.36,1)` (`--ease`). **Tudo colapsa para estático sob `prefers-reduced-motion`.**

Regra de engenharia: nenhum `window.addEventListener("scroll")`. Só IntersectionObserver, CSS `animation-timeline: scroll()` e um único loop de rAF (parallax do hero).

## Hero

### 1. Reveal por linhas na carga (line mask)
- **Gatilho:** carga da página.
- **Efeito:** cada uma das 4 linhas do h1 sobe de baixo de uma máscara (`overflow:hidden` + `translateY(116%)→0`), escalonadas 100ms.
- **Timing:** 0.95s por linha, CSS.
- **Código:** `.hero-title .hl > span` + `@keyframes lineUp` em `styles.css`.

### 2. Acento tardio (accent-in)
- **Efeito:** a palavra "software" nasce cor de tinta e vira cobalto 1.05s depois, quando as linhas assentam.
- **Código:** `.hero h1 em` + `@keyframes accentIn`.

### 3. Fio do eyebrow (line draw)
- **Efeito:** o traço antes do rótulo cresce de 0 à largura na carga.
- **Código:** `.eyebrow::before` + `@keyframes growLine`.

### 4. Headline cinética "entinta" no cursor (mouse) — NOVO
- **Gatilho:** `pointermove` sobre o h1 (ponteiro fino, motion habilitado).
- **Efeito:** o JS quebra o título em caracteres (`.ch`, preservando o `<em>`); letras dentro de um raio de 150px sobem até 10px e transitam de tinta para cobalto conforme a proximidade. As letras de "software" só sobem (já são cobalto).
- **Timing:** transição CSS de 0.28s por letra (dá o rastro suave, sem rAF).
- **Fallbacks:** touch/reduced-motion: sem split, título estático.
- **Código:** bloco "headline cinética" em `script.js` + `.ch` em `styles.css`.

### 5. Parallax do fundo por ponteiro (mouse)
- **Gatilho:** `pointermove` no hero.
- **Efeito:** a marca-d'água "RM" e os dois fios de fundo deslizam em profundidades diferentes, seguindo o cursor com lerp (`--px`/`--py`).
- **Timing:** rAF contínuo, fator 0.08.
- **Fallbacks:** touch/reduced-motion: parado.
- **Código:** bloco "parallax do hero" em `script.js` + `.px-*` em `styles.css`.

### 6. Dateline ao vivo (São Paulo) — NOVO
- **Efeito:** relógio no status atualiza a cada segundo no fuso `America/Sao_Paulo` (`Intl.DateTimeFormat`).
- **Código:** bloco "relógio ao vivo" em `script.js` (`#clock`).

### 7. Ponto de disponibilidade (pulse)
- **Efeito:** o marcador "Disponível" pulsa suavemente. Reduced-motion: parado.
- **Código:** `.status .dot` + `@keyframes pulse`.

## Efeitos globais

### 8. Grão de papel — NOVO
- **Efeito:** textura `feTurbulence` fixa em `mix-blend-mode: multiply` a 5%. Desligada sob reduced-motion.
- **Código:** `.grain` em `styles.css`.

### 9. Barra de progresso de leitura (scroll)
- **Efeito:** fio cobalto sob o masthead cresce de 0 a 100% via `animation-timeline: scroll(root)`. Sem JS.
- **Fallbacks:** navegador sem suporte: fica em scaleX(0); reduced-motion: escondida.
- **Código:** `.reading-progress` em `styles.css`.

### 10. Sublinhado da navegação (hover) — NOVO
- **Efeito:** cada link do menu desenha um fio cobalto ao passar o mouse.
- **Código:** `.nav a::after`.

### 11. Reveal por scroll
- **Gatilho:** IntersectionObserver, threshold 0.15, uma vez.
- **Efeito:** elementos `.reveal` sobem 18px e aparecem; os itens da stack ganham stagger de 50ms via JS.
- **Código:** `.reveal` em `styles.css` + observer/stagger em `script.js`.

## Trabalho

### 12. Coreografia de entrada dos projetos (scroll)
- **Efeito:** o título faz "wipe" (`clip-path` de baixo para cima) e fólio/descrição/tags/resultado entram escalonados.
- **Código:** `.entry.in h3` / `.entry.in .folio…` em `styles.css`.

### 13. Ticker de fólio na margem (scroll)
- **Efeito:** rótulo vertical à esquerda mostra "Projeto NN — 03" do projeto em foco. Só na área de Trabalho.
- **Código:** bloco "ticker de fólio" em `script.js` + `.folio-ticker`.

### 14. Hover do projeto — NOVO
- **Efeito:** fundo levemente cobalto, título vira cobalto e ganha sublinhado desenhado, tags acendem a borda.
- **Código:** `.entry:hover …` em `styles.css`.

## Manifesto

### 15. Pull-quote de código: máquina de escrever (scroll) — NOVO
- **Gatilho:** IntersectionObserver, threshold 0.4, uma vez.
- **Efeito:** o bloco de código se digita caractere a caractere (16ms; 130ms nas quebras de linha), preservando as cores dos tokens; o caret cobalto pisca ao fim.
- **Fallbacks:** reduced-motion/sem JS: código completo imediato (já no HTML).
- **Código:** bloco "máquina de escrever" em `script.js` + `.pullcode`/`.caret`.

## Stack

### 16. Índice interativo (hover) — NOVO
- **Efeito:** ao passar o mouse, uma faixa cobalto translúcida preenche a linha, o nome desliza 8px e nome+ano viram cobalto.
- **Código:** `.index-list .row:hover …` em `styles.css`.

## Contato

### 17. E-mail magnético (mouse) — NOVO
- **Efeito:** o e-mail gigante é atraído até o cursor (`data-magnetic`) e ganha sublinhado desenhado no hover.
- **Timing:** transform 0.4s.
- **Fallbacks:** touch/reduced-motion: sem atração; hover ainda muda a cor.
- **Código:** bloco "e-mail magnético" em `script.js` + `.colophon .email` em `styles.css`.
