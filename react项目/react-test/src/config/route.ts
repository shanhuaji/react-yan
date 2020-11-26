export default [
  {
    path: '/',
    component: '@/pages/Home/index',
    menu: {
      name: '首页', // 兼容此写法
      icon: 'HomeOutlined',
    },
    breadcrumbName:'首页',
  },
  /* 详情页 */
  {
    path: '/details',
    menu: {
      name: '详情页', // 兼容此写法
      icon: 'AppstoreOutlined',
    },
    breadcrumbName:'详情页',
    routes: [
      {
        path: './phonedetails',
        component: './Details/phonedetails',
        menu: {
          name: '手机详情', // 兼容此写法
          icon: 'AndroidOutlined',
        },
        breadcrumbName:'手机详情',
      },
      {
        path: './shopdetails',
        component: './Details/shopdetails',
        menu: {
          name: '商品详情', // 兼容此写法
          icon: 'DribbbleOutlined',
        },
        breadcrumbName:'商品详情',
      },
    ],
  },
  /* 表单页 */
  {
    path: '/form',
    menu: {
      name: '表单页',
      icon: 'DotChartOutlined',
    },
    breadcrumbName:'表单页',
    routes: [
      {
        path: './staff',
        component: './Form/staff',
        menu: {
          name: '员工列表',
          icon: 'DingdingOutlined',
        },
        breadcrumbName:'员工列表',
      },
      {
        path: './visitor',
        component: './Form/visitor',
        menu: {
          name: '访客列表',
          icon: 'WeiboSquareOutlined',
        },
        breadcrumbName:'访客列表',
      },
    ],
  },
  /* 列表页 */
  {
    path: '/list',
    menu: {
      name: '列表页',
      icon: 'GithubOutlined',
    },
    breadcrumbName:'列表页',
    routes: [
      {
        path: '/list/onelist',
        component: '@/pages/List/onelist',
        menu: {
          name: '一级列表',
          icon: 'AlipayOutlined',
        },
        access: 'canReadFoo',
        breadcrumbName:'一级列表',
        params:{
          name:'列表页',
          username:"一级列表"
        }
      },
      {
        path: '/list/twolist',
        component: '@/pages/List/twolist',
        menu: {
          name: '二级列表',
          icon: 'ZhihuOutlined',
        },
        breadcrumbName:'二级列表',
        params:{
          name:'列表页',
          username:"二级列表"
        }
      },
      {
        path: '/list/threelist',
        component: '@/pages/List/threelist',
        menu: {
          name: '三级列表',
          icon: 'ZhihuOutlined',
        },
        breadcrumbName:'三级列表',
        params:{
          name:'列表页',
          username:"三级列表"
        }
      },
    ],
  },
  /* 404 */
  {
    path: '*',
    component: '@/pages/404',
  },
];
