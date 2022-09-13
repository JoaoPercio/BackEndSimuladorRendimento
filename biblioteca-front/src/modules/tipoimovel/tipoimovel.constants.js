export const USUARIOS_URL = Object.freeze({
  path: '/tiposimoveis',
  view: {
    name: 'usuario.view',
    path: '/tiposimoveis/ver/:id',
  },
  edit: {
    name: 'usuario.edit',
    path: '/tiposimoveis/editar/:id',
  },
  create: {
    name: 'usuario.create',
    path: '/tiposimoveis/criar',
  },
  notfound: {
    name: 'usuario.notfound',
    path: '/tiposimoveis/nao-encontrado',
  },
});

export const USUARIO_ERRORS = {
  404: 'USUARIO_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
