<template>
  <div class="form-field">
    <validation-provider v-slot="{ errors, reset, failed }" :rules="rules">
      <label v-if="label" class="form-label">{{ label }}</label>
      <select
        v-model="localValue"
        :name="name"
        class="form-select"
        :class="{ 'border-danger': failed }"
        :disabled="disabled"
        @change="reset"
        v-on="$listeners">
        <slot />
      </select>
      <small v-if="failed" class="text-danger">
        {{ errors[0] }}
      </small>
    </validation-provider>
  </div>
</template>

<script>
export default {
  name: 'BibliotecaSelect',
  inheritAttrs: false,
  props: {
    value: {
      type: [Number, String, Object],
      default: () => null,
    },
    label: {
      type: String,
      default: () => null,
    },
    name: {
      type: String,
      default: () => null,
    },
    rules: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
      };
    },
  },
  watch: {
    localValue(value) {
      if (this.value !== value) {
        this.$emit('input', value);
        this.$emit('on-change', value);
      }
    },
  },
};
</script>
