<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BibliotecaContainer',
  inheritAttrs: false,
  props: {
    size: String,
  },
  computed: {
    classes() {
      return [
        'biblioteca-container', {
          [`biblioteca-container--${this.size}`]: !!this.size,
        },
      ];
    },
  },
};
</script>
