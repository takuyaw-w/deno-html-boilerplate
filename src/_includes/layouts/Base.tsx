import { title } from "../../index.tsx";
import Head from "./Head.tsx";

export default ({ lang, title, siteTitle, children }) => {
  return (
    <html lang={lang}>
      <Head pageTitle={title} siteTitle={siteTitle} />
      <body>
        {children}
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
};
