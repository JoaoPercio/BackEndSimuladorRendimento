<template>
  <div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>

export default {
  name: 'BibliotecaApp',
  methods: {
  },
};
</script>

<style lang="scss">
@import '@/scss/app';
</style>
