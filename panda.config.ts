import { defineConfig } from '@pandacss/dev'
import { welcomePreset } from '@welcome-ui/themes.welcome'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}', './node_modules/@welcome-ui/**/dist/*.mjs'],
  exclude: [],
  jsxFramework: 'react',
  outdir: '@welcome-ui/panda',
  emitPackage: true,
  presets: [welcomePreset],
  logLevel: 'info'
})
