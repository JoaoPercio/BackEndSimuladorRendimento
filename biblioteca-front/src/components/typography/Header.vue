<template>
  <div :class="getClasses">
    <slot />
  </div>
</template>

<script>
import { sm, md, lg } from '@/components/components.constants';
import { validator } from '@/components/components.validators';

const SIZES = [sm, md, lg];

export default {
  name: 'BibliotecaHeader',
  props: {
    size: {
      type: String,
      default: lg,
      validator: size => validator(size, ...SIZES),
    },
  },
  computed: {
    getClasses() {
      return [
        'biblioteca-header',
        `biblioteca-header--${this.size}`,
      ];
    },
  },
};
</script>
