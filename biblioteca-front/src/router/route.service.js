import { HOME_URL } from '@/modules/home/home.constants';
import { AUTH_URL } from '@/modules/auth/auth.constants';
import { ERRORS_URL } from '@/modules/error/error.constants';

export function createEmptyComponent(controller) {
  return controller('router-view');
}

function redirectByRouter($router, path) {
  if ($router) {
    $router.push(path);
    return;
  }
  window.location = path;
}

export function goHistoryBack($router) {
  if ($router) {
    $router.go(-1);
    return;
  }
  window.history.back();
}

export function goToBasePage($router) {
  redirectByRouter($router, `${HOME_URL.path}`);
}

export function goToLoginPage($router) {
  redirectByRouter($router, `${AUTH_URL.login.path}`);
}

export function goToForbiddenPage($router) {
  redirectByRouter($router, `${ERRORS_URL.forbidden.path}`);
}

export function goToErrorPage($router) {
  redirectByRouter($router, `${ERRORS_URL.generic.path}`);
}
