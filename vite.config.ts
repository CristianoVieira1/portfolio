import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import { seoPagesPlugin } from "./vite-plugin-seo-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "favicon-32.png",
        "favicon-180.png",
        "favicon-192.png",
        "favicon-512.png",
        "robots.txt",
        "sitemap.xml",
        "Cristiano-Borges-React-Native.pdf",
      ],
      workbox: {
        navigateFallback: null,
        globPatterns: ["**/*.{js,css,html,ico,svg,woff2}"],
        navigateFallbackDenylist: [/^\/portfolio\/(robots\.txt|sitemap\.xml|.*\.pdf)/],
      },
      manifest: {
        name: "Cristiano Borges — Engenharia de software",
        short_name: "Cristiano Borges",
        description:
          "Desenvolvimento de aplicativos, sites, sistemas e SaaS.",
        theme_color: "#07090d",
        background_color: "#07090d",
        display: "standalone",
        icons: [
          {
            src: "/portfolio/favicon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/portfolio/favicon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    seoPagesPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import", "global-builtin"],
      },
    },
  },
});
