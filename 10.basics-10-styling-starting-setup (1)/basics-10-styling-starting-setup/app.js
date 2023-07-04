const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  computed: {
    boxClssA() {
      return { active: this.boxA };
    },
    boxClssB() {
      return { active: this.boxB };
    },
    boxClssC() {
      return { active: this.boxC };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxA = !this.boxA;
      } else if (box === "B") {
        this.boxB = !this.boxB;
      } else if (box === "C") {
        this.boxC = !this.boxC;
      }
    },
  },
});

app.mount("#styling");
