<template>
  <div class="popup">
    <div class="popup-container">
      <div>
        <span class="close" @click="closePopup">&times;</span>

        <h1 style="color: #0056b3"> Hóa đơn thanh toán</h1>
      </div>

      <hr class="dashed-line">

      <img :src="qrCodeUrl" alt="QR Code" class="qr-img"/>

      <hr class="dashed-line">
      <h2> Thông tin vé</h2>

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
      <hr class="dashed-line">
      <h2> Thông dịch vụ</h2>

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
      <hr class="dashed-line">
      <p>
        <b>Chi nhánh rạp:</b> {{ bill.ticket[0].nameBranch }}
      </p>
      <p>
        <b>Thời gian giao dịch:</b> {{ new Date(bill.time).toLocaleString() }}
      </p>
      <hr class="dashed-line">
      <h2> Tổng tiền hóa đơn : {{ formatCurrency(bill.total) }} VNĐ</h2>
    </div>
  </div>
</template>
<script>
import {formatCurrency} from "@/components/utils/format_currency";

export default {
  name: "BillPage",

  mounted() {
    this.qrCodeUrl = `https://img.vietqr.io/image/TCB-vtthuonggg-qr_only.png?amount=${this.bill.total}`;
  },
  methods: {
    formatCurrency,
    closePopup() {
      this.$emit("closeBill");
    },
  },
  data() {
    return {
      bill: {
        "id": 1,
        "time": "2024-12-14T05:00:00.000+00:00",
        "ticket": [
          {
            "id": 1,
            "price": 85000.00,
            "nameUser": "viet",
            "email": "hqviet.51@gmail.com",
            "phone": "1234567890",
            "place": "K1",
            "time": "2024-12-14T05:00:00.000+00:00",
            "nameMovie": "Castle in the Sky",
            "nameRoom": "R123",
            "nameBranch": "Hoang Mai "
          },
          {
            "id": 2,
            "price": 100000.00,
            "nameUser": "viet",
            "email": "hqviet.51@gmail.com",
            "phone": "1234567890",
            "place": "K2",
            "time": "2024-12-14T05:00:00.000+00:00",
            "nameMovie": "Castle in the Sky",
            "nameRoom": "R123",
            "nameBranch": "Hoang Mai "
          }
        ],
        "service": [
          {
            "id": 1,
            "nameService": "coca",
            "price": 15000.00,
            "quantity": 8.00,
            "amount": 120000.0000
          }
        ],
        "total": 305000.0000
      },
      qrCodeUrl: ``,

    };
  },
};
</script>
<style scoped>

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