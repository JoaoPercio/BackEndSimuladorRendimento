<template>
  <validation-observer v-slot="{ handleSubmit, validate, reset }">
    <form
      novalidate
      @submit.prevent="handleSubmit(submitForm)">
      <slot :validate="validate" :reset="reset" />
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'BibliotecaFormValidate',
  inheritAttrs: false,
  props: {
    submit: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    submitForm() {
      if (this.submit) {
        this.submit();
      }
    },
  },
};
</script>
