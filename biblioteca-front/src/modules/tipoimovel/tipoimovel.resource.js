import { get, put, post, remove } from '@/helpers/http';

const BASE_PATH = 'tipos-imoveis';

export function fetchUsuarios() {
  return get(`${BASE_PATH}`);
}

export function getUsuario(id) {
  return get(`/${BASE_PATH}/${id}`);
}

export function updateUsuario(usuario) {
  return put(`/${BASE_PATH}/${usuario.id}`, usuario);
}

export function createUsuario(usuario) {
  return post(`${BASE_PATH}`, usuario);
}

export function removeUsuario(usuario) {
  return remove(`/${BASE_PATH}/${usuario.id}`);
}
