<template>
  <el-button
    round
    :type="theme"
    :plain="plain"
    :icon="getIcon"
    :circle="hasIcon"
    :class="getClasses"
    :style="getStyles"
    :disabled="disabled"
    :native-type="nativeType"
    v-on="$listeners">
    <slot />
  </el-button>
</template>

<script>
import { xs, sm, md, lg, base } from '@/components/components.constants';
import { validator, themeValidator } from '@/components/components.validators';

const SIZES = [xs, sm, md, lg];
const NATIVE_TYPES = ['button', 'submit', 'reset'];

export default {
  name: 'BibliotecaButton',
  inheritAttrs: false,
  props: {
    plain: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: base,
      validator: themeValidator,
    },
    size: {
      type: String,
      default: md,
      validator: size => validator(size, ...SIZES),
    },
    nativeType: {
      type: String,
      default: NATIVE_TYPES[0],
      validator: type => validator(type, ...NATIVE_TYPES),
    },
    width: String,
    icon: String,
    disabled: Boolean,
  },
  computed: {
    getIcon() {
      return this.icon ? `bi-${this.icon}` : '';
    },
    hasIcon() {
      return !!this.icon;
    },
    getSize() {
      return SIZES[this.size];
    },
    getClasses() {
      return [`el-button--${this.size}`];
    },
    getStyles() {
      return [{
        width: this.width ? `${this.width}px` : '',
      }];
    },
  },
};

</script>
