const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "shivam",
          name: "shivam sherje",
          phone: "7263911096",
          email: "sherjes@gmail.com",
        },
        {
          id: "krunali",
          name: "krunali sherje",
          phone: "3245321096",
          email: "krunaali@gmail.com",
        },
      ],
    };
  },
});
app.component("friend-contact", {
  template: ` 
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{detailsVisibility ? "hide" : "shown"}}Show Details
    </button>
    <ul v-if="detailsVisibility">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsVisibility: false,
      friend: {
        id: "shivam",
        name: "shivam sherje",
        phone: "7263911096",
        email: "sherjes@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisibility = !this.detailsVisibility;
    },
  },
});
app.mount("#app");
