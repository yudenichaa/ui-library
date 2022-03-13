import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    external: ["react/jsx-runtime", "react", "react-dom"],
    plugins: [typescript(), image(), terser(), json()],
  },
]);
