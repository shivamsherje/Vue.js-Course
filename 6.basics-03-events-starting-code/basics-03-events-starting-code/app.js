const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      conformedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      // event.preventDefault();
      alert("submited successfully");
    },
    conformInput() {
      this.conformedName = this.name;
    },
  },
});

app.mount("#events");
