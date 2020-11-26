import { defineConfig } from 'umi';
import routes from './src/config/route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  layout: {
    name: 'Ant Design',
    locale: true,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {
    dark: false,
    compact: false,
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
