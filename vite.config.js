import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
console.log(path.resolve(__dirname));
const viteConfig = defineConfig(() => {
  return {
    plugins: [react()],
    root: path.resolve(__dirname, "src/"),
    base: "./",
    // extensions: ['.js','.mjs','.jsx','.css'],
    build: {
      outDir: path.resolve(__dirname, "dist"),
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
     
      server: {
        hmr: true, // 启用热更新
      },
    },
  };
});

export default viteConfig;
