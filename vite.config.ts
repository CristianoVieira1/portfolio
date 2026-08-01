import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "sitemap.xml",
        "Cristiano-Borges-React-Native.pdf",
      ],
      workbox: {
        navigateFallback: null,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"],
        navigateFallbackDenylist: [/^\/portfolio\/(robots\.txt|sitemap\.xml|.*\.pdf)/],
      },
      manifest: {
        name: "Cristiano Borges Portfolio",
        short_name: "Cristiano",
        description:
          "Portfólio de Cristiano Borges, desenvolvedor React Native.",
        theme_color: "#0f172a",
        display: "standalone",
        icons: [
          {
            src: "/portfolio/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
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
