import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
    env: {
      node: true,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
