<template>
<div class="container-fluid componentBorder">
  <h2>ComponentCommunication.vue</h2>
  <span class="badge rounded-pill bg-info text-dark">Props</span>
  <span class="badge rounded-pill bg-info text-dark">Props validation</span>
  <span class="badge rounded-pill bg-info text-dark"
    >Emits / custom events</span
  >
  <new-friend @add-friend="addFriend"></new-friend>
  <ul class="list-inline">
    <!-- https://getbootstrap.com/docs/5.0/content/typography/#inline -->
    <li class="list-inline-item" v-for="friend in friends" :key="friend.id">
      <friend-contact
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :profession="friend.profession"
        :british="friend.british"
        @give-knighthood="giveKnighthood"
        @delete-friend="deleteFriend"
      ></friend-contact>
      <!-- emitting custom events (child => parent communication) -->
    </li>
  </ul>
</div>
</template>

<script>
import FriendContact from "./componentCommunication/FriendContact.vue";
import NewFriend from "./componentCommunication/NewFriend.vue";

export default {
  components: { FriendContact, NewFriend },
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
          british: false,
        },
        {
          id: 789,
          name: "Jesse Lingard",
          phone: 598965442521,
          email: "jlingz@westham.com",
        },
        {
          id: 1000,
          name: "João Sacramento",
          phone: 768765442921,
          email: "joão@spurs.com",
          profession: "Premier League coaching staff",
          british: false,
        },
      ],
    };
  },
  methods: {
    giveKnighthood(id) {
      // console.log(id)
      const identifiedFriend = this.friends.find((friend) => friend.id === id);
      identifiedFriend.name = "Sir " + identifiedFriend.name;
    },
    // emitting custom events (child => parent communication)
    addFriend(id, name, phone, email) {
      console.log(id, name, phone, email);
      const newFriend = {
        id,
        name,
        phone,
        email,
      };
      this.friends.push(newFriend);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>
