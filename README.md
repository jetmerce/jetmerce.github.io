# Jetmerce website

React + TypeScript + Vite site, prepared for GitHub Pages. All image files previously served from Vibe's filesafe host are now bundled in `public/assets`.

## Run locally

- Node.js 20 or newer
- `npm install`
- `npm run dev`

## Publish with GitHub Pages

1. Create a GitHub repository named `jetmerce` (or another name) and push the contents of this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and deploys the site after each push. For a regular project repository the site URL will be `https://OWNER.github.io/REPOSITORY/`; for an `OWNER.github.io` repository it will be at the domain root.
4. Open **Actions** and wait for **Deploy to GitHub Pages** to complete successfully.

The workflow builds with the right repository base path, uses `BrowserRouter` with that base, and publishes `dist/index.html` as `dist/404.html` so direct navigation and refreshes on app routes work on GitHub Pages.

## Functional notes

- Contact and lead forms still submit to FormSubmit (`jetmerceofficial@gmail.com`). Test both forms after deployment; the first submission may require FormSubmit email verification. This service remains an external dependency.
- The site links, video embeds, analytics and external integrations remain online services by design; the local image assets no longer depend on Vibe's file host.
- Before making the repository public, review the source for personal/contact details and analytics identifiers. The repository contains no environment-file secrets in the supplied export.
