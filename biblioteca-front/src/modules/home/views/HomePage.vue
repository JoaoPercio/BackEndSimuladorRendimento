<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-home-tabs />
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import BibliotecaHomeTabs from '@/modules/home/components/HomeTabs.vue';

export default {
  name: 'BibliotecaHomeLayout',
  components: {
    BibliotecaSingleContentLayout,
    BibliotecaHomeTabs,
  },
};
</script>
