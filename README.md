# Behavior Pathways

Marketing website for a small ABA therapy provider built with Next.js 14, TypeScript, and Tailwind CSS. Deploys easily to Vercel.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run start` – run production build
- `npm run lint` – lint with ESLint
- `npm run typecheck` – run TypeScript in strict mode
- `npm test` – run Vitest unit tests

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in (all optional):

- `NEXT_PUBLIC_SITE_URL` – base URL for metadata. If omitted, Vercel's domain or `localhost` is used.
- `CONTACT_TO_EMAIL` – email where form submissions are sent. Defaults to the address in `content/site.ts`.
- `RESEND_API_KEY` – (optional) Resend API key
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` – (optional) SMTP settings
- `HCAPTCHA_SITEKEY`, `HCAPTCHA_SECRET` – (optional) hCaptcha keys
- `PLAUSIBLE_DOMAIN` – (optional) Plausible domain

## 📄 Vercel Deployment

1. Push to GitHub.
2. Create a new project on [Vercel](https://vercel.com) and import the repository.
3. Set build command to `next build` and output to `.next`.
4. Add the environment variables above in Vercel project settings.
5. Deploy.

## 📝 License

MIT
