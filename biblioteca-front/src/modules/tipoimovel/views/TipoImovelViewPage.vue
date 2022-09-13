<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="usuario" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            {{ usuario.nome }}
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { USUARIO_ERRORS } from '@/modules/tipoimovel/tipoimovel.constants';
// eslint-disable-next-line import/no-cycle
import { goToUsuarioNotFound } from '@/modules/tipoimovel/tipoimovel.routes';
import { toastError } from '@/services/toastService';
import { getUsuario } from '@/modules/tipoimovel/tipoimovel.service';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaUsuarioViewPage',
  components: {
    BibliotecaSingleContentLayout,
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
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
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
  },
};
</script>
