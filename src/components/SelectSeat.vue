<template>
    <div>
        <h1 style="margin: 15px 0;">MÀN CHIẾU</h1>
        <v-divider style="width: 70%;margin: auto;"></v-divider>
        <!-- <div class="info-container">
            <p>Phòng chiếu: {{ data.roomName }}</p>
            <p>Phim: {{ data.movieName }}</p>
            <p>Thời gian: {{ data.time }}</p>
            <p>Ngày: {{ data.date }}</p>
            <p>Giá vé: {{ data.price }} VNĐ</p>
        </div> -->
        <div class="seat-grid">
            <div v-for="(seat, index) in seats" :key="index"
                :class="['seat', { 'selected-seat': isSelected(seat), 'unavailable-seat': isNotAvailable(seat) }]"
                @click="handleSeatClick(seat)">
                {{ seat.name }}
            </div>
        </div>
        <v-btn @click="confirmSeat">Xác nhận</v-btn>
        <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>
<script>
import { listPlaceRoom, addPlaceRoom, deletePlace, updatePlace } from "@/components/api/place_api";
export default {
    name: 'SelectSeat',
    computed: {
        data() {
            return this.$route.params;
        },
    },
    data() {
        return {
            loading: false,
            initSeat: [],
            seats: [],
            selectedSeats: [],
        }
    },
    created() {
        this.generateSeats();
        this.getSeat();
    },
    methods: {
        async confirmSeat() {
            try {
                for (const seat of this.selectedSeats) {
                    if (seat.isAvailable) {
                        var payload = {
                            id: seat.id,
                            isAvailable: false,
                            name: seat.name,
                        }
                        await updatePlace(payload, seat.id);
                    }
                }
                this.$toast.success("Xác nhận ghế thành công");
                this.getSeat();
            } catch (error) {
                console.log(error);
                this.$toast.error("Có lỗi xảy ra khi xác nhận ghế");
            }
        },
        isSelected(seat) {
            return this.selectedSeats.some(selectedSeat => selectedSeat.name === seat.name);
        },
        async getSeat() {
            this.loading = true;
            try {
                console.log(this.data.roomId);//idRoom ==3
                const response = await listPlaceRoom(3);
                this.initSeat = response;
                console.log('thành công', response);
                this.selectedSeats = this.initSeat.filter(init => this.seats.some(seat => seat.name == init.name));
                console.log('sleectasda', this.selectedSeats);
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
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            for (let j = 0; j < cols; j++) {
                for (let i = 1; i <= rows; i++) {
                    seats.push({ "name": `${alphabet[j]}${i}` });
                }
            }
            this.seats = seats;
        },
        isNotAvailable(seat) {

            return this.selectedSeats.some(selectedSeat => selectedSeat.isAvailable == false && selectedSeat.name === seat.name);
        },
        async handleSeatClick(seat) {
            if (this.isNotAvailable(seat)) return;
            const index = this.selectedSeats.findIndex(selectedSeat => selectedSeat.name === seat.name);
            console.log(`Seat clicked: ${seat}`);
            if (index === -1) {
                this.loading = false;
                try {
                    var payload = {
                        idRoom: 3,
                        name: seat.name,
                    }
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
                    console.log('delete', selectedSeat);
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
}
</script>


<style scoped>
.unavailable-seat {
    background-color: orange !important;
    cursor: not-allowed;
}

.seat-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    padding: 20px;
}

.seat {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s;
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