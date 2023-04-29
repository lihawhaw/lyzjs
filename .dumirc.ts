import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export default defineConfig({
  base: '/', // '/lyzjs/',
  publicPath: '/', // '/lyzjs/',
  outputPath: 'docs-dist',
  esbuildMinifyIIFE: true,
  // all in one to fix ConfigProvider error
  codeSplitting: {
    jsStrategy: 'bigVendors'
  },
  themeConfig: {
    ...defineThemeConfig({
      // ...
    }),
    name: 'lyzjs',
  },
});
