export const USUARIOS_URL = Object.freeze({
  path: '/administradores',
  view: {
    name: 'administrador.view',
    path: '/administradores/ver/:id',
  },
  edit: {
    name: 'administrador.edit',
    path: '/administradores/editar/:id',
  },
  create: {
    name: 'administrador.create',
    path: '/administradores/criar',
  },
  notfound: {
    name: 'administrador.notfound',
    path: '/administradores/nao-encontrado',
  },
});

export const USUARIO_ERRORS = {
  404: 'USUARIO_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
