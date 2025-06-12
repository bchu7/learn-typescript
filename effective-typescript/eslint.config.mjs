import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

// export default defineConfig([
//   {ignores: ["**/node_modules", "**/dist", "**/coverage"]},
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.browser } },
//   tseslint.configs.recommended,
// ]);

// disable/noUse
// export default [{
//     ignores: ["**/node_modules", "**/dist", "**/coverage", "**/test-reports"],
// }, ...compat.extends("./.eslintrc.json")];