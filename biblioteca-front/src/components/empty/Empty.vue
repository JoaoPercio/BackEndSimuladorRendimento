<template>
  <div class="d--flex direction--column align-items--center mt--xl">
    <biblioteca-icon :icon="icon" :size="iconSize" class="opacity--50 mx--lg" />
    <biblioteca-p v-if="description" size="md" class="opacity--50 m--lg">{{ description }}</biblioteca-p>
    <div v-if="$slots.footer" class="m--lg">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BibliotecaEmpty',
  props: {
    icon: {
      type: String,
      default: 'box',
    },
    iconSize: {
      type: String,
      default: 'xl',
    },
    description: {
      type: String,
      default: 'No data to be displayed!',
    },
  },
};
</script>
