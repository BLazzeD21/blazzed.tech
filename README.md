# 🚀 Single-page personal portfolio

A personal portfolio built with **Next.js 15** (App Router), **React 19**, **TypeScript** and **CSS Modules**, localized into **9 languages** with `next-intl` and deployed on **Vercel**.

Live site: [blazzed.vercel.app](https://blazzed.vercel.app)

| Locale     | Route | Locale     | Route | Locale       | Route |
| ---------- | ----- | ---------- | ----- | ------------ | ----- |
| 🇬🇧 English | `/en` | 🇫🇮 Suomi   | `/fi` | 🇫🇷 Français  | `/fr` |
| 🇷🇺 Русский | `/ru` | 🇨🇳 中文    | `/zh` | 🇸🇦 العربية   | `/ar` |
| 🇩🇪 Deutsch | `/de` | 🇪🇸 Español | `/es` | 🇵🇹 Português | `/pt` |

Every route is locale-prefixed and statically generated at build time, so each language ships as its own pre-rendered document with its own metadata, Open Graph image and `hreflang` alternates. `/` redirects to `/en`.

The page is composed of eight sections — header, about, education, experience, portfolio, stack, contact form and footer — separated by decorative SVG waves, with a social sidepanel and a scroll-to-top button on top.

## Stack

| **Area**  | **Choice**                                      |
| --------- | ----------------------------------------------- |
| Framework | Next.js 15 (App Router, Turbopack)              |
| UI        | React 19, CSS Modules                           |
| Language  | TypeScript 5                                    |
| i18n      | next-intl 4                                     |
| Forms     | react-hook-form, zod, react-turnstile           |
| Mail      | nodemailer                                      |
| Extras    | swiper, @tsparticles, classnames, uuid          |
| Quality   | ESLint, Stylelint, Prettier, Husky, lint-staged |
| Hosting   | Vercel                                          |

## Local setup instructions

### 1. Cloning a repository

The project requires **Node.js 18.18+** and npm.

Check the installed version of _node.js_:

```bash
node -v
```

Clone the repository and install dependencies:

```bash
git clone https://github.com/BLazzeD21/BLazzeD21.github.io.git
cd BLazzeD21.github.io
npm install
```

### 2. Filling in the environment variables

In the project root, copy `.env.template` to `.env.local` and fill in the values:

```bash
cp .env.template .env.local
```

| **Variable**                      | **Description**                                            |
| --------------------------------- | ---------------------------------------------------------- |
| `SMTP_HOST`, `SMTP_PORT`          | SMTP server used by the contact form                       |
| `SMTP_USERNAME`, `SMTP_PASSWORD`  | SMTP credentials                                           |
| `FROM_EMAIL_USERNAME`             | Sender address of the generated email                      |
| `TO_EMAIL_USERNAME`               | Mailbox that receives contact-form submissions             |
| `NEXT_PUBLIC_DOMAIN`              | Site origin with protocol — metadata, canonical URLs, CORS |
| `CLOUDFLARE_SECRET_KEY`           | Cloudflare Turnstile server-side secret                    |
| `NEXT_PUBLIC_CLOUDFLARE_SITE_KEY` | Cloudflare Turnstile client-side site key                  |
| `NEXT_PUBLIC_YANDEX_METRIC_ID`    | Yandex Metrika counter id, used in production only         |

> [!NOTE]
> The site renders fine without the mail and Turnstile keys — only the contact form stops working.

### 3. Starting the dev server

```bash
npm run dev
```

The site is then available at **https://localhost:5500** — note the `https`.

The dev script runs with Next's `--experimental-https` flag and reads self-signed certificates from the gitignored `certificates/` directory; if they are missing, Next generates them on the first run. The browser will warn about the self-signed certificate once — that is expected.

### 4. Scripts

| **Action**      | **Description**                                                      | **Command**         |
| --------------- | -------------------------------------------------------------------- | ------------------- |
| **Dev server**  | Dev server on https://localhost:5500 (Turbopack, experimental HTTPS) | `npm run dev`       |
| **Build**       | Production build                                                     | `npm run build`     |
| **Start**       | Serve the production build                                           | `npm start`         |
| **Check all**   | Type check + Prettier + ESLint + Stylelint, run in parallel          | `npm run format`    |
| **Type check**  | `tsc --noEmit`                                                       | `npm run type`      |
| **Lint**        | ESLint with `--fix`                                                  | `npm run lint`      |
| **Lint styles** | Stylelint over all CSS with `--fix`                                  | `npm run stylelint` |
| **Format**      | Prettier over the repository                                         | `npm run prettier`  |

Version bumps go through `npm run patch`, `npm run minor` and `npm run major`, which commit as `version: %s`.

> [!IMPORTANT]
> There is no test suite in this repository — no test runner is installed and no test files exist.

## Project structure

```bash
src/
├── app/
│   ├── [locale]/          # localized layout and the single page
│   ├── api/mail/          # contact form endpoint
│   └── globals.css        # design tokens, .container, .divider
├── shared/
│   ├── UI/                # Button, Title, P, Photo, LinkButton
│   └── Icons/
├── widgets/
│   ├── Sections/          # the eight page sections
│   ├── Blocks/            # repeated cards inside the sections
│   ├── Waves/             # decorative SVG separators
│   └── MailForm/, Locale/, Yandex/, ...
├── constants/             # localized structured content
├── config/                # metadata, nodemailer transporter
├── i18n/, schemes/, types/, hooks/, utils/
└── middleware.ts          # CORS for /api/*, locale routing for everything else
messages/                  # UI strings, one JSON file per locale
public/metadata/           # favicons and per-locale Open Graph images
```

Each component is a folder of three files — `Component.tsx`, `component.props.ts`, `component.module.css` — exported as a named export through the nearest barrel `index.ts`.

## Localization

Localization is split into two independent systems:

1. **UI strings** live in `messages/<locale>.json` and are read with `useTranslations` on the client or `getTranslations` on the server. `messages/en.json` is the schema of record — every other locale mirrors its shape. Type declarations for the keys are generated automatically and gitignored.
2. **Structured content** — work experience, education, skills, ratings and nav links — lives in `src/constants/*.ts` as `Locale<T> = Record<LocaleKeys, T[]>`, indexed by locale on the page and passed down as props. Locale-independent data (social links, portfolio items, stack) stays a plain array.

Strings render with `white-space: pre-line`, so a `\n` inside a translation becomes a real line break.

### Adding a new locale

To add a language, you must touch all of:

- `allowedLangs` in `src/i18n/routing.ts`
- `LocaleKeys` in `src/types/types.ts`
- `messages/<locale>.json`
- `alternates.languages` in `src/config/metadata.ts`
- every `Locale<T>` constant in `src/constants/`
- `public/metadata/openGraph/<locale>.jpg`

## Contact form

`MailForm` validates the input on the client with `react-hook-form`, obtains a Cloudflare Turnstile token, and POSTs to `app/api/mail/route.ts`. The route re-validates the payload against the zod `contactFormSchema`, verifies the token against Cloudflare's siteverify endpoint, and sends the message through a lazily-created, memoized nodemailer transporter. User input is escaped before it reaches the email HTML.

> [!IMPORTANT]
> Field length limits are declared twice — in the client `register()` rules and in the zod schema. Change them together.

## Code style

These are lint errors, not preferences:

- an explicit return type on every function;
- tabs, double quotes, semicolons, 120-column width;
- imports auto-sorted into project-specific groups — run Prettier instead of arranging them by hand;
- camelCase class names in CSS Modules.

A Husky `pre-commit` hook runs `tsc --noEmit` and lint-staged (Prettier + ESLint on `*.{js,jsx,ts,tsx}`, Prettier + Stylelint on `*.css`).

## Deployment

The site is deployed on **Vercel**: a push to `master` triggers a build and promotion. Set the environment variables from the table above in the project settings — `VERCEL_URL` is injected by Vercel automatically and is already part of the CORS allow-list.

> [!IMPORTANT]
> CORS for `/api/*` is configured in two places — `src/middleware.ts` and the `headers()` block in `next.config.ts`. Both must stay in sync when the allowed origins change.
