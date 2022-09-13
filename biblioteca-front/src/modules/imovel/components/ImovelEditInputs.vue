<template>
  <div>
    <biblioteca-form v-if="livroEditVm.livro" :submit="save">
      <div class="form-field mt-4">
        <biblioteca-input
          v-model="livroEditVm.livro.titulo"
          label="Título*"
          name="titulo"
          type="text"
          rules="required|min:2"
          placeholder="Título" />
      </div>
      <div class="form-field">
        <biblioteca-textarea
          v-model="livroEditVm.livro.descricao"
          label="Descriçao*"
          name="resumo"
          type="text"
          rules="required"
          placeholder="Descrição" />
      </div>
      <div class="form-field">
        <biblioteca-input
          v-model="livroEditVm.livro.valor"
          label="Valor*"
          name="resumo"
          type="text"
          rules="required"
          placeholder="Valor" />
      </div>
      <div class="form-field mt-4">
        <biblioteca-usuario-select
          ref="usuarioSelect"
          @on-change="onUsuarioChange" />
      </div>
      <div class="mt-4 mb-3 d--flex justify-content-end">
        <biblioteca-button
          class="btn btn-secondary"
          width="110"
          size="sm"
          @click="goHistoryBack()">
          Cancelar
        </biblioteca-button>
        <biblioteca-button
          native-type="submit"
          class="btn btn-success ms-2"
          width="110"
          size="sm">
          <a v-if="livroEditVm.livro.id">Editar</a>
          <a v-else>Adicionar</a>
        </biblioteca-button>
      </div>
    </biblioteca-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';

import BibliotecaUsuarioSelect from '@/modules/tipoimovel/components/TipoImovelSelect.vue';

export default {
  name: 'BibliotecaLivroEdit',
  components: {
    BibliotecaUsuarioSelect,
  },
  inject: ['livroEditVm'],
  data() {
    return {
    };
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
    onUsuarioChange(usuario) {
      this.livroEditVm.livro.tipoImovel = usuario;
    },
  },
};
</script>
