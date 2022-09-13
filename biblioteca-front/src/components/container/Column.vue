<template>
  <el-col
    :class="classes"
    v-bind="$attrs">
    <slot />
  </el-col>
</template>

<script>
export default {
  name: 'BibliotecaCol',
  props: {
    justify: {
      type: String,
      default: 'left',
      validator(value) {
        return value && ['left', 'right', 'center'].includes(value);
      },
    },
  },
  computed: {
    classes() {
      return [`align--${this.justify}`];
    },
  },
};
</script>
