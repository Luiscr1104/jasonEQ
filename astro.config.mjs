// @ts-check
import { defineConfig } from "astro/config";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node"; // 👈 Importar el adaptador

export default defineConfig({
  output: "server", // 👈 Importante para permitir SSR/API routes
  adapter: node({ mode: "standalone" }), // 👈 Adaptador Node

  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    plugins: [tailwindcss()],
  },
});
