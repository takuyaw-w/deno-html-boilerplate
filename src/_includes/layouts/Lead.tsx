import { PageData } from "lume/core.ts";
import Header from "./parts/Header.tsx";
import Footer from "./parts/Footer.tsx";
import Main from "./parts/Main.tsx";
export const layout = "layouts/Base.tsx";

export default function Lead({ children, site }: PageData) {
  return (
    <>
      <Header {...site} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
