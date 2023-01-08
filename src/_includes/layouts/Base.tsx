import { PageData } from "lume/core.ts";
import type { Site } from "../../_data.ts";
import Head from "./parts/Head.tsx";

interface Props extends PageData {
  site: Site;
  title: string;
}

export default ({ site, title, children }: Props) => {
  const headProps = {
    pageTitle: title,
    siteTitle: site.title,
  };

  return (
    <html lang={site.lang}>
      <Head {...headProps} />
      <body>
        <div class="flex flex-col min-h-screen bg-gray-200">{children}</div>
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
};
