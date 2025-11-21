import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  {
    rules: {
      /**
       * 0: "off"
       * 1: "warn"
       * 2: "error"
       */
      "no-unused-vars": "warn",
      "semi": "error",
      "no-constant-condition": 0
    }
  }
]);
