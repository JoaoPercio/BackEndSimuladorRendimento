<template>
  <div>
    <div v-if="livros.length > 1">
      <div v-if="showLabel">
        Livro*
      </div>
      <biblioteca-select
        v-bind="$attrs"
        name="livro"
        rules="required"
        :class="showLabel ? 'mt--md' : ''"
        @on-change="onChange">
        <option :value="null" disabled>Selecione um livro...</option>
        <option
          v-for="livro in livros"
          :key="livro.id"
          :value="livro.id">
          {{ livro.titulo }}
        </option>
      </biblioteca-select>
    </div>
    <div v-else class="mb-3 mt-4">
      <biblioteca-p color="danger">
        *Você não possui livros cadastrados
        <biblioteca-button @click="onCreate">
          Criar Livro
        </biblioteca-button>
      </biblioteca-p>
    </div>
  </div>
</template>

<script>
import { fetchLivros } from '@/modules/imovel/imovel.service';
import { goToCreateLivro } from '@/modules/imovel/imovel.routes';

export default {
  name: 'BibliotecaLivroSelect',
  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    isFilter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      livros: [],
    };
  },
  created() {
    this.onfetch();
  },
  methods: {
    onfetch() {
      fetchLivros()
        .then(data => {
          this.livros = data.data;
        })
        .catch(() => {
          this.livros = null;
        });
    },
    onChange(id) {
      this.$emit('on-change', { id });
    },
    onCreate() {
      goToCreateLivro(this.$router);
    },
  },
};
</script>
