<template>
    <div></div>
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
            rooms: [],
        }
    },
    created() {
        this.getSeat();
    },
    methods: {
        async getSeat() {
            try {
                const response = await listPlaceRoom(this.data.roomId);
                this.rooms = response;
            } catch (error) {
                console.log(error);
                this.$toast.error("Có lỗi xảy ra");
            }
        },
    },
}
</script>


<style scoped></style>