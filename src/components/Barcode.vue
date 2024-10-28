<template>
  <div>
    <svg ref="barcode"></svg>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode';

export default {
  name: 'BarcodePage',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.generateBarcode();
  },
  methods: {
    generateBarcode() {
      JsBarcode(this.$refs.barcode, this.value, {
        format: 'CODE128',
        displayValue: true,
      });
    },
  },
  watch: {
    value() {
      this.generateBarcode();
    },
  },
};
</script>

<style scoped>
/* CSS tùy chỉnh nếu cần */
</style>