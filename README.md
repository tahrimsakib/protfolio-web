# Portfolio site (React + Tailwind)

Modern single-page portfolio built with React, Vite, React Router, and Tailwind CSS.

## Features

- Animated hero, featured projects, and collaboration sections styled with Tailwind
- Multi-page routing (Home, About, Works, Connect, Contact) powered by React Router
- Responsive navigation with mobile drawer
- Tailwind forms styling and smooth scroll-to-top between routes

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## Project structure

- `src/` — React components, pages, and shared data
- `public/` — static assets such as the favicon
- `tailwind.config.js` — Tailwind customization (palette, fonts, shadows)

## Customization

- Update project data in `src/data/projects.js`
- Replace hero or gallery imagery with assets in `public/images`
- Adjust Tailwind tokens (colors, shadows, typography) via `tailwind.config.js`

## Deploy

Build output in `dist/` can be hosted on Netlify, Vercel, GitHub Pages, or any static host.
