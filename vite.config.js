/* eslint-disable */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      hooks: path.resolve(__dirname, "./src/hooks"),
      shared: path.resolve(__dirname, "./src/shared"),
      constants: path.resolve(__dirname, "./src/constants"),
      api: path.resolve(__dirname, "./src/api"),
      src: path.resolve(__dirname, "./src"),
    },
  },
});
