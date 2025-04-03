import { defineConfig } from "astro/config";
import sitemap from "astro-sitemap";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://www.terrenoslafortunacr.com",
  integrations: [sitemap()],
  output: "server",
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()],
  },
});
