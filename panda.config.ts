import { defineConfig } from '@pandacss/dev'
import { wuiGlobalStyles } from "@welcome-ui/core";
import { welcomePreset } from '@welcome-ui/themes.welcome'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}', './node_modules/@welcome-ui/**/dist/*.mjs'],
  exclude: [],
  jsxFramework: 'react',
  outdir: '@welcome-ui/panda',
  emitPackage: true,
  minify: true,
  hash: true,
  presets: [welcomePreset],
  globalCss: wuiGlobalStyles,
})
