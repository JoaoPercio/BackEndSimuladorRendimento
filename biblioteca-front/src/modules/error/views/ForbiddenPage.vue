<template>
  <div class="py--xl">
    <biblioteca-header>Permissão Negada</biblioteca-header>
    <p>
      Você não tem acesso a essa página
      <br />
      Sessão expirada
    </p>
    <biblioteca-button class="btn btn-primary" @click="goToLoginPage()">
      Retornar para o Login
    </biblioteca-button>
  </div>
</template>

<script>
import { goToLoginPage } from '@/router/route.service';

export default {
  name: 'BibliotecaForbiddenPage',
  methods: {
    goToLoginPage,
  },
};
</script>
