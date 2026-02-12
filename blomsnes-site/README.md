# Blomsnes Development

Webbplats för Blomsnes Development — strategisk affärsutveckling, digital transformation och coaching av Janicke Blomsnes.

## Kom igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Teknisk stack

- **Framework:** Next.js 14 (App Router)
- **Språk:** TypeScript
- **Styling:** Tailwind CSS
- **Animationer:** Framer Motion / CSS
- **Ikoner:** Lucide React

## Projektstruktur

```
src/
├── app/                    # Routes (App Router)
│   ├── om/                 # Om-sida
│   ├── tjanster/           # Tjänster
│   ├── strategi-till-resultat/  # Metodik
│   ├── coaching/           # Coaching
│   ├── blogg/              # Blogg
│   ├── case/               # Case-studier
│   ├── kontakt/            # Kontakt
│   ├── boka/               # Boka samtal
│   └── integritetspolicy/  # Integritetspolicy
├── components/             # Återanvändbara komponenter
│   ├── ui/                 # UI-primitiver
│   └── layout/             # Header, Footer
├── lib/                    # Hjälpfunktioner och konstanter
├── types/                  # TypeScript-typer
└── i18n/                   # Översättningar
```

## Deployment

Projektet är redo att deployas på Vercel, Netlify eller annan plattform som stödjer Next.js.

```bash
npm run build
npm start
```
