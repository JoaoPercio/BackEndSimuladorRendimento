<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="usuario" #content>
      <div class="container mt-2" style="border: 3px solid #5274d8; border-radius: 15px;box-shadow: 20px">
        <biblioteca-row class="d-flex align-items-center">
          <biblioteca-col>
            <biblioteca-header style="color: #5274d8">
              {{ usuario.nome }}
            </biblioteca-header>
            <biblioteca-p> <span style="color: #4562ba; font-weight: 800;">Valor de entrada:</span> R$ {{ usuario.entrada }} </biblioteca-p>
            <biblioteca-p> <span style="color: #4562ba; font-weight: 800;">Valor Estimado: </span> R${{ usuario.valorEstimado }} </biblioteca-p>
            <biblioteca-p> <span style="color: #4562ba; font-weight: 800;">Tempo Para concluir objetivo: </span> {{ usuario.tempo }}  meses</biblioteca-p>
            <biblioteca-p> <span style="color: #4562ba; font-weight: 800;">Quantidade mensal a ser investida:</span> R$ {{ usuario.resultado }}</biblioteca-p>
            <biblioteca-header style="color: #5274d8">
              Investimento
            </biblioteca-header>
            <biblioteca-livro-link :id="usuario.investimento.id" target="_blank" style="text-decoration: none;">
              <span style="color: #4562ba; font-weight: 800;"> Investimento: </span> {{ usuario.investimento.nome }}⠀⠀⠀
            </biblioteca-livro-link>
            <biblioteca-livro-link :id="usuario.investimento.id" target="_blank" style="text-decoration: none;">
              <span style="color: #4562ba; font-weight: 800;">risco: </span>{{ usuario.investimento.risco }}⠀⠀⠀
            </biblioteca-livro-link>
            <biblioteca-livro-link :id="usuario.investimento.id" target="_blank" style="text-decoration: none;">
              <span style="color: #4562ba; font-weight: 800;"> rentabilidade: </span> {{ usuario.investimento.rentabilidade }} %
            </biblioteca-livro-link>
          </biblioteca-col>
        </biblioteca-row>
      </div>
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
import BibliotecaLivroLink from '@/modules/imovel/components/ImovelLink.vue';

export default {
  name: 'BibliotecaUsuarioViewPage',
  components: {
    BibliotecaLivroLink,
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
