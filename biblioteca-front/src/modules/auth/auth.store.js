import Vue from 'vue';
import { getCookie, removeCookie, setCookie } from '@/helpers/cookies';
import { AUTH_COOKIE_NAME } from './auth.constants';

const state = Vue.observable({
  token: null,
});

export const mutations = {
  setToken(token) {
    state.token = token;
    setCookie(AUTH_COOKIE_NAME, token);
  },
  clearToken() {
    state.token = null;
    removeCookie(AUTH_COOKIE_NAME);
  },
};

export const getters = {
  getToken() {
    if (!state.token) {
      state.token = getCookie(AUTH_COOKIE_NAME);
    }
    return state.token;
  },
};
