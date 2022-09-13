<template>
  <el-image
    v-loading="loading"
    :fit="fit"
    :lazy="lazy"
    :src="image"
    :style="styles"
    :class="classList">
    <div slot="error" :class="classes">
      <i class="el-icon-picture-outline"></i>
    </div>
    <div slot="placeholder" :class="classes">
      Loading<span class="dot">...</span>
    </div>
  </el-image>
</template>

<script>
export default {
  name: 'BibliotecaImage',
  props: {
    src: String,
    fit: String,
    width: Number,
    height: Number,
    lazy: Boolean,
    loading: Boolean,
    classList: String,
  },
  computed: {
    styles() {
      return [{
        display: 'block',
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
      }];
    },
    classes() {
      return [
        'h--100',
        'd--flex',
        'bg-color--info-light',
        'flex-align-items--center',
        'flex-justify-content--center',
      ];
    },
    image() {
      return this.loading ? null : this.src;
    },
  },
};
</script>
