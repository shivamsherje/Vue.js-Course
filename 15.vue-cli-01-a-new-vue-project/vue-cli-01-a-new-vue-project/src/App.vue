<template>
  <section>
    <header><h1>my friends</h1></header>
    <ui>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :id="friend.id"
        :phonenumber="friend.phone"
        :emailadres="friend.email"
        :isFavourtie="friend.isFavourtie"
        @toggle-favorite="onToggleFavorite"
      ></friend-contact>
    </ui>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: "shivame",
          name: "shivam sherje",
          phone: "375893429",
          email: "sherje@gmail.com",
          isFavourtie: "true",
        },
        {
          id: "juli",
          name: "juli sherje",
          phone: "375893429",
          email: "juli@gmail.com",
          isFavourtie: "false",
        },
      ],
    };
  },
  methods: {
    onToggleFavorite(friendID) {
      const identifiedfried = this.friends.find(
        (friend) => friend.id == friendID
      );
      identifiedfried.isFavourtie = !identifiedfried.isFavourtie;
    },
  },
};
</script>
