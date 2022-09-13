<template>
  <i
    v-bind="$attrs"
    :class="classes"
    :style="styles"
    @click="onClick">
  </i>
</template>

<script>
import { sm, md, lg, xl, xxl, base } from '@/components/components.constants';
import { validator, themeValidator } from '@/components/components.validators';

const SIZES = [sm, md, lg, xl, xxl];

export default {
  name: 'BibliotecaIcon',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: md,
      validator: size => validator(size, ...SIZES),
    },
    theme: {
      type: String,
      default: base,
      validator: themeValidator,
    },
    fontSize: String,
  },
  computed: {
    classes() {
      return [
        'el-icon',
        `el-icon--${this.size}`,
        `el-icon--${this.theme}`,
        {
          [`bi-${this.icon}`]: !!this.icon,
          'el-icon--link': !!this.$listeners.click,
        },
      ];
    },
    styles() {
      return this.fontSize ? `font-size: ${this.fontSize}px` : '';
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
