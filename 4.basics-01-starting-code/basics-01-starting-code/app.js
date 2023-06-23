const app = Vue.createApp({
  data() {
    return {
      courseGoal_1: "Wants to complete the Vue.js course goal !!!",
      courseGoal_2: "Wants to complete the python course goal !!!",
      vuelink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomnumber = Math.random() * 100;
      if (randomnumber < 50) {
        return this.courseGoal_1;
      } else {
        return this.courseGoal_2;
      }
    },
  },
});

app.mount("#user-goal");
