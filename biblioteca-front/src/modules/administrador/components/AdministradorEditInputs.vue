<template>
  <div>
    <biblioteca-form v-if="usuarioEditVm.usuario" v-slot="{ validate }" :submit="validateUsuario">
      <div class="form-field mt-4">
        <biblioteca-input
          v-model="usuarioEditVm.usuario.nome"
          label="Nome*"
          name="nome"
          type="text"
          rules="required|min:2"
          placeholder="Nome" />
      </div>
      <div class="form-field">
        <biblioteca-input
          v-model="usuarioEditVm.usuario.email"
          label="E-mail*"
          name="e-mail"
          type="email"
          rules="required"
          placeholder="E-mail" />
      </div>
      <biblioteca-header v-if="usuarioEditVm.usuario.id" size="md">
        Informe a senha para alterar:
      </biblioteca-header>
      <div v-if="!usuarioEditVm.usuario.id" class="form-field">
        <biblioteca-input
          v-model="senha"
          label="Senha*"
          name="senha"
          type="password"
          rules="required|min:6"
          placeholder="Senha" />
      </div>
      <div v-if="!usuarioEditVm.usuario.id" class="form-field">
        <biblioteca-input
          v-model="confirmar_senha"
          label="Confirmar senha*"
          name="confirmar senha"
          type="password"
          rules="required|min:6"
          placeholder="Confirmar senha" />
      </div>
      <div v-if="usuarioEditVm.usuario.id" class="form-field">
        <biblioteca-input
          v-model="senha"
          label="Senha*"
          name="senha"
          type="password"
          rules="min:6"
          placeholder="Senha" />
      </div>
      <div v-if="usuarioEditVm.usuario.id" class="form-field">
        <biblioteca-input
          v-model="confirmar_senha"
          label="Confirmar senha*"
          name="confirmar senha"
          type="password"
          rules="min:6"
          placeholder="Confirmar senha" />
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
          size="sm"
          @click="validate">
          <a v-if="usuarioEditVm.usuario.id">Editar</a>
          <a v-else>Adicionar</a>
        </biblioteca-button>
      </div>
    </biblioteca-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';
import { toastError } from '@/services/toastService';

export default {
  name: 'BibliotecaUsuarioEdit',
  inject: ['usuarioEditVm'],
  data() {
    return {
      senha: null,
      confirmar_senha: null,
    };
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
    validateUsuario() {
      if (this.senha) {
        this.usuarioEditVm.usuario.senha = this.senha;
        const specialChars = !!(this.usuarioEditVm.usuario.senha.match(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/) && this.usuarioEditVm.usuario.senha.match(/\d+/));

        if (!specialChars) {
          toastError('A senha deve conter caracteres especiais e números');
        } else if (this.usuarioEditVm.usuario.senha !== this.confirmar_senha) {
          toastError('As senhas não são iguais');
        } else {
          this.save();
        }
      } else {
        this.save();
      }
    },
  },
};
</script>
