<template>
  <div>
    <biblioteca-header size="md">Oops!</biblioteca-header>
    <biblioteca-header>Aconteceu algo de errado!</biblioteca-header>
    <biblioteca-p>Por favor, tente recarregar a página</biblioteca-p>
    <biblioteca-button class="btn btn-primary" @click="goToBasePage()">
      Retornar para a Home
    </biblioteca-button>
  </div>
</template>

<script>
import { goToBasePage } from '@/router/route.service';

export default {
  name: 'BibliotecaGenericErrorPage',
  methods: {
    goToBasePage,
  },
};
</script>
