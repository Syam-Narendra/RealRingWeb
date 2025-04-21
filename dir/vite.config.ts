import react from "@vitejs/plugin-react-swc";
import { rm } from "fs/promises";
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    react(),
    {
      name: "DeleteOldBuildFiles",
      async buildStart() {
        const oldBuildDir = path.join(__dirname, "../", "/assets");
        await rm(oldBuildDir, { recursive: true, force: true });
      },
    },
  ],
  base: "./",
  build: {
    outDir: "../",
  },
});
