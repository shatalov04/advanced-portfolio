export default [
  {
    path: '/',
    component: () => import('../pages/about'),
    meta: {
      title: 'Блок «Обо мне»',
    },
  },
  {
    path: '/works',
    component: () => import('../pages/works'),
    meta: {
      title: 'Блок «Работы»',
    },
  },
  {
    path: '/yells',
    component: () => import('../pages/yells'),
    meta: {
      title: 'Блок «Отзывы»',
    },
  },
  {
    path: '/login',
    component: () => import('../pages/login'),
    meta: {
      public: true,
    },
  },
];
