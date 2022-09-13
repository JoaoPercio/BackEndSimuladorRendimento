<template>
  <biblioteca-row>
    <biblioteca-col
      :sm="4"
      :md="2">
      <biblioteca-icon
        class="mt-2"
        size="xl"
        icon="person" />
    </biblioteca-col>
    <biblioteca-col
      :sm="20"
      :md="22">
      <biblioteca-header v-truncate size="sm">
        <biblioteca-usuario-link :id="usuario.id">{{ usuario.nome }}</biblioteca-usuario-link>
      </biblioteca-header>
      <biblioteca-p
        v-truncate="2"
        color="regular">
        {{ usuario.email }}
      </biblioteca-p>
    </biblioteca-col>
  </biblioteca-row>
</template>

<script>
import BibliotecaUsuarioLink from '@/modules/administrador/components/AdministradorLink.vue';

export default {
  name: 'UsuarioCard',
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
