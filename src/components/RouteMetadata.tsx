import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routeMetadata from "@/seo/route-metadata.json";

const SITE_ORIGIN = "https://jetmerce.github.io";
type Route = keyof typeof routeMetadata;
type RoutePage = { title: string; description: string; robots?: string };

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = (pathname.replace(/\/$/, "") || "/") as Route;
    const page = (routeMetadata as Record<string, RoutePage>)[route];
    const isNotFound = !page;
    const title = page?.title ?? "404 Page Not Found | Jetmerce";
    const description = page?.description ?? "The page you requested could not be found. Visit Jetmerce to explore our services and resources.";
    const canonical = `${SITE_ORIGIN}${route === "/" ? "/" : `${route}/`}`;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", page?.robots ?? (isNotFound ? "noindex, follow" : "index, follow"));
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Jetmerce");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", `${SITE_ORIGIN}/assets/og_image.png`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", `${SITE_ORIGIN}/assets/og_image.png`);

    let canonicalElement = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!isNotFound) {
      if (!canonicalElement) {
        canonicalElement = document.createElement("link");
        canonicalElement.rel = "canonical";
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = canonical;
    } else {
      canonicalElement?.remove();
    }
  }, [pathname]);

  return null;
};

export default RouteMetadata;
