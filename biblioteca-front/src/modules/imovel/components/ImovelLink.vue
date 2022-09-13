<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>
<script>
import { LIVROS_URL } from '@/modules/imovel/imovel.constants';

export default {
  name: 'BibliotecaLivroLink',
  props: {
    id: {
      type: Number,
      required: true,
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
        name: LIVROS_URL[this.action].name,
        path: LIVROS_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
