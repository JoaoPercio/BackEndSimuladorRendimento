import { AUTH_URL } from '@/modules/auth/auth.constants';

export default [
  {
    ...AUTH_URL.login,
    component: () => import('@/modules/auth/views/LoginPage.vue'),
  },
  {
    ...AUTH_URL.registrar,
    component: () => import('@/modules/auth/views/RegistrarPage.vue'),
  },
];
