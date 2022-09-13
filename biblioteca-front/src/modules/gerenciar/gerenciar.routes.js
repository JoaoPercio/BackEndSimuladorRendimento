import { GERENCIAR_URL } from '@/modules/gerenciar/gerenciar.constants';

export default [
  {
    ...GERENCIAR_URL.imoveis,
    component: () => import('@/modules/gerenciar/views/GerenciarImoveis.vue'),
  },
  {
    ...GERENCIAR_URL.tipos,
    component: () => import('@/modules/gerenciar/views/GerenciarTipos.vue'),
  },
  {
    ...GERENCIAR_URL.administradores,
    component: () => import('@/modules/gerenciar/views/GerenciarAdministradores.vue'),
  },
];

export function goToLivros($router) {
  $router.push({
    name: GERENCIAR_URL.imoveis.name,
  });
}

export function goToEmprestimos($router) {
  $router.push({
    name: GERENCIAR_URL.emprestimos.name,
  });
}

export function goToUsuarios($router) {
  $router.push({
    name: GERENCIAR_URL.tipos.name,
  });
}
export function goToAdministradores($router) {
  $router.push({
    name: GERENCIAR_URL.administradores.name,
  });
}
