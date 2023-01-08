const site = {
  title: "my-site-tile",
  lang: "ja" as "ja" | "en",
} as const;

const metas = {
  site: "=site.title",
  lang: "=site.lang",
} as const;

export type Site = typeof site;
export type Meta = typeof metas;

export default { site, metas };
