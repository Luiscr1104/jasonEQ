import { defineConfig } from "astro/config";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel/serverless"; // 👈 O "edge" si preferís

export default defineConfig({
  output: "server", // 🔥 esto activa SSR
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
