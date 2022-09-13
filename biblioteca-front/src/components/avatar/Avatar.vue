<template>
  <el-avatar
    :icon="icon"
    :src="source"
    :class="classes"
    shape="circle" />
</template>

<script>
import { validator } from '@/components/components.validators';
import { sm, md, lg } from '@/components/components.constants';

const EMPTY_ICON = 'el-icon-user-solid';

export default {
  name: 'BibliotecaAvatar',
  props: {
    source: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: md,
      validator: size => validator(size, sm, md, lg),
    },
    icon: {
      type: String,
      default: EMPTY_ICON,
    },
  },
  computed: {
    sizes() {
      return [sm, md, lg][this.size];
    },
    classes() {
      return [`el-avatar--${this.size}`];
    },
  },
};
</script>
