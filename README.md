# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

# The problem
Client was not able to render subdomains as server side components in NuxtJS

# Solution
It was solved using server middleware, client global middleware and nuxt.config hooks with routing rules
/server/middleware/subdomain.ts
/middleware/subdomain.global.ts
nuxt.config hooks

Now this solution should work with static pages and render subdomains as server side pages dynamically.
sadaf.localhost:3000
sadaf.localhost:3000/blog/article1

alex.localhost:3000/blog/article1

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
