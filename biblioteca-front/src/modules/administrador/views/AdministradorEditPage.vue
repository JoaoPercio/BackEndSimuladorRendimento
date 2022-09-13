<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-header v-if="isEditing">
        Editar Usuário
      </biblioteca-header>
      <biblioteca-header v-else>
        Criar Usuário
      </biblioteca-header>
      <biblioteca-usuario-edit-inputs @save="saveUsuario" />
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { USUARIO_ERRORS } from '@/modules/administrador/administrador.constants';
// eslint-disable-next-line import/no-cycle
import { goToOpenUsuario, goToUsuarioNotFound } from '@/modules/administrador/administrador.routes';
import { saveUsuario, getUsuario } from '@/modules/administrador/administrador.service';

import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import BibliotecaUsuarioEditInputs from '@/modules/administrador/components/AdministradorEditInputs.vue';

export default {
  name: 'BibliotecaUsuarioEditPage',
  components: {
    BibliotecaSingleContentLayout,
    BibliotecaUsuarioEditInputs,
  },
  provide() {
    const usuarioEditVm = {};
    Object.defineProperty(usuarioEditVm, 'usuario', {
      get: () => this.usuario,
    });
    return { usuarioEditVm };
  },
  data() {
    return {
      usuario: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.usuario?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchUsuario();
    } else {
      this.usuario = {};
    }
  },
  methods: {
    fetchUsuario() {
      getUsuario(this.id)
        .then(data => {
          this.usuario = data.data;
        })
        .catch(err => {
          this.livro = null;
          if (err) {
            goToUsuarioNotFound(this.$router);
          } else if ((err.response.data.errors === USUARIO_ERRORS[err.response.status] && err.response.status === 404)) {
            goToUsuarioNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o livro');
          }
        });
    },
    saveUsuario() {
      saveUsuario(this.usuario)
        .then(data => {
          goToOpenUsuario(this.$router, data || this.usuario);
        })
        .catch(() => toastError('Erro ao salvar o administrador'));
    },
  },
};
</script>
