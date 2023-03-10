import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import windi from "lume/plugins/windi_css.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  src: "./src",
  dest: "dist",
  server: {
    port: 8080,
    open: true,
  },
  location: new URL("https://example.com"),
});

site
  .use(basePath())
  .use(
    esbuild({
      extensions: [".ts", ".js"],
      options: {
        bundle: true,
        format: "esm",
        minify: true,
        keepNames: true,
        platform: "browser",
        target: "esnext",
        incremental: true,
        treeShaking: true,
      },
    })
  )
  .use(windi())
  .use(jsx_preact())
  .use(metas())
  .use(sourceMaps());

export default site;
