<template>
  <div>
    <div class="film-grid">
      <div v-for="film in films" :key="film.id" class="film-card">
        <img
          :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
          :alt="film.title"
          class="film-poster"
        />
        <h3 class="film-title">{{ film.title }}</h3>
        <p class="film-vote-average">Rating: {{ film.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpcomingFilm",
  data() {
    return {
      films: [
        {
          adult: false,
          backdrop_path: "/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg",
          genre_ids: [16, 878, 10751],
          id: 1184918,
          original_language: "en",
          original_title: "The Wild Robot",
          overview:
            "Sau một vụ đắm tàu, robot thông minh tên Roz bị mắc kẹt trên một hòn đảo hoang. Để sống sót trong môi trường khắc nghiệt, Roz gắn kết với các loài động vật trên đảo và chăm sóc một chú ngỗng con mồ côi.",
          popularity: 5113.594,
          poster_path: "/fj1ywGV5k8D0qjXyVeEgNyksChq.jpg",
          release_date: "2024-09-12",
          title: "Robot Hoang Dã",
          video: false,
          vote_average: 8.648,
          vote_count: 748,
        },
        {
          adult: false,
          backdrop_path: "/jlWk4J1sV1EHgkjhvsN7EdzGvOx.jpg",
          genre_ids: [27, 18, 878],
          id: 933260,
          original_language: "en",
          original_title: "The Substance",
          overview:
            "Một minh tinh hết thời quyết định sử dụng một liều thuốc mua từ chợ đen: Thứ thần dược sao chép tế bào của cô để tạo ra một phiên bản trẻ hơn, và hoàn hảo hơn của chính cô.",
          popularity: 3779.59,
          poster_path: "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
          release_date: "2024-09-07",
          title: "Thần Dược",
          video: false,
          vote_average: 7.4,
          vote_count: 630,
        },
        {
          adult: false,
          backdrop_path: "/4KHEK6AQFHhv4TDtL3KLReePB05.jpg",
          genre_ids: [28, 27, 53],
          id: 1029235,
          original_language: "en",
          original_title: "Azrael",
          overview: "",
          popularity: 1810.788,
          poster_path: "/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
          release_date: "2024-09-27",
          title: "Azrael",
          video: false,
          vote_average: 6.2,
          vote_count: 68,
        },
        {
          adult: false,
          backdrop_path: "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg",
          genre_ids: [14, 27, 28],
          id: 1087822,
          original_language: "en",
          original_title: "Hellboy: The Crooked Man",
          overview:
            "The Crooked Man xoay quanh câu chuyện Quỷ đỏ bị mắc kẹt ở vùng nông thôn Appalachia những năm 1950 cùng với một thành viên của đội BPRD. Tại đây, họ phải đối đầu, trốn chạy cuộc truy sát của một nhóm phù thủy được dẫn đầu bởi ác quỷ Crooked Man - người có mối liên hệ rắc rối với quá khứ của Quỷ đỏ.",
          popularity: 1158.95,
          poster_path: "/xHcjDCvuYt2Lv3CwhBszboFzwgW.jpg",
          release_date: "2024-08-29",
          title: "Hellboy: Đại Chiến Quỷ Dữ",
          video: false,
          vote_average: 4.9,
          vote_count: 130,
        },
        {
          adult: false,
          backdrop_path: "/eQEgKIRF7KeVGBQ8IYcklpU8RPf.jpg",
          genre_ids: [27, 53],
          id: 1034541,
          original_language: "en",
          original_title: "Terrifier 3",
          overview: "",
          popularity: 1195.102,
          poster_path: "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
          release_date: "2024-10-09",
          title: "Gã Hề Điên Loạn 3",
          video: false,
          vote_average: 7.0,
          vote_count: 83,
        },
        {
          adult: false,
          backdrop_path: "/l8OyAXEp5FKZWmDhqJMbiwAEvz.jpg",
          genre_ids: [27, 18],
          id: 814889,
          original_language: "en",
          original_title: "Never Let Go",
          overview: "",
          popularity: 844.777,
          poster_path: "/3EpZ2ksjijmdr8BhISP03PYzNFW.jpg",
          release_date: "2024-09-18",
          title: "Never Let Go",
          video: false,
          vote_average: 6.0,
          vote_count: 113,
        },
        {
          adult: false,
          backdrop_path: "/wLxGa71pt0P4e7BuINR8vYSeLow.jpg",
          genre_ids: [27, 9648],
          id: 1100782,
          original_language: "en",
          original_title: "Smile 2",
          overview: "",
          popularity: 569.383,
          poster_path: "/rkbse0ifgemkVtJKm7qWKy0vqj5.jpg",
          release_date: "2024-10-16",
          title: "Cười 2",
          video: false,
          vote_average: 6.9,
          vote_count: 43,
        },
        {
          adult: false,
          backdrop_path: "/3sh2UA2Q2l7fihgoj1LhFFPTlIM.jpg",
          genre_ids: [28, 878, 12],
          id: 912649,
          original_language: "en",
          original_title: "Venom: The Last Dance",
          overview: "",
          popularity: 601.352,
          poster_path: "/sE2NqRxsbAehUGW6EklvzUAHLAe.jpg",
          release_date: "2024-10-23",
          title: "Venom: Kèo Cuối",
          video: false,
          vote_average: 0.0,
          vote_count: 0,
        },
        {
          adult: false,
          backdrop_path: "/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
          genre_ids: [16, 14, 12],
          id: 823219,
          original_language: "xx",
          original_title: "Flow",
          overview: "",
          popularity: 520.35,
          poster_path: "/enRimDhtFfb7hNTQlOjrgK8O8UO.jpg",
          release_date: "2024-08-30",
          title: "Flow",
          video: false,
          vote_average: 8.9,
          vote_count: 94,
        },
        {
          adult: false,
          backdrop_path: "/m1DkRQbNXjs2RYC0FP4r6mdaLCi.jpg",
          genre_ids: [16, 878, 12, 10751, 28],
          id: 698687,
          original_language: "en",
          original_title: "Transformers One",
          overview: "",
          popularity: 402.687,
          poster_path: "/dawYxxlMAzEOy3eYuAlKlPk3lcW.jpg",
          release_date: "2024-09-11",
          title: "Transformers Một",
          video: false,
          vote_average: 7.45,
          vote_count: 150,
        },
        {
          adult: false,
          backdrop_path: "/xKxNYp78qj682Q3zSOB7xbYq16D.jpg",
          genre_ids: [878, 53, 27],
          id: 1064028,
          original_language: "en",
          original_title: "Subservience",
          overview: "Phục Tùng - Subservience",
          popularity: 287.261,
          poster_path: "/gBenxR01Uy0Ev9RTIw6dVBPoyQU.jpg",
          release_date: "2024-08-15",
          title: "Phục Tùng - Subservience",
          video: false,
          vote_average: 6.721,
          vote_count: 190,
        },
        {
          adult: false,
          backdrop_path: "/jf1V00dZdNkVfEq7VPk8frrlELk.jpg",
          genre_ids: [27, 9648],
          id: 748230,
          original_language: "en",
          original_title: "Salem's Lot",
          overview:
            "Trở về quê cũ để lấy cảm hứng sáng tác, một nhà văn trẻ không ngờ rằng anh đang bước chân vào nơi sinh tử của một thế lực tà ác.",
          popularity: 273.462,
          poster_path: "/j7ncdqBVufydVzVtxmXu8Ago4ox.jpg",
          release_date: "2024-10-03",
          title: "Phần Đất Của Salem",
          video: false,
          vote_average: 6.3,
          vote_count: 273,
        },
        {
          adult: false,
          backdrop_path: "/ujkVmpItWDLSkDCc7flsPywJhle.jpg",
          genre_ids: [27],
          id: 1128941,
          original_language: "en",
          original_title: "The Demon Disorder",
          overview: "",
          popularity: 321.092,
          poster_path: "/Oqlmo1bhDQWWBPrMxMauuHL7y7.jpg",
          release_date: "2024-08-16",
          title: "The Demon Disorder",
          video: false,
          vote_average: 5.184,
          vote_count: 19,
        },
        {
          adult: false,
          backdrop_path: "/hDXuagNP746lfYDcNT0GkKHvQzA.jpg",
          genre_ids: [27, 80],
          id: 1226578,
          original_language: "en",
          original_title: "Longlegs",
          overview:
            "Đặc vụ FBI Lee Harker được giao phụ trách một vụ án giết người hàng loạt chưa được giải quyết và diễn biến bất ngờ, tiết lộ bằng chứng về điều huyền bí. Harker phát hiện ra mối liên hệ cá nhân với kẻ giết người và phải ngăn chặn hắn trước khi hắn tấn công lần nữa.",
          popularity: 282.553,
          poster_path: "/dYN6uEuI2eerwkI27wzhksaY1Vr.jpg",
          release_date: "2024-05-31",
          title: "Thảm Kịch Dị Giáo",
          video: false,
          vote_average: 6.7,
          vote_count: 1054,
        },
        {
          adult: false,
          backdrop_path: "/of1tQasFGCeHgWPmSgdA1WS6hNW.jpg",
          genre_ids: [80, 53, 28],
          id: 1047373,
          original_language: "en",
          original_title: "The Silent Hour",
          overview: "",
          popularity: 340.614,
          poster_path: "/j736cRzBtEPCm0nHnpRN1prqiqj.jpg",
          release_date: "2024-10-03",
          title: "The Silent Hour",
          video: false,
          vote_average: 6.8,
          vote_count: 20,
        },
        {
          adult: false,
          backdrop_path: "/9juRmk8QjcsUcbrevVu5t8VZy5G.jpg",
          genre_ids: [28, 12, 80, 53],
          id: 923667,
          original_language: "cn",
          original_title: "九龍城寨之圍城",
          overview:
            "Lạc Quân nhập cảnh trái phép vào Hồng Kông và được Quyền Phong giúp đỡ để tồn tại ở Cửu Long Thành Trại - khu vực phức tạp có rất nhiều băng đảng xã hội đen. Trong lúc gặp nạn họ vô tình phát hiện ra quy luật ngầm giữa sự hỗn loạn phía sau nó. Đứng trước những thế lực tội ác, họ đứng lên chống lại âm mưu đen tối của kẻ thù để giữ lời thề bảo vệ sự bình yên của nơi này.",
          popularity: 234.67,
          poster_path: "/kiFRTosTF0xuDWjeS0wRoR7ycAU.jpg",
          release_date: "2024-04-23",
          title: "Cửu Long Thành Trại: Vây Thành",
          video: false,
          vote_average: 6.5,
          vote_count: 190,
        },
        {
          adult: false,
          backdrop_path: "/h9YlRHAZWOWtGonllmj6JJg1FrE.jpg",
          genre_ids: [28, 12, 16, 10751, 14],
          id: 588648,
          original_language: "zh",
          original_title: "Dragonkeeper",
          overview: "",
          popularity: 215.332,
          poster_path: "/hfdmvuLY8vADVthLNyn5EUO1ria.jpg",
          release_date: "2024-04-11",
          title: "Dragonkeeper",
          video: false,
          vote_average: 7.288,
          vote_count: 113,
        },
        {
          adult: false,
          backdrop_path: "/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg",
          genre_ids: [12, 14],
          id: 673,
          original_language: "en",
          original_title: "Harry Potter and the Prisoner of Azkaban",
          overview:
            "Harry đang mong chờ đến cuối mùa hè để bắt đầu một khóa học mới tại Hogwarts, và rời khỏi ngôi nhà của người dì và người chú đáng khinh của mình, Dursley, càng sớm càng tốt. Điều Harry không biết là anh sẽ phải rời khỏi Privet Drive sớm và bất ngờ sau khi biến dì Marge của mình thành một quả bóng bay khổng lồ. Một chiếc xe buýt đêm, và tất nhiên là mê hoặc, sẽ đưa anh ta đến quán rượu Leaky Cauldron, nơi không ai khác ngoài Cornelius Fudge, Bộ trưởng Bộ Pháp thuật, đang chờ anh ta.",
          popularity: 168.521,
          poster_path: "/vUwrS4EeRbhs183aK3MCGUhjIOX.jpg",
          release_date: "2004-05-31",
          title: "Harry Potter và Tù Nhân Azkaban",
          video: false,
          vote_average: 8.018,
          vote_count: 21409,
        },
        {
          adult: false,
          backdrop_path: "/hd1TvTUGjkoYoqvXYfSBpI5Ri9B.jpg",
          genre_ids: [16, 28, 12, 878],
          id: 1159311,
          original_language: "ja",
          original_title: "僕のヒーローアカデミア THE MOVIE ユアネクスト",
          overview: "",
          popularity: 192.727,
          poster_path: "/uRzD5XTqzPxqa9TmZ1mxx0Rm3xd.jpg",
          release_date: "2024-08-02",
          title: "僕のヒーローアカデミア THE MOVIE ユアネクスト",
          video: false,
          vote_average: 6.857,
          vote_count: 14,
        },
        {
          adult: false,
          backdrop_path: "/zH9nDH03FssAMqfiY2jbHoS3qrM.jpg",
          genre_ids: [35, 27, 53],
          id: 1139713,
          original_language: "en",
          original_title: "The Radleys",
          overview: "",
          popularity: 185.917,
          poster_path: "/kaEc9t2CjHddXJyJLd9GQcDURcX.jpg",
          release_date: "2024-10-04",
          title: "The Radleys",
          video: false,
          vote_average: 5.3,
          vote_count: 18,
        },
      ],
    };
  },
};
</script>

<style scoped>
.film-grid {
  margin: 0 auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}

.film-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.film-card:hover {
  transform: translateY(-10px);
}

.film-poster {
  width: 100%;
  height: auto;
}

.film-title {
  font-size: 1.2em;
  margin: 10px;
}

.film-overview {
  font-size: 0.9em;
  margin: 10px;
}

.film-release-date,
.film-vote-average {
  font-size: 0.8em;
  margin: 10px;
  color: #555;
}
</style>
