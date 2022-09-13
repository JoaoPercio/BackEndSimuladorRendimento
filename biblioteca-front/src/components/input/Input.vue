<template>
  <validation-provider
    v-slot="{ errors, reset }"
    :rules="rules">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      :type="type"
      :value="value"
      :autofocus="focus"
      v-bind="$attrs"
      class="form-control"
      :class="{ 'border-danger': errors.length }"
      @paste="updateState(reset)"
      @keypress="updateState(reset)"
      @keydown.backspace="updateState(reset)"
      v-on="listeners" />
    <small v-if="errors.length" class="text-danger">
      {{ errors[0] }}
    </small>
  </validation-provider>
</template>

<script>
export default {
  name: 'BibliotecaInputValidate',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: () => null,
    },
    value: {
      type: [Number, String],
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return !type || ['text', 'number', 'email', 'password', 'date'].includes(type);
      },
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
    updateState(reset = () => {}) {
      reset();
    },
  },
};
</script>
