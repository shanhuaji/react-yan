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
    hmr: true,
  },
 
});
