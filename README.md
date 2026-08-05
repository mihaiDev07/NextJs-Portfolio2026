# Frontend Developer Portfolio

## EmailJS contact form setup

1. Create an EmailJS service and email template.
2. In the template, use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, and `{{reply_to}}`.
3. Copy `.env.example` to `.env.local`.
4. Replace the example values with the Service ID, Template ID, and Public Key from the EmailJS dashboard.
5. Restart the development server after changing environment variables.

The browser needs these identifiers to call EmailJS, so they use the `NEXT_PUBLIC_` prefix. They are not secret credentials. Never add a private EmailJS key or `.env.local` to source control. For production, add the same variables in the hosting provider's environment settings.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
