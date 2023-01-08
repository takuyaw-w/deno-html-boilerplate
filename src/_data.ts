const site = {
  title: "my-site-tile",
  lang: "ja" as "ja" | "en",
} as const;

const metas = {
  hogehoge: "hohoho",
};

export type Site = typeof site;

export default { site, metas };
