<template>
  <biblioteca-row>
    <biblioteca-col
      :sm="4"
      :md="2">
      <biblioteca-icon
        class="mt-2"
        size="xl"
        icon="building" />
    </biblioteca-col>
    <biblioteca-col
      :sm="20"
      :md="22">
      <biblioteca-header v-truncate size="sm">
        <biblioteca-usuario-link :id="usuario.id">{{ usuario.nome }}</biblioteca-usuario-link>
      </biblioteca-header>
    </biblioteca-col>
  </biblioteca-row>
</template>

<script>
import BibliotecaUsuarioLink from '@/modules/tipoimovel/components/TipoImovelLink.vue';

export default {
  name: 'TipoCard',
  components: {
    BibliotecaUsuarioLink,
  },
  props: {
    usuario: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>
