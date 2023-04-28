import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

export default defineConfig({
  base: '/lyzjs/',
  publicPath: '/lyzjs/',
  outputPath: 'docs-dist',
  themeConfig: {
    ...defineThemeConfig({
      // ...
    }),
    name: 'lyzjs',
  },
});
