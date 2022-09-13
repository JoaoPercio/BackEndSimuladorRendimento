<template>
  <router-link :to="to" :target="target">
    <slot />
  </router-link>
</template>
<script>
import { USUARIOS_URL } from '@/modules/administrador/administrador.constants';

export default {
  name: 'BibliotecaUsuarioLink',
  props: {
    id: {
      type: Number,
      required: true,
    },
    target: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: 'view',
      validator(action) {
        return action && ['view', 'edit'].includes(action);
      },
    },
  },
  computed: {
    to() {
      return {
        name: USUARIOS_URL[this.action].name,
        path: USUARIOS_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
