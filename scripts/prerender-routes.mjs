import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "dist");
const origin = "https://jetmerce.github.io";
const metadata = JSON.parse(
  await fs.readFile(path.join(projectRoot, "src/seo/route-metadata.json"), "utf8"),
);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function setMeta(html, attribute, name, content) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+(?=[^>]*\\b${attribute}=["']${escapedName}["'])[^>]*>`, "i");
  const tag = `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}">`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function setCanonical(html, canonical) {
  const pattern = /<link\s+(?=[^>]*\brel=["']canonical["'])[^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(canonical)}">`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `  ${tag}\n  </head>`);
}

function renderDocument(template, route, page, isNotFound = false) {
  const url = `${origin}${route === "/" ? "/" : route}`;
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "name", "keywords", page.keywords || "");
  html = setMeta(html, "property", "og:title", page.title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:type", "website");
  html = setMeta(html, "property", "og:site_name", "Jetmerce");
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", `${origin}/assets/og_image.png`);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", page.title);
  html = setMeta(html, "name", "twitter:description", page.description);
  html = setMeta(html, "name", "twitter:image", `${origin}/assets/og_image.png`);
  html = setMeta(html, "name", "robots", page.robots || "index, follow");

  if (isNotFound) {
    html = html.replace(/<link\s+(?=[^>]*\brel=["']canonical["'])[^>]*>/i, "");
  } else {
    html = setCanonical(html, url);
  }

  const navigation = Object.entries(metadata)
    .filter(([href]) => href !== "/thank-you")
    .map(([href, item]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(item.title.replace(/^Jetmerce\s*\|\s*/, ""))}</a></li>`)
    .join("\n      ");
  const body = `<main id="seo-content">
    <h1>${escapeHtml(page.heading)}</h1>
    <p>${escapeHtml(page.summary)}</p>
    ${isNotFound ? '<p>The page you requested could not be found.</p>' : ""}
    <nav aria-label="Jetmerce pages"><h2>Explore Jetmerce</h2><ul>${navigation}</ul></nav>
  </main>`;
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

const template = await fs.readFile(path.join(outputDir, "index.html"), "utf8");
for (const [route, page] of Object.entries(metadata)) {
  const routeDir = route === "/" ? outputDir : path.join(outputDir, route.slice(1));
  await fs.mkdir(routeDir, { recursive: true });
  const routeTemplate = renderDocument(template, route, page);
  await fs.writeFile(path.join(routeDir, "index.html"), routeTemplate);
  console.log(`Generated ${route === "/" ? "/index.html" : `${route}/index.html`}`);
}

const notFound = {
  title: "404 Page Not Found | Jetmerce",
  description: "The page you requested could not be found. Visit Jetmerce to explore our services and resources.",
  heading: "Page not found",
  summary: "The page you requested could not be found. Use the links below to continue browsing Jetmerce.",
  keywords: "",
  robots: "noindex, follow",
};
await fs.writeFile(path.join(outputDir, "404.html"), renderDocument(template, "/404", notFound, true));
console.log("Generated /404.html");
