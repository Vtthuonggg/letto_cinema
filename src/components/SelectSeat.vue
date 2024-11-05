<template>
  <div>
    <h1 style="margin: 15px 0">MÀN CHIẾU</h1>
    <v-divider style="width: 70%; margin: auto"></v-divider>

    <div class="seat-legend">
      <div class="legend-item">
        <div class="legend-box empty-seat"></div>
        <span>Ghế trống</span>
      </div>
      <div class="legend-item">
        <div class="legend-box selected-seat"></div>
        <span>Ghế đang chọn</span>
      </div>
      <div class="legend-item">
        <div class="legend-box unavailable-seat"></div>
        <span>Ghế đã được mua</span>
      </div>
    </div>
    <div class="seat-grid">
      <div
        v-for="(seat, index) in seats"
        :key="index"
        :class="[
          'seat',
          {
            'selected-seat': isSelected(seat),
            'unavailable-seat': isNotAvailable(seat),
          },
        ]"
        @click="handleSeatClick(seat)"
      >
        <v-icon>mdi-sofa-single-outline</v-icon>
        <span class="seat-name">{{ seat.name }}</span>
      </div>
    </div>
    <v-btn @click="confirmSeat">Xác nhận</v-btn>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import {
  listPlaceRoom,
  addPlaceRoom,
  deletePlace,
} from "@/components/api/place_api";
import { addTicket } from "@/components/api/ticket_api";
import { uploadImage } from "@/components/api/cloud_dinary";
import { addBillTicket, createBill } from "@/components/api/bill_api";
import Cookies from "js-cookie";
import JsBarcode from "jsbarcode";
export default {
  name: "SelectSeat",
  computed: {
    data() {
      console.log(this.$route.params);
      return this.$route.params;
    },
  },
  data() {
    return {
      loading: false,
      initSeat: [],
      seats: [],
      selectedSeats: [],
    };
  },
  created() {
    this.generateSeats();
    this.getSeat();
  },
  methods: {
    async confirmSeat() {
      try {
        const billId = await createBill();
        for (const seat of this.selectedSeats) {
          if (seat.isAvailable) {
            var data = {
              idUser: Cookies.get("accountId"),
              idPlace: seat.id,
              idScreen: this.data.screen.id,
            };
            const barcodeValue =
              `${data.idUser}${data.idPlace}${data.idScreen}`.padStart(12, "0");

            const canvas = document.createElement("canvas");

            JsBarcode(canvas, barcodeValue, {
              format: "CODE128",
              displayValue: true,
            });
            const blob = await new Promise((resolve) => canvas.toBlob(resolve));

            const barcodeUrl = await uploadImage(blob);

            data.barcode = barcodeUrl;

            const resId = await addTicket(data);
            await addBillTicket({
              idBill: billId.id,
              idTicket: resId.id,
            });
          }
        }
        this.$toast.success("Xác nhận ghế thành công");
        this.$router.push({ name: "SelectService", params: { id: billId.id } });
      } catch (error) {
        console.log(error);
        this.$toast.error("Có lỗi xảy ra khi xác nhận ghế");
      }
    },
    isSelected(seat) {
      return this.selectedSeats.some(
        (selectedSeat) => selectedSeat.name === seat.name
      );
    },
    async getSeat() {
      this.loading = true;
      try {
        const response = await listPlaceRoom(this.data.screen.idRoom);
        this.initSeat = response;
        this.selectedSeats = this.initSeat.filter((init) =>
          this.seats.some((seat) => seat.name == init.name)
        );
      } catch (error) {
        console.log(error);
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    },
    generateSeats() {
      const rows = 12;
      const cols = 12;
      const seats = [];
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      for (let j = 0; j < cols; j++) {
        for (let i = 1; i <= rows; i++) {
          seats.push({ name: `${alphabet[j]}${i}` });
        }
      }
      this.seats = seats;
    },
    isNotAvailable(seat) {
      return this.selectedSeats.some(
        (selectedSeat) =>
          selectedSeat.isAvailable == false && selectedSeat.name === seat.name
      );
    },
    async handleSeatClick(seat) {
      if (this.isNotAvailable(seat)) return;
      const index = this.selectedSeats.findIndex(
        (selectedSeat) => selectedSeat.name === seat.name
      );
      if (index === -1) {
        this.loading = false;
        try {
          var payload = {
            idRoom: 3,
            name: seat.name,
          };
          console.log(payload);
          await addPlaceRoom(payload);
          this.getSeat();
        } catch (e) {
          console.log(e);
        } finally {
          this.loading = false;
        }
      } else {
        this.loading = true;
        try {
          const selectedSeat = this.selectedSeats[index];
          await deletePlace(selectedSeat.id);
          this.getSeat();
        } catch (e) {
          console.log(e);
          this.$toast.error("Có lỗi xảy ra");
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.seat-legend {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.legend-box {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  margin-right: 5px;
}

.unavailable-seat {
  background-color: orange !important;
  cursor: not-allowed;
}

.seat-grid {
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  padding: 20px;
}

.seat {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.3s;
  font-weight: bold;
}

.seat:hover {
  background-color: #dc0004;
  color: white;
}

.selected-seat {
  background-color: #dc0004;
  color: white;
}
</style>
