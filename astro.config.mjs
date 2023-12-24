import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import compress from "astro-compress";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  },
  integrations: [tailwind(), sitemap(), compress()]
});