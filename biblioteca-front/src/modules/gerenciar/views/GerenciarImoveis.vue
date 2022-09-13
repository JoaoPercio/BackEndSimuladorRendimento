<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <biblioteca-header>Imoveis</biblioteca-header>
        <biblioteca-button @click="onCreateLivro">
          Adicionar Imovel
        </biblioteca-button>
      </div>
      <table v-if="livroList && livroList.length > 0" class="table">
        <tbody>
          <tr v-for="livro in livroList" :key="livro.id">
            <td class="py-3 px-2">
              <biblioteca-header size="sm" class="d-flex align-item--center">
                <biblioteca-livro-link :id="livro.id">
                  {{ livro.titulo }}
                </biblioteca-livro-link>
              </biblioteca-header>
              <biblioteca-p color="regular">
                {{ livro.descricao }}
              </biblioteca-p>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <biblioteca-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <biblioteca-livro-link
                      :id="livro.id"
                      action="edit">
                      <biblioteca-icon size="sm" icon="pencil" />
                      Editar
                    </biblioteca-livro-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteLivro(livro)">
                      <biblioteca-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <biblioteca-modal-delete
                v-if="showModal(livro)"
                content="Você realmente deseja excluir o imovel?"
                @close="setDeleteLivro(null)"
                @confirm="onDeleteLivro(livro)">
              </biblioteca-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <biblioteca-p v-else class="opacity--50 my--lg">( Sem Imoveis )</biblioteca-p>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchLivros, removeLivro } from '@/modules/imovel/imovel.service';
import { goToCreateLivro } from '@/modules/imovel/imovel.routes';

import BibliotecaLivroLink from '@/modules/imovel/components/ImovelLink.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaGerenciarLivros',
  components: {
    BibliotecaLivroLink,
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      livroList: [],
      livroDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.livroList = [];
      fetchLivros()
        .then(data => {
          this.livroList = data.data;
        })
        .catch(() => {
          this.livroList = [];
        });
    },
    onCreateLivro() {
      goToCreateLivro(this.$router);
    },
    setDeleteLivro(livro) {
      this.livroDelete = livro;
    },
    showModal(livro) {
      return this.livroDelete && this.livroDelete.id === livro.id;
    },
    onDeleteLivro(livro) {
      removeLivro(livro)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir o imovel'));
    },
  },
};
</script>
