import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import paths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), paths()],
  server: {
    open: true,
    host: "0.0.0.0",
  },
});
