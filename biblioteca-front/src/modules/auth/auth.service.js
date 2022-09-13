import * as authStore from '@/modules/auth/auth.store';
import * as authResource from '@/modules/auth/auth.resource';

export function passwordLogin(username, password) {
  return new Promise((resolve, reject) => authResource
    .login(username, password)
    .then(({ data }) => {
      if (!data.token) {
        reject();
      }
      authStore.mutations.setToken(data.token);
      return resolve();
    })
    .catch(err => {
      authStore.mutations.clearToken();
      return reject(err);
    }));
}

export function registrar(usuario) {
  return new Promise((resolve, reject) => authResource
    .registrar(formatarDados(usuario))
    .then(({ data }) => {
      if (!data.token) {
        reject();
      }
      authStore.mutations.setToken(data.token);
      return resolve();
    })
    .catch(err => {
      authStore.mutations.clearToken();
      return reject(err);
    }));
}

function formatarDados(info) {
  return {
    nome: info.nome,
    senha: info.senha,
    email: info.email,
  };
}
