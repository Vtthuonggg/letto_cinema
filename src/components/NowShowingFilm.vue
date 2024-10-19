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
  name: "NowShowingFilm",
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
          vote_average: 8.6,
          vote_count: 738,
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
          vote_average: 7.3,
          vote_count: 626,
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
          vote_average: 6.3,
          vote_count: 63,
        },
        {
          adult: false,
          backdrop_path: "/3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg",
          genre_ids: [878, 53, 18, 27],
          id: 1125510,
          original_language: "es",
          original_title: "El hoyo 2",
          overview:
            "Sau khi nhà lãnh đạo bí ẩn nọ áp đặt luật lệ của mình trong một hệ thống phòng giam xếp dọc đầy tàn bạo, một người mới đến đấu tranh với một phương thức chia đồ ăn đáng ngờ.",
          popularity: 1431.059,
          poster_path: "/kP84jB5ClTA6cU3JEZ0z8xiVsz8.jpg",
          release_date: "2024-09-27",
          title: "Hố sâu đói khát 2",
          video: false,
          vote_average: 5.681,
          vote_count: 602,
        },
        {
          adult: false,
          backdrop_path: "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg",
          genre_ids: [35, 14, 27],
          id: 917496,
          original_language: "en",
          original_title: "Beetlejuice Beetlejuice",
          overview:
            "Beetlejuice trở lại! Sau một bi kịch gia đình bất ngờ, ba thế hệ gia đình Deetz trở về nhà ở Winter River. Vẫn bị Beetlejuice ám ảnh, cuộc sống của Lydia bị đảo lộn khi cô con gái tuổi teen nổi loạn của cô, Astrid, phát hiện mô hình bí ẩn của thị trấn trong gác mái và cổng đến Thế giới bên kia vô tình được mở ra. Khi rắc rối đang diễn ra ở cả hai thế giới, chỉ còn là vấn đề thời gian trước khi ai đó nói tên Beetlejuice ba lần và con quỷ nghịch ngợm trở lại để gây ra sự hỗn loạn của riêng mình.",
          popularity: 1439.683,
          poster_path: "/wc6ZeSu9kUNmTdi8CffOOFMFIg8.jpg",
          release_date: "2024-09-04",
          title: "Beetlejuice: Ma Siêu Quậy",
          video: false,
          vote_average: 7.216,
          vote_count: 1367,
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
          vote_count: 82,
        },
        {
          adult: false,
          backdrop_path: "/uVWlwJebxX0M3axXAUrryJ6w9cQ.jpg",
          genre_ids: [28, 35, 80],
          id: 507241,
          original_language: "en",
          original_title: "The Killer's Game",
          overview: "",
          popularity: 708.575,
          poster_path: "/4bKlTeOUr5AKrLky8mwWvlQqyVd.jpg",
          release_date: "2024-09-12",
          title: "Trò Chơi Sát Thủ",
          video: false,
          vote_average: 6.379,
          vote_count: 66,
        },
        {
          adult: false,
          backdrop_path: "/hPIWQT70wQK6akqfLXByEvr62u0.jpg",
          genre_ids: [28, 53, 27, 878],
          id: 726139,
          original_language: "ko",
          original_title: "탈출: 프로젝트 사일런스",
          overview:
            'Do điều kiện thời tiết xấu đi đột ngột, tầm nhìn trên cây cầu đến sân bay bị suy giảm nghiêm trọng, khiến người dân bị mắc kẹt và có nguy cơ sập cầu do hàng loạt va chạm dây chuyền và các vụ nổ. Giữa sự hỗn loạn, những chú chó "Echo" từ thí nghiệm quân sự "Dự án Mật", đang được vận chuyển bí mật, thoát ra ngoài và tất cả những người sống sót đều trở thành mục tiêu của các cuộc tấn công không ngừng. Nhiều người bị mắc kẹt trên cầu vì nhiều lý do khác nhau - một quan chức chính phủ từ văn phòng tổng thống (LEE Sun Kyun), người đang tiễn con gái mình (KIM Su An) tại sân bay; tài xế xe đầu kéo (JU Ji Hoon) đang trên đường đến hiện trường vụ va chạm; một cặp vợ chồng già (MOON Sung Geun, YE Su Jeong) đang trở về sau chuyến đi nước ngoài; chị em (PARK Hee Von, PARK Ju Hyun) đã lỡ chuyến bay và Tiến sĩ Yang (Kim Hie Won), nhà nghiên cứu chịu trách nhiệm về Dự án Mật - và một cuộc đấu tranh tuyệt vọng bắt đầu để họ trốn thoát đến nơi an toàn.',
          popularity: 757.066,
          poster_path: "/7eYasyaCvfJRHdnYl24jqPhf9y0.jpg",
          release_date: "2024-07-11",
          title: "Dự Án Mật: Thảm Họa Trên Cầu",
          video: false,
          vote_average: 7.059,
          vote_count: 178,
        },
        {
          adult: false,
          backdrop_path: "/oAadr06zrHUQVKdZdgdBojRssPq.jpg",
          genre_ids: [18, 80, 53],
          id: 889737,
          original_language: "en",
          original_title: "Joker: Folie à Deux",
          overview:
            "Joker: Folie à Deux là phần nối tiếp câu chuyện về Arthur Fleck khi tạo ra một cuộc bạo loạn chưa từng có tại Gotham. Đặc biệt, Lady Gaga sẽ vào vai Harley Quinn, người tình nổi tiếng nhưng cũng không kém phần điên loạn của gã hề Joker.",
          popularity: 761.232,
          poster_path: "/o9Qly0XwYbEwaanxb3IntVNpErN.jpg",
          release_date: "2024-10-01",
          title: "Joker: Điên Có Đôi",
          video: false,
          vote_average: 5.826,
          vote_count: 833,
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
          backdrop_path: "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
          genre_ids: [28, 14, 27],
          id: 957452,
          original_language: "en",
          original_title: "The Crow",
          overview:
            "Sau khi Eric cùng vị hôn thê Shelly bị sát hại dã man, anh được trao cơ hội để trở lại trần thế. Eric bắt đầu bước vào con đường báo thù những kẻ đã hủy hoại cuộc đời anh và người mình yêu.",
          popularity: 649.365,
          poster_path: "/laxklvXNWFERDCfQlYoLAXyhTqJ.jpg",
          release_date: "2024-08-21",
          title: "The Crow: Báo Thù",
          video: false,
          vote_average: 5.76,
          vote_count: 629,
        },
        {
          adult: false,
          backdrop_path: "/AowNXLFNKWDRYBKHLsgTK0T7Bxf.jpg",
          genre_ids: [28, 35, 80],
          id: 1210794,
          original_language: "sv",
          original_title: "Strul",
          overview:
            "Bị kết án oan tội giết người, nhân viên bán hàng điện tử vụng về nọ đối mặt với cảnh sát biến chất và các âm mưu tội phạm trong nỗ lực chứng minh mình vô tội.",
          popularity: 518.29,
          poster_path: "/eOybR6hA73bdXHX0YEyr98ZBtsv.jpg",
          release_date: "2024-10-02",
          title: "Vận nạn",
          video: false,
          vote_average: 6.9,
          vote_count: 89,
        },
        {
          adult: false,
          backdrop_path: "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
          genre_ids: [27, 53],
          id: 663712,
          original_language: "en",
          original_title: "Terrifier 2",
          overview:
            "Sau khi được hồi sinh bởi một thực thể nham hiểm, Art the Clown quay trở lại thị trấn nhút nhát Miles County, nơi hắn nhắm đến một cô gái tuổi teen và em trai của cô ấy vào đêm Halloween.",
          popularity: 583.63,
          poster_path: "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
          release_date: "2022-10-06",
          title: "Gã Hề Điên Loạn 2",
          video: false,
          vote_average: 6.777,
          vote_count: 1835,
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
          vote_average: 7.2,
          vote_count: 38,
        },
        {
          adult: false,
          backdrop_path: "/ansCWyqoyjLEueDXOUZeLrQlZ9J.jpg",
          genre_ids: [28, 80, 53],
          id: 1010161,
          original_language: "en",
          original_title: "The Clean Up Crew",
          overview:
            "Khi một đội dọn dẹp hiện trường vụ án phát hiện ra một chiếc cặp đựng đầy tiền, họ vô tình bị đưa vào trận chiến với một tên trùm tội phạm tàn nhẫn và tham nhũng, những tên cướp, sát thủ và các đặc vụ chính phủ tham nhũng đang quyết tâm lấy lại nó.",
          popularity: 432.064,
          poster_path: "/oinz9e5xvcn0hDQZyWUGPJ0oVye.jpg",
          release_date: "2024-09-12",
          title: "Đội Dọn Dẹp",
          video: false,
          vote_average: 5.5,
          vote_count: 4,
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
          backdrop_path: "/zAqBIeO71BFL7bAtP5TFzVjVamy.jpg",
          genre_ids: [10749, 18],
          id: 1079091,
          original_language: "en",
          original_title: "It Ends with Us",
          overview:
            "Lily Bloom vượt qua tuổi thơ đau thương để bắt đầu cuộc sống mới ở Boston và theo đuổi ước mơ cả đời là mở doanh nghiệp của riêng mình. Cuộc gặp gỡ tình cờ với bác sĩ giải phẫu thần kinh quyến rũ Ryle Kincaid khơi dậy một mối liên hệ mãnh liệt, nhưng khi cả hai yêu nhau sâu đậm, Lily bắt đầu nhìn thấy những khía cạnh của Ryle khiến cô nhớ đến mối quan hệ của cha mẹ cô.",
          popularity: 522.06,
          poster_path: "/lxggjucEIXJdkmAQzTkYpGWib99.jpg",
          release_date: "2024-08-07",
          title: "Nơi Tình Yêu Kết Thúc",
          video: false,
          vote_average: 7.155,
          vote_count: 824,
        },
        {
          adult: false,
          backdrop_path: "/1fL2S8LKxCVE9KoPRBXeagmBtex.jpg",
          genre_ids: [27, 53],
          id: 1114513,
          original_language: "en",
          original_title: "Speak No Evil",
          overview:
            "Khi một gia đình người Mỹ được mời tới chơi tại một cuối tuần tại biệt thự đồng quê của một gia đình người Anh mà họ đã kết bạn trong một kỳ nghỉ, điều bắt đầu như một kỳ nghỉ mơ mộng sớm biến thành một cơn ác mộng.",
          popularity: 486.058,
          poster_path: "/4TcbY5elT4K9JsZLxRIEee1yvnC.jpg",
          release_date: "2024-09-11",
          title: "Không Nói Điều Dữ",
          video: false,
          vote_average: 7.351,
          vote_count: 679,
        },
        {
          adult: false,
          backdrop_path: "/vGaBqgY8YRzQVUbBMPnd5SmYvL7.jpg",
          genre_ids: [16, 35],
          id: 1329336,
          original_language: "en",
          original_title: "The Bad Guys: Haunted Heist",
          overview:
            "Những kẻ xấu xa đầy xảo quyệt bắt đầu phi vụ rủi ro cao dịp Halloween: trộm chiếc bùa hộ mệnh vô giá từ một căn biệt thự ma quái. Có vấn đề gì được chứ?",
          popularity: 500.178,
          poster_path: "/oEJC05CqPugMxC4rFu9r6r6vg6m.jpg",
          release_date: "2024-10-02",
          title: "Những kẻ xấu xa: Phi vụ ma ám",
          video: false,
          vote_average: 7.316,
          vote_count: 57,
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
