<template>
  <div>
    <div v-if="usuarios.length > 1">
      <div v-if="showLabel">
        Tipo de Imovel*
      </div>
      <biblioteca-select
        v-bind="$attrs"
        name="usuário"
        rules="required"
        :class="showLabel ? 'mt--md' : ''"
        @on-change="onChange">
        <option :value="null" disabled>Selecione um tipo de imovel...</option>
        <option
          v-for="usuario in usuarios"
          :key="usuario.id"
          :value="usuario.id">
          {{ usuario.nome }}
        </option>
      </biblioteca-select>
    </div>
    <div v-else class="mb-3 mt-4">
      <biblioteca-p color="danger">
        *Você não possui tipos de imoveis cadastrados
        <biblioteca-button @click="onCreate">
          Criar tipo de imovel
        </biblioteca-button>
      </biblioteca-p>
    </div>
  </div>
</template>

<script>
import { fetchUsuarios } from '@/modules/tipoimovel/tipoimovel.service';
import { goToCreateUsuario } from '@/modules/tipoimovel/tipoimovel.routes';

export default {
  name: 'BibliotecaUsuarioSelect',
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
      usuarios: [],
    };
  },
  created() {
    this.onfetch();
  },
  methods: {
    onfetch() {
      fetchUsuarios()
        .then(data => {
          this.usuarios = data.data;
        })
        .catch(() => {
          this.usuarios = null;
        });
    },
    onChange(id) {
      this.$emit('on-change', { id });
    },
    onCreate() {
      goToCreateUsuario(this.$router);
    },
  },
};
</script>
