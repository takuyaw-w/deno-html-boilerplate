import { Page } from "lume/core.ts";

export default function Head({ pageTitle, siteTitle }) {
  const title = pageTitle !== undefined
    ? `${pageTitle} - ${siteTitle}`
    : `${siteTitle}`;
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
  );
}
