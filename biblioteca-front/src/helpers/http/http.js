import axios from 'axios';
import * as authStore from '@/modules/auth/auth.store';
import * as errorStore from '@/modules/error/error.store';
import { goToLoginPage } from '@/router/route.service';
import { removeCookie } from '@/helpers/cookies';
import { AUTH_COOKIE_NAME } from '@/modules/auth/auth.constants';

const token = authStore.getters.getToken();

const defaultHeaders = {
  accept: 'application/json',
  'Content-Type': 'application/json',
};

const prefixBaseUrl = () => {
  if (['localhost', '127.0.0.1'].includes(window.location.hostname)) return '';
  return 'https://api.biblioteca.com.br';
};

if (token) {
  defaultHeaders.Authorization = `Bearer ${token}`;
}

const client = axios.create({
  headers: defaultHeaders,
  baseURL: `${prefixBaseUrl()}/api/`,
  withCredentials: true,
});

client.interceptors.response.use(
  response => {
    errorStore.mutations.clearError();
    return response;
  },
  error => {
    const { response } = error;
    if (([401, 403].includes(response.status) && response.data.errors !== 'PERMISSION_DENIED' && response.data.errors !== 'FORBIDDEN')) {
      errorStore.mutations.setError(response.data.code);
      removeCookie(AUTH_COOKIE_NAME);
      return Promise.reject(goToLoginPage());
    }
    removeCookie(AUTH_COOKIE_NAME);
    return Promise.reject(error);
  },
);

export function get(url, params = {}, headers = {}) {
  return client.request({ url, params, headers, method: 'GET' });
}

export function post(url, data, headers = {}) {
  return client.request({ url, data, headers, method: 'POST' });
}

export function put(url, data, headers = {}) {
  return client.request({ url, data, headers, method: 'PUT' });
}

export function remove(url, params = {}, headers = {}) {
  return client.request({ url, params, headers, method: 'DELETE' });
}

export function patch(url, params = {}, headers = {}) {
  return client.request({ url, params, headers, method: 'PATCH' });
}
