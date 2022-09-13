<template>
  <el-row :gutter="20" :type="type" :align="align" :justify="justify">
    <slot />
  </el-row>
</template>

<script>
export default {
  name: 'BibliotecaRow',
  inheritAttrs: false,
  props: {
    type: String,
    align: String,
    justify: String,
  },
};
</script>
