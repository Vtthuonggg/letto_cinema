<template>
    <div class="background">
        <div class="container">
            <h1>Thông tin giá vé</h1>
            <img src="../assets/giave.jpg" alt="Ticket Price" class="ticket-price-image" />
            <p>Chính thức cập nhật giá vé xem phim dành riêng các cán bộ, công chức, viên chức Nhà nước khi đến xem phim
                tại LOTTE Cinema WestLake, cụ thể</p>
            <p style="font-weight: bold;">* 85.000 VNĐ/vé từ T2-T6</p>
            <p style="font-weight: bold;">* 105.000đ VNĐ/vé cho T7 & CN</p>
            <p>*Ghi chú:</p>
            <p>- Giá vé trên áp dụng cho các cán bộ, công chức, viên chức và người lao động thuộc các cơ quan Nhà nước
            </p>
            <p>- Đặc biệt, khi đi cùng người thân, bạn bè theo nhóm (tối đa 4 người), tất cả sẽ đều được áp dụng mức giá
                vé đặc biệt trên.</p>
            <p>- Quý khách hàng vui lòng xuất trình thẻ cán bộ, công chức, viên chức (thẻ giấy hoặc thẻ điện tử) trực
                tiếp tại quầy khi mua vé.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {
    text-align: left;
    margin: 10px;
}

.background {
    background-color: #F9F6EC;
    padding: 20px;
    text-align: center;
}

.ticket-price-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;

}

.container {
    width: 70%;
    padding: 10px;
    background-color: white;
}
</style>
