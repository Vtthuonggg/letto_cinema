<template>
  <div>
    <h1 style="text-align: left; margin: 10px">Vé đã mua</h1>
    <v-divider></v-divider>
    <v-container v-if="listTickets.length > 0">
      <v-row>
        <v-col v-for="(ticket, index) in listTickets" :key="index" cols="12">
          <v-card class="ticket-card" @click="handleCardClick(ticket)">
            <div class="card-content">
              <div class="left-section">
                <v-card-title>
                  <h2 style="color: #b50003">{{ ticket.nameMovie }}</h2>
                </v-card-title>
                <v-card-text style="text-align: left">
                  <p>{{ new Date(ticket.time).toLocaleString() }}</p>
                  <p>Letto {{ ticket.nameBranch }}</p>
                </v-card-text>
              </div>
              <div class="separator"></div>
              <div class="right-section">
                <v-card-text style="text-align: center">
                  <h2 style="color: #00519f; text-align: center">{{ ticket.price }} VNĐ</h2>
                </v-card-text>
                <v-card-text style="text-align: left">
                  <p><b>Người mua:</b> {{ ticket.nameUser }}</p>
                  <p><b>Rạp:</b> {{ ticket.nameRoom }}</p>
                  <p><b>Số ghế:</b> {{ ticket.place }}</p>
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="this.selectedTicket">
      <PopupTicket :ticket="selectedTicket" @closeTicket="closeTicket">
      </PopupTicket>
    </div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import PopupTicket from "@/components/PopupTicket.vue";
import { historyTicket } from "@/components/api/ticket_api.js";
export default {

  name: "TicketPage",
  components: {
    PopupTicket,
  },
  created() {
    this.fetchTickets();
  },

  data() {

    return {
      loading: false,
      selectedTicket: null,
      listTickets: [
        {
          'id': 1,
          'price': 85000.00,
          'nameUser': 'viet',
          'email': 'thuong2304203@gmail.com',
          'phone': '0865202584',
          'place': 'K1',
          'time': '2024-12-14T05:00:00.000+00:00',
          'nameMovie': 'Castle in the Sky',
          'nameRoom': 'R123',
          'nameBranch': 'Hoang Mai'
        }, {
          'id': 2,
          'price': 85000.00,
          'nameUser': 'viet',
          'email': 'thuong2304203@gmail.com',
          'phone': '0865202584',
          'place': 'K2',
          'time': '2024-12-14T05:00:00.000+00:00',
          'nameMovie': 'Castle in the Sky',
          'nameRoom': 'R123',
          'nameBranch': 'Hoang Mai'
        }, {
          'id': 3,
          'price': 85000.00,
          'nameUser': 'viet',
          'email': 'thuong2304203@gmail.com',
          'phone': '0865202584',
          'place': 'K1',
          'time': '2024-12-14T05:00:00.000+00:00',
          'nameMovie': 'Castle in the Sky',
          'nameRoom': 'R123',
          'nameBranch': 'Hoang Mai'
        }, {
          'id': 3,
          'price': 85000.00,
          'nameUser': 'viet',
          'email': 'thuong2304203@gmail.com',
          'phone': '0865202584',
          'place': 'K3',
          'time': '2024-12-14T05:00:00.000+00:00',
          'nameMovie': 'Castle in the Sky',
          'nameRoom': 'R123',
          'nameBranch': 'Hoang Mai'
        },

      ]
    };
  },
  methods: {
    handleCardClick(ticket) {
      this.selectedTicket = ticket;
    },
    closeTicket() {
      this.selectedTicket = null;
    },
    async fetchTickets() {
      this.loading = true;
      try {
        const res = await historyTicket();
        this.listTickets = res;
      } catch (e) {
        this.$toast.error("Có lỗi xảy ra");
      } finally {
        this.loading = false;
      }
    }

  },
}
</script>

<style>
.ticket-card {
  padding: 15px;
  width: 60vw;
  height: 15vw;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.ticket-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.card-content {
  display: flex;
  height: 100%;
}

.left-section {
  width: 66.66%;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.separator {
  width: 1px;
  background-color: #c4c4c4;
  margin: 0 10px;

}

.right-section {
  width: 33.33%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  margin: 10px 0;
  font-size: 20px;
}
</style>