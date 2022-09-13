import { HOME_URL } from '@/modules/home/home.constants';

export default [
  {
    path: HOME_URL.path,
    redirect: '',
    component: () => import('@/modules/home/views/HomePage.vue'),
  },
  {
    ...HOME_URL.components,
    component: () => import('@/modules/home/views/HomeComponents.vue'),
  },
];
