import type { ComponentChildren } from "preact";
import type { Site } from "../../_data/site.ts";
import Head from "./Head.tsx";

type Props = {
  children: ComponentChildren;
  site: Site;
  title: string;
};

export default ({ site, title, children }: Props) => {
  const headProps = {
    pageTitle: title,
    siteTitle: site.title,
  };

  return (
    <html lang={site.lang}>
      <Head {...headProps} />
      <body>
        {children}
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
};
