<template>
  <el-container>
    <el-header>
      <biblioteca-topbar />
    </el-header>
    <el-main>
      <biblioteca-container :size="containerSize">
        <div class="biblioteca-aside-content-layout">
          <div class="biblioteca-aside-content-layout__sidebar">
            <slot name="aside" />
          </div>
          <div class="biblioteca-aside-content-layout__content">
            <slot name="content" />
          </div>
        </div>
      </biblioteca-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'BibliotecaAsideContentLayout',
  props: {
    containerSize: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables/colors';
@import '@/scss/variables/margins';
@import '@/scss/variables/paddings';
@import '@/scss/bootstrap/container';
@import '@/scss/bootstrap/mixins';

.biblioteca-aside-content-layout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @include media-breakpoint-down(md) {
    flex-direction: column;
  }

  .biblioteca-aside-content-layout__sidebar {
    top: 0;
    order: 1;
    width: 560px;
    position: sticky;
    position: -webkit-sticky;
    padding: $padding-xl $padding-xl 0 0;

    @include media-breakpoint-down(lg) {
      width: 460px;
    }

    @include media-breakpoint-down(md) {
      order: 2;
      width: 100%;
      width: auto;
      border-right: 0;
      padding: $padding-md;
    }
  }

  .biblioteca-aside-content-layout__content {
    order: 2;
    width: 100%;
    min-height: 95vh;
    padding: $padding-xl 0 0 $padding-xl;
    border-left: 1px solid $border-light-color;

    @include media-breakpoint-down(md) {
      order: 1;
      padding: $padding-md;
    }
  }
}
</style>
