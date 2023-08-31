import { defineConfig } from '@pandacss/dev'
import { preset, recipes } from "@welcome-ui/core";

export default defineConfig({
  preflight: true,
  include: [
    './node_modules/@welcome-ui/**/dist/*.mjs',
    './src/panda/*.{ts,tsx}', 
  ],
  exclude: [],
  jsxFramework: 'react',
  outdir: '@welcome-ui/panda',
  emitPackage: true,
  // optimize: true,
  // minify: true,
  // hash: true,
  presets: [preset],
  theme: {
    extend: {
      recipes: {
        button: { ...recipes.button, jsx: ['ButtonLink'] }
      }
    }
  }
})
