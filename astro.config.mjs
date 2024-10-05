import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";
import dotenv from "dotenv";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  integrations: [tailwind(), sitemap(), compress()],
  output: "server",
  adapter: netlify(),
});