import { PageData } from "lume/core.ts";

export default function Main({ children }: PageData) {
  return <main class="my-6 mx-auto container flex-grow">{children}</main>;
}
