// vite.config.js
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  // esbuild: {
  //   loader: {'.js':'jsx'}, // Treat .js files as JSX
  // },
  plugins: [reactRefresh()],
});
