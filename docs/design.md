# Design system

Direção editorial de impressão: uma folha de papel bege com tinta cobalto, tipografia serifada de display e rótulos em mono, como um caderno de tipografia. O "movimento" vem de tipografia cinética e revelações de scroll, não de decoração.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#ECE6D7` | fundo da página (papel) |
| `--paper-2` | `#E3DCC9` | faixas alternadas (Trabalho, Sobre) |
| `--ink` | `#17130C` | texto principal; fundo do contato |
| `--cobalt` | `#2A2FBE` | único acento: itálicos, números, hover, caret |
| `--muted` | `#6C6353` | rótulos e texto secundário |
| `--rule` | `#C9C1AC` | fios (bordas de 1px) |

Regra: um acento só (cobalto), usado igual na página inteira. Fundo do contato inverte para tinta com texto papel.

## Tipografia

| Papel | Fonte | Onde |
|---|---|---|
| Display | Instrument Serif | h1, h2, h3, números de resultado, e-mail, assinatura |
| Corpo | Newsreader | parágrafos, deck, itens da stack |
| Rótulos | IBM Plex Mono | nameplate, nav, eyebrow, tags, datas, ticker |

O itálico do Instrument Serif carrega o acento (palavra "software" no h1, "legível" no manifesto). Escala do h1: `clamp(46px, 8.4vw, 118px)`, tracking -2%, line-height .94.

Sobre o hook de fontes: "Instrument Serif" é sinalizado por ferramentas como fonte comum, mas é a escolha deliberada da direção — mantida de propósito.

## Grid e espaçamento

- **Container:** max-width 1180px + padding lateral fluido (`clamp(20px, 5vw, 56px)`).
- **Ritmo vertical:** seções com `clamp(56px, 9vw, 120px)`.
- **Trabalho:** grid de 3 colunas `100px 1fr auto` (fólio · conteúdo · resultado); vira 1 coluna abaixo de 760px.
- **Stack:** `1fr 2fr` (título · índice em 2 colunas).
- **Sobre:** `1fr 1.4fr` (retrato · texto).
- **Hero deck:** duas colunas (texto · status), empilha no mobile.

## Textura

Grão de papel via `feTurbulence` (SVG inline) numa camada `fixed` com `mix-blend-mode: multiply` a 5% de opacidade — dá a "casca" de papel sem prejudicar a leitura. Desligado sob reduced-motion.

## Estados de fallback

- Sem JS: `<noscript>` revela o conteúdo; o code pull-quote já vem completo no HTML.
- Reduced-motion: tudo estático e visível; relógio e conteúdo intactos.
- Retrato: bloco com gradiente tinta e rótulo `[ retrato ]`, à espera de foto real.

## O que foi evitado de propósito

Sombras, cantos muito arredondados, gradientes coloridos, glow, cards flutuantes, três colunas iguais. A página imita uma publicação impressa: fios finos, faixas de cor chapada, hierarquia por tamanho de tipo.
