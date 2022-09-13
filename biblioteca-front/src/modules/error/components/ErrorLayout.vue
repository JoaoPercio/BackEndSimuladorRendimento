<template>
  <biblioteca-container class="d-flex justify-content-center align-items-center h-100">
    <div class="text-center h-50">
      <router-view :key="$route.path"></router-view>
    </div>
  </biblioteca-container>
</template>

<script>
import { goToBasePage } from '@/router/route.service';
import * as errorStore from '@/modules/error/error.store';
import { getErrorDescription } from '@/modules/error/error.service';

export default {
  name: 'BibliotecaErrorLayout',
  beforeRouteEnter(to, from, next) {
    if (errorStore.getters.getError()) {
      return next();
    }
    return goToBasePage();
  },
  computed: {
    description() {
      return getErrorDescription(errorStore.getters.getError());
    },
  },
  beforeDestroy() {
    errorStore.mutations.clearError();
  },
};
</script>
