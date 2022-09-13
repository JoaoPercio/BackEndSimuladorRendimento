<template>
  <p :class="classes">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BibliotecaParagraph',
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'base',
    },
    size: {
      type: String,
      default: 'lg',
      validator(size) {
        return size && ['sm', 'md', 'lg'].includes(size);
      },
    },
    margin: {
      type: String,
      default: 'md',
      validator(value) {
        return value && ['sm', 'md', 'lg'].includes(value);
      },
    },
    weight: {
      type: String,
      default: 'regular',
      validator(value) {
        return value && ['regular', 'strong', 'strongest'].includes(value);
      },
    },
    lineLimit: Number,
  },
  computed: {
    classes() {
      return [
        'd--block',
        `fs--${this.size}`,
        `mb--${this.margin}`,
        `fw--${this.weight}`,
        `color--${this.color}`,
      ];
    },
  },
};
</script>
