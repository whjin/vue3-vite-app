import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  assetsDir: "static",
  productionSourceMap: false,
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
      assets: path.join(__dirname, "src/assets"),
      components: path.join(__dirname, "src/components"),
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV == "production") {
      config.mode = "production";
      config["performance"] = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      };
    }
  },
});
