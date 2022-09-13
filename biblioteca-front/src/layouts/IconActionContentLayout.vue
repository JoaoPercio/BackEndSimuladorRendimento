<template>
  <div class="column-content">
    <div v-if="$slots.icon" class="column-content__icon">
      <slot name="icon" />
    </div>
    <div class="column-content__main">
      <slot name="main" />
    </div>
    <div v-if="$slots.action" class="column-content__action">
      <slot name="action" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/scss/variables/margins';
@import '@/scss/variables/paddings';

.column-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .column-content__icon, .column-content__action {
    margin: $margin-sm $margin-md;
  }

  .column-content__main {
    width: 100%;
    padding: $padding-sm $padding-md;
  }
}
</style>
