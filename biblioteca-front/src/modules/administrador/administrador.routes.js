import { USUARIOS_URL } from '@/modules/administrador/administrador.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: USUARIOS_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...USUARIOS_URL.view,
        component: () => import('@/modules/administrador/views/AdministradorViewPage.vue'),
      },
      {
        ...USUARIOS_URL.edit,
        component: () => import('@/modules/administrador/views/AdministradorEditPage.vue'),
      },
      {
        ...USUARIOS_URL.create,
        component: () => import('@/modules/administrador/views/AdministradorEditPage.vue'),
      },
      {
        ...USUARIOS_URL.notfound,
        component: () => import('@/modules/administrador/views/AdministradorNotFound.vue'),
      },
    ],
  },
];

export function goToUsuarioNotFound($router) {
  $router.push({
    name: USUARIOS_URL.notfound.name,
  });
}

export function goToOpenUsuario($router, usuario) {
  $router.push({
    name: USUARIOS_URL.view.name,
    params: { id: usuario.id },
  });
}

export function goToCreateUsuario($router) {
  $router.push({
    name: USUARIOS_URL.create.name,
  });
}
