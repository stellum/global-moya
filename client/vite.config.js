import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/images"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [react(), svgr()],
  server: {
    host: true,
  },
});
