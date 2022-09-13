import { ERRORS_URL } from '@/modules/error/error.constants';

export default [
  {
    path: ERRORS_URL.path,
    component: () => import('@/modules/error/components/ErrorLayout.vue'),
    children: [
      {
        ...ERRORS_URL.generic,
        component: () => import('@/modules/error/views/GenericErrorPage.vue'),
      },
      {
        ...ERRORS_URL.forbidden,
        component: () => import('@/modules/error/views/ForbiddenPage.vue'),
      },
    ],
  },
];
