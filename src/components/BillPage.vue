<template>
  <div class="popup">
    <div class="popup-container">
      <div>
        <span class="close" @click="closePopup">&times;</span>

        <h1 style="color: #0056b3">Hóa đơn thanh toán</h1>
      </div>

      <hr class="dashed-line" />

      <img :src="qrCodeUrl" alt="QR Code" class="qr-img" />

      <hr class="dashed-line" />
      <h2>Thông tin vé</h2>

      <div class="ticket-info">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Phim</th>
              <th>Phòng</th>
              <th>Giờ chiếu</th>
              <th>Ghế</th>
              <th>Giá vé</th>
            </tr>
          </thead>
          <tr v-for="(ticket, index) in bill.ticket" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ ticket.nameMovie }}</td>
            <td>{{ ticket.nameRoom }}</td>
            <td>{{ new Date(ticket.time).toLocaleString() }}</td>
            <td>{{ ticket.place }}</td>
            <td>{{ formatCurrency(ticket.price) }} VNĐ</td>
          </tr>
        </table>
      </div>
      <hr class="dashed-line" />
      <h2>Thông dịch vụ</h2>

      <div class="ticket-info">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Tổng giá</th>
            </tr>
          </thead>
          <tr v-for="(service, index) in bill.service" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ service.nameService }}</td>
            <td>{{ formatCurrency(service.price) }} VNĐ</td>
            <td>{{ service.quantity }}</td>
            <td>{{ formatCurrency(service.amount) }} VNĐ</td>
          </tr>
        </table>
      </div>
      <hr class="dashed-line" />
      <div class="info-container">
        <p><b>Chi nhánh rạp:</b> {{ bill.ticket[0].nameBranch }}</p>
        <p>
          <b>Thời gian giao dịch:</b> {{ new Date(bill.time).toLocaleString() }}
        </p>
      </div>
      <hr class="dashed-line" />
      <h2>Tổng tiền hóa đơn : {{ formatCurrency(bill.total) }} VNĐ</h2>
      <button @click="confirmPayment" class="confirm-button">
        Xác nhận thanh toán
      </button>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import { formatCurrency } from "@/components/utils/format_currency";

export default {
  name: "BillPage",
  props: {
    bill: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.qrCodeUrl = `https://img.vietqr.io/image/TCB-vtthuonggg-qr_only.png?amount=${this.bill.total}`;
  },
  methods: {
    formatCurrency,
    closePopup() {
      this.$emit("closeBill");
    },
    confirmPayment() {
      this.loading = true;
      this.$emit("confirmPayment");
      this.loading = false;
    },
  },
  data() {
    return {
      qrCodeUrl: ``,
      loading: false,
    };
  },
};
</script>
<style scoped>
.confirm-button {
  background-color: #dc0004;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.confirm-button:hover {
  background-color: #dc0004;
}
.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-container p {
  margin: 0;
}
.popup {
  width: 100%;
  height: 100%;
  z-index: 500;
}

.popup-container {
  border: #000 1px solid;
  width: 60%;
  background-color: white;
  padding: 30px;
  max-height: 90vh;
  overflow: auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.dashed-line {
  border: none;
  border-top: 2px dashed #000;
  width: 100%;
  margin: 20px 0;
}

.qr-img {
  margin-bottom: 30px;
  width: 20%;
}

.ticket-info {
  display: flex;
  justify-content: space-between;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px;
}

th,
td {
  text-align: center;
}

th {
  padding-bottom: 10px;
}

p {
  margin: 10px 0;
  text-align: left;
}
</style>
