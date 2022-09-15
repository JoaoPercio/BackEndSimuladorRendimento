<template>
  <biblioteca-navbar style="background-color: #daecec !important">
    <template #right>
      <div class="d-flex align-items--center">
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onHome">
          Simular Objetivo
        </biblioteca-button>
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onUsuarios">
          Histórico de Objetivos
        </biblioteca-button>
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onLogout">
          Sair
        </biblioteca-button>
      </div>
    </template>
  </biblioteca-navbar>
</template>

<script>
import { removeCookie } from '@/helpers/cookies/cookie';
import { goToLoginPage, goToBasePage } from '@/router/route.service';
import { goToLivros, goToUsuarios, goToAdministradores } from '@/modules/gerenciar/gerenciar.routes';

export default {
  name: 'BibliotecaTopbar',
  data() {
    return {
    };
  },
  methods: {
    removeCookie,
    onLogout() {
      removeCookie('session_id');
      goToLoginPage();
    },
    onLivros() {
      goToLivros(this.$router);
    },
    onUsuarios() {
      goToUsuarios(this.$router);
    },
    onAdministradores() {
      goToAdministradores(this.$router);
    },
    onHome() {
      goToBasePage(this.$router);
    },
  },
};
</script>
