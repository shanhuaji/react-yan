import { HomeOutlined } from '@ant-design/icons';
import routes from '@/config/route';
export default [
  {
    path: '/',
    component: '@/pages/home',
    menu: {
      name: '首页', // 兼容此写法
    },
  },
  {
    path: '/list',
    component: '@/pages/list/index',
    menu: {
      name: '列表', // 兼容此写法
      icon: 'HomeOutlined',
    },
  },
  {
    path: '/date',
    menu: {
      name: '数据', // 兼容此写法
      icon: 'HomeOutlined',
    },
    routes: [
      {
        path: '/date/one',
        component: './date/one',
        menu: {
          name: 'one', // 兼容此写法
        },
      },
      {
        path: '/date/two',
        component: './date/Two',
        menu: {
          name: 'two', // 兼容此写法
        },
      },
    ],
  },
];
