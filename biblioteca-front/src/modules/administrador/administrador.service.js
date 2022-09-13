import * as usuarioResource from '@/modules/administrador/administrador.resource';

export function fetchAdministradores() {
  return new Promise((resolve, reject) =>
    usuarioResource
      .fetchAdministradores()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getUsuario(id) {
  return new Promise((resolve, reject) =>
    usuarioResource
      .getUsuario(id)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveUsuario(usuario) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getUsuarioSaveAction(usuario)(usuario)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function createUsuario(usuario) {
  return new Promise((resolve, reject) =>
    usuarioResource
      .createUsuario(usuario)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function updateUsuario(usuario) {
  return new Promise((resolve, reject) =>
    usuarioResource
      .updateUsuario(usuario)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function removeUsuario(usuario) {
  return new Promise((resolve, reject) =>
    usuarioResource
      .removeUsuario(usuario)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

function getUsuarioSaveAction(usuario) {
  return usuario.id ? usuarioResource.updateUsuario : usuarioResource.createUsuario;
}
