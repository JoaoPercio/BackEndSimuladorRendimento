<template>
  <div
    ref="modal"
    class="modal fade"
    tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div v-if="title" class="modal-header">
          <biblioteca-header size="sm" class="modal-title">{{ title }}</biblioteca-header>
          <button
            v-if="showCloseButton"
            class="btn-close"
            data-bs-dismiss="modal"></button>
        </div>
        <div v-if="!fullLine" class="modal-body d-flex text-start">
          <slot name="content" />
        </div>
        <div v-else class="modal-body text-start">
          <slot name="content" />
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col">
              <biblioteca-button
                v-if="showCloseButton"
                class="btn btn-secondary"
                size="sm"
                @click="close">
                Cancelar
              </biblioteca-button>
            </div>
            <div v-if="$slots.footer" class="col">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { buildModal } from '@/components/modal/modal.service';

export default {
  name: 'BibliotecaModal',
  props: {
    title: {
      type: String,
      default: null,
    },
    showCloseButton: {
      type: Boolean,
      default: () => true,
    },
    fullLine: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  mounted() {
    this.create();
    this.instance.show();
    this.$emit('open');
  },
  methods: {
    create() {
      this.instance = buildModal(this.$refs.modal, {
        onHidden: this.close,
      });
    },
    close() {
      this.instance.dispose();
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-lg {
  width: 600px;
}

.modal-body {
  padding-bottom: 30px;
  padding-top: 30px;
  font-size: 16px;
}
</style>
