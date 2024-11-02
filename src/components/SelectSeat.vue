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
            <div v-for="(seat, index) in seats" :key="index" class="seat" @click="handleSeatClick(seat)">
                {{ seat }}
            </div>
        </div>
        <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>
<script>
import { listPlaceRoom } from "@/components/api/place_api";
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
            seats: [],
        }
    },
    created() {
        this.generateSeats();
        // this.getSeat();
    },
    methods: {
        async getSeat() {
            this.loading = true;
            try {
                const response = await listPlaceRoom(this.data.roomId);
                this.rooms = response;
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
                    seats.push(`${alphabet[j]}${i}`);
                }
            }
            this.seats = seats;
        },
        handleSeatClick(seat) {
            console.log(`Seat clicked: ${seat}`);
            // Xử lý sự kiện click vào ghế ở đây
        },
    },


}
</script>


<style scoped>
.seat-grid {

    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    margin: auto;
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
</style>