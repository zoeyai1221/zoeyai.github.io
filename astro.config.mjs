import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import svelte from "@astrojs/svelte";
import db from "@astrojs/db";

// Use your GitHub Pages URL
const site = "https://zoeyai1221.github.io/zoeyai.github.io/";

export default defineConfig({
  // Essential for GitHub Pages sub-path deployment
  base: "/zoeyai.github.io",
  site,
  
  // Set to 'static' to allow the local DB to be bundled during build
  output: "static",

  experimental: {
    svgo: true,
  },
  
  fonts: [
    {
      provider: fontProviders.local(),
      name: "CabinetGrotesk",
      cssVariable: "--font-cabinet-grotesk",
      options: {
        variants: [
          {
            weight: "100 1000",
            style: "normal",
            src: ["./src/assets/fonts/CabinetGrotesk-Variable.ttf"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      options: {
        variants: [
          {
            weight: "100 1000",
            style: "normal",
            src: ["./src/assets/fonts/Satoshi-Variable.ttf"],
          },
          {
            weight: "100 1000",
            style: "italic",
            src: ["./src/assets/fonts/Satoshi-VariableItalic.ttf"],
          },
        ],
      },
    },
  ],

  integrations: [
    sitemap(),
    robotsTxt(), // Automatically links to your sitemap
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
    db(), // Astro DB integration
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  vite: {
    assetsInclude: "**/*.riv",
  },
});
