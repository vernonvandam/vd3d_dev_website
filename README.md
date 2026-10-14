# VD3D website

A static React website for VD3D, built with Vite, TypeScript, Tailwind CSS and TanStack Router.

## Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm run preview
```

The production build is written to `dist/`. For Cloudflare Pages, use `npm run build` as the build command and `dist` as the build output directory. The app is a client-side SPA; configure the static host to serve `index.html` for application routes.