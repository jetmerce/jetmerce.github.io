/** Return an asset path that works both at the domain root and under a GitHub Pages project path. */
export const asset = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;
