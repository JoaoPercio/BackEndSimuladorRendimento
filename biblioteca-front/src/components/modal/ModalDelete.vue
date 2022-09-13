<template>
  <biblioteca-modal
    ref="modal"
    title="Alerta"
    v-bind="$attrs"
    v-on="$listeners">
    <template #content>
      <div v-if="content !== null">
        {{ content }}
      </div>
      <div v-else>
        Você deseja excluir esse item?
      </div>
    </template>
    <template #footer>
      <biblioteca-button
        class="btn btn-danger"
        size="sm"
        @click="confirm()">
        Excluir
      </biblioteca-button>
    </template>
  </biblioteca-modal>
</template>

<script>
export default {
  name: 'BibliotecaModalConfirm',
  props: {
    closeAfterConfirm: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      default: null,
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm');
      if (this.closeAfterConfirm) {
        this.$refs.modal.close();
      }
    },
  },
};
</script>
