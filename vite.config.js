import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@config": "/src/config",
      "@hooks": "/src/hooks",
      "@routes": "/src/routes",
      "@utils": "/src/utils",
      "@services": "/src/services",
      "@assets": "/src/assets",
      "@layouts": "/src/layouts",
      "@store": "/src/store",
    },
  },
});
