<template>
  <el-pagination
    :background="background"
    :small="small"
    :total="total"
    :page-size="pageSize"
    :current-page.sync="localPage"
    layout="prev, pager, next"
    :hide-on-single-page="true"
    v-on="$listeners" />
</template>

<script>
export default {
  name: 'BibliotecaPagination',
  inheritAttrs: false,
  props: {
    page: Number,
    pageSize: {
      type: Number,
      default: 10,
    },
    total: Number,
    small: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localPage: this.page,
    };
  },
  watch: {
    localPage(page) {
      if (this.page !== page) {
        this.$emit('update:page', page);
      }
    },
  },
};
</script>

<style>
  .el-pagination.is-background .btn-next, .btn-prev, .el-pagination.is-background .btn-next {
    background-color: transparent !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    border-radius: 30px;
  }
</style>
