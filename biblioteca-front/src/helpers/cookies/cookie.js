import Cookies from 'js-cookie';

const DEFAULT_PATH = '/';

export function getCookie(name) {
  return Cookies.get(name);
}

export function getAllCookies() {
  return Cookies.get();
}

export function setCookie(name, value, expires, path) {
  Cookies.set(name, value, {
    expires: expires || 7,
    path: path || DEFAULT_PATH,
  });
}

export function removeCookie(name, path) {
  Cookies.remove(name, { path: path || DEFAULT_PATH });
}
