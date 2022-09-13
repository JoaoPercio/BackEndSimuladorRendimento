import { get, post, put, remove } from '@/helpers/http';

const BASE_PATH = 'imoveis';

export function fetchLivros() {
  return get(`${BASE_PATH}`);
}

export function getLivro(imovelId) {
  return get(`${BASE_PATH}/${imovelId}`);
}

export function createLivro(imovel) {
  return post(`${BASE_PATH}`, { ...imovel });
}

export function updateLivro(imovel) {
  return put(`${BASE_PATH}/${imovel.id}`, imovel);
}

export function removeLivro(id) {
  return remove(`${BASE_PATH}/${id}`);
}
