<template>
  <div class="column-content">
    <div v-if="$slots.empty" class="column-content__empty d-flex direction--column align-items--center justify-content-center">
      <slot name="empty" />
    </div>
    <div v-if="$slots.avatar" class="column-content__avatar d-flex direction--column align-items--center">
      <slot name="avatar" />
    </div>
    <div v-if="$slots.name" class="column-content__bigger">
      <slot name="name" />
    </div>
    <div v-if="$slots.firstColumn" class="column-content__column d-flex direction--column align-items--center">
      <slot name="firstColumn" />
    </div>
    <div v-if="$slots.secondColumn" class="column-content__column d-flex direction--column align-items--center">
      <slot name="secondColumn" />
    </div>
    <div v-if="$slots.thirdColumn" class="column-content__column d-flex direction--column align-items--center">
      <slot name="thirdColumn" />
    </div>
    <div v-if="$slots.fourthColumn" class="column-content__column d-flex direction--column align-items--center">
      <slot name="fourthColumn" />
    </div>
    <div v-if="$slots.fifthColumn" class="column-content__column d-flex direction--column align-items--center">
      <slot name="fifthColumn" />
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

  .column-content__avatar {
    width: 40%;
    margin: 0px $margin-md;
    margin-right: $margin-lg;
  }

  .column-content__column {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: $padding-sm $padding-md;
  }
  .column-content__bigger {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 130%;
    padding: $padding-sm $padding-md;
  }
  .column-content__empty {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: $padding-sm $padding-md;
  }
}
</style>
