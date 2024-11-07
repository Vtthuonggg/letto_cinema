<template>
  <div class="popup">
    <div class="popup-container">
      <div>
        <span class="close" @click="closePopup">&times;</span>

        <h1 style="color: #b50003">Letto Cinema</h1>
      </div>
      <v-divider style="margin: 15px 0" />

      <div class="detail-ticket">
        <p><b> Phim: </b> {{ ticket.nameMovie }}</p>
        <p><b> Địa chỉ: </b> {{ ticket.nameBranch }}</p>
        <p><b> Rạp: </b> {{ ticket.nameRoom }}</p>
        <p><b> Số ghế: </b> {{ ticket.place }}</p>
        <p><b> Giờ chiếu: </b> {{ new Date(ticket.time).toLocaleString() }}</p>
      </div>
      <v-divider style="margin: 15px 0" />
      <div class="detail-ticket">
        <p><b> Người mua: </b> {{ ticket.nameUser }}</p>
        <p><b> Sđt: </b> {{ ticket.phone }}</p>
        <p><b> Email: </b> {{ ticket.email }}</p>
        <p><b> Giá vé: </b> {{ formatCurrency(ticket.price) }} VNĐ</p>
      </div>
      <v-divider style="margin: 15px 0" />
      <!-- <Barcode :value="barcodeValue" /> -->
      <img :src="ticket.barcode" />
    </div>
  </div>
</template>
<script>
// import Barcode from "@/components/Barcode.vue";

import { formatCurrency } from "@/components/utils/format_currency.js";
export default {
  name: "PopupTicket",
  components: {
    // Barcode,
  },
  props: {
    ticket: Object,
  },
  data() {
    return { barcodeValue: "123456789012" };
  },
  methods: {
    formatCurrency,
    closePopup() {
      this.$emit("closeTicket");
    },
  },
};
</script>
<style scoped>
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.popup {
  width: 100%;
  height: 100%;
  z-index: 500;
}

.popup-container {
  border: #000 1px solid;
  width: 30%;
  background-color: white;
  padding: 30px;
  max-height: 90vh;
  overflow: auto;
}

.dashed-line {
  border: none;
  border-top: 2px dashed #000;
  width: 100%;
  margin: 20px 0;
}

.detail-ticket {
  text-align: left;
}
.header {
  display: flex;
  align-items: center;
}

.header h1 {
  margin: 0;
  font-size: 24px;
  color: #b50003;
}
</style>