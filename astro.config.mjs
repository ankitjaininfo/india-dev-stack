import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: sharpImageService(),
  site: "https://astrojs.org",
  integrations: [tailwind({ applyBaseStyles: false, }), mdx(), sitemap(), icon(), react()],
});