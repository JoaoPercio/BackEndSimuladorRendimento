import Vue from 'vue';

const state = Vue.observable({
  usuario: null,
});

export const mutations = {
  setUsuario(usuario) {
    state.usuario = usuario;
  },
};

export const getters = {
  getUsuario() {
    return state.usuario;
  },
};
