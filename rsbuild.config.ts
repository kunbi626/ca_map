import path from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import { pluginHtmlMinifierTerser } from "rsbuild-plugin-html-minifier-terser";
export default defineConfig({
  plugins: [
    pluginReact(),
    pluginHtmlMinifierTerser({
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeTagWhitespace: true,
      sortAttributes: true,
      sortClassName: true,
      html5: true,
    }),
  ],
  html: {
    favicon: "./src/assets/icon.ico",
    title: "Business Help Center",
    meta: {
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", 'og:image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH70fZCOqL86qVH3KlOU6tbQ-OVJmM6gGAGA&s',
    },
  },
  performance: {
    buildCache: true,
    printFileSize: true,
    removeConsole: true,
    removeMomentLocale: true,
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [tailwindcss],
      },
    },
  },
  source: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
