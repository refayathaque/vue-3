<template>
  <h2>ComponentCommunication.vue</h2>
  <ul class="list-inline">
    <!-- https://getbootstrap.com/docs/5.0/content/typography/#inline -->
    <li class="list-inline-item" v-for="friend in friends" :key="friend.id">
      <friend-contact
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :profession="friend.profession"
      ></friend-contact>
    </li>
  </ul>
</template>

<script>
import FriendContact from "./componentCommunication/FriendContact.vue";
export default {
  components: { FriendContact },
  name: "ComponentCommunication",
  data() {
    return {
      friends: [
        {
          id: 123,
          name: "Michail Antonio",
          phone: 71234567890,
          email: "michail@westham.com",
        },
        {
          id: 456,
          name: "Pierre-Emile Højbjerg",
          phone: 398765442121,
          email: "højbjerg@spurs.com",
        },
        {
          id: 789,
          name: "Jesse Lingard",
          phone: 598965442521,
          email: "jlingz@westham.com",
        },
        {
          id: 1000,
          name: "Joao Sacramento",
          phone: 768765442921,
          email: "joao@spurs.com",
          profession: "Premier League coaching staff",
        },
      ],
    };
  },
};
</script>
