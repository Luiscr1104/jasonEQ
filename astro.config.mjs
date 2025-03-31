import { defineConfig } from "astro/config";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"; // 👈 O "edge" si preferís

export default defineConfig({
  adapter: vercel(), // 👈 Esto es todo lo que necesitas para Vercel

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()],
  },
});
