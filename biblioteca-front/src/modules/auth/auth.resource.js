import { post } from '@/helpers/http';

export function login(username, password) {
  return post('/authenticate', { username, password });
}

export function registrar(usuario) {
  return post('/investidores/criar', usuario);
}
