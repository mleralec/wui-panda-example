import { defineConfig } from '@pandacss/dev'
import { preset } from "@welcome-ui/core";

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
})
