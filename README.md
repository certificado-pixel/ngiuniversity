# NGI University: site institucional

Site da NGI University (Gizelle Silva, A Gringa, e Tande Carlos). Feito em **Next.js 16 (App Router) + TypeScript**, CSS puro e fontes self-hosted (Bodoni Moda + Manrope via Fontsource). Pronto para GitHub + Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, Instagram, e-mail, domínio | `src/config/site.ts` (objeto `site`) |
| Cursos, docentes, certificação, FAQ | `src/config/site.ts` |
| Títulos e textos das seções | `src/app/page.tsx` |
| Cores, fontes, espaçamentos | `src/app/globals.css` (variáveis no `:root`) |
| SEO (título, descrição) | `src/app/layout.tsx` |
| Favicon e imagem de compartilhamento | `src/app/icon.png`, `src/app/opengraph-image.jpg` |

Busque por `TODO` no projeto para ver tudo que ainda é placeholder ou precisa de confirmação.

### Cursos

Os dois cursos (Educador Oficial e Educador Elite) ficam no array `courses` em `src/config/site.ts`: resumo, público, carga horária, módulos e mensagem do WhatsApp. O conteúdo veio dos PPCs da FABRANI.

### Logos

`public/images/ngi-logo.png`, `ngi-mark.png` e `ngi-lotus.png` foram recortados do logo original com fundo transparente (feitos para fundo azul). Se a agência tiver os arquivos vetoriais (SVG), vale substituir.

### Trocar as fotos

1. Coloque as imagens em `public/images/` (ex.: `gringa.jpg`, `tande.jpg`).
2. Docentes: em `src/config/site.ts` (`faculty`), troque `image: null` por `image: "/images/gringa.jpg"`.
3. Demais fotos (hero, equipe): no `page.tsx`, adicione `src="/images/arquivo.jpg"` ao componente `<Photo>` correspondente.

Sem `src`, o componente mostra um bloco com gradiente e a legenda da foto esperada.

### WhatsApp

Número em `site.whatsapp`, só dígitos com DDI + DDD (ex.: `5511999999999`). Cada formação tem sua própria mensagem pré-preenchida (`message`), o que ajuda o comercial a saber de onde veio o lead.

## Deploy (GitHub + Vercel)

```bash
git remote add origin git@github.com:SEU-USUARIO/ngi-university.git
git push -u origin main
```

Na Vercel: **Add New → Project → importar o repositório**. O framework é detectado automaticamente, sem variáveis de ambiente. Depois, em **Settings → Domains**, adicione o domínio do cliente e atualize `site.url` em `src/config/site.ts`.
