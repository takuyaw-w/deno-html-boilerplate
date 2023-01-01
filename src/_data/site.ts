const site = {
  title: "my-site-tile",
  lang: "ja" as "ja" | "en",
} as const;

export type Site = typeof site;

export default site;
