import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,          // prevent code minification
    sourcemap: true,        // easier debugging
  },
  server: {
    port: 5173,
  },
});
