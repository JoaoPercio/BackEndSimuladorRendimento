<template>
  <biblioteca-navbar style="background-color: #daecec !important">
    <template #right>
      <div class="d-flex align-items--center">
<<<<<<< Updated upstream
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onLivros">
          Imoveis
        </biblioteca-button>
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onAdministradores">
          Administradores
        </biblioteca-button>
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onUsuarios">
          Tipos de Imoveis
=======
        <biblioteca-button style="border-radius: 0; border: none; background-color: #daecec !important;" @click="onUsuarios">
          Historico
>>>>>>> Stashed changes
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
import { goToLoginPage } from '@/router/route.service';
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
  },
};
</script>
