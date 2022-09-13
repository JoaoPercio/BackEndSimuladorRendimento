<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="livro" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            {{ livro.titulo }}
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            Descrição: {{ livro.descricao }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            valor: {{ livro.valor }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            Data de criação: {{ formatarData(livro.dataCriacao) }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            <biblioteca-usuario-link :id="livro.tipoImovel.id" target="_blank">
              Tipo Imovel: {{ livro.tipoImovel.nome }}
            </biblioteca-usuario-link>
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import moment from 'moment';

import { LIVRO_ERRORS } from '@/modules/imovel/imovel.constants';
import { getLivro } from '@/modules/imovel/imovel.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToLivroNotFound } from '@/modules/imovel/imovel.routes';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import BibliotecaUsuarioLink from '@/modules/tipoimovel/components/TipoImovelLink.vue';

export default {
  name: 'LivroViewPage',
  components: {
    BibliotecaUsuarioLink,
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      livro: null,
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
      getLivro(this.id)
        .then(({ data }) => {
          this.livro = data;
        })
        .catch(err => {
          this.livro = null;
          if (err) {
            goToLivroNotFound(this.$router);
          } else if ((err.response.data.errors === LIVRO_ERRORS[err.response.status] && err.response.status === 404)) {
            goToLivroNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o imovel');
          }
        });
    },
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>
