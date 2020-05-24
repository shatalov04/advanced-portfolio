import AdminHeader from '../components/admin-header';

export default [
  {
    path: '/',
    components: {
      default: () => import('../pages/about'),
      header: AdminHeader,
    },
    meta: {
      title: 'Блок «Обо мне»',
    },
  },
  {
    path: '/works',
    components: {
      default: () => import('../pages/works'),
      header: AdminHeader,
    },
    meta: {
      title: 'Блок «Работы»',
    },
  },
  {
    path: '/yells',
    components: {
      default: () => import('../pages/yells'),
      header: AdminHeader,
    },
    meta: {
      title: 'Блок «Отзывы»',
    },
  },
  {
    path: '/login',
    component: () => import('../pages/login'),
    meta: {
      isPublic: true,
    },
  },
];
