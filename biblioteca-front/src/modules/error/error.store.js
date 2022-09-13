import Vue from 'vue';
import { getCookie, removeCookie, setCookie } from '@/helpers/cookies';

const ERROR_COOKIE = 'error';

const state = Vue.observable({
  error: null,
});

export const mutations = {
  clearError() {
    state.error = null;
    removeCookie(ERROR_COOKIE);
  },
  setError(errorCode) {
    state.error = errorCode;
    setCookie(ERROR_COOKIE, errorCode);
  },
};

export const getters = {
  getError() {
    if (!state.error) {
      mutations.setError(getCookie(ERROR_COOKIE));
    }
    return state.error;
  },
};
