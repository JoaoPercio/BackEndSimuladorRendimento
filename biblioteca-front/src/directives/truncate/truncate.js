import Vue from 'vue';

Vue.directive('truncate', {
  inserted(el, binding) {
    el.classList.add(`text-overflow--truncate-${binding.value || 1}`);
  },
});
