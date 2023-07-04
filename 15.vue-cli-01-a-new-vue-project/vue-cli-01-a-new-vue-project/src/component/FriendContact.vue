<template>
  <section>
    <ui>
      <li>
        <h2>{{ name }}{{ isFavourtie ? "(favourite)" : "" }}</h2>
        <button @click="toggleFavourite">toggle favorate</button>
        <button @click="toggleDetails">
          {{ detailsArevisible ? "hide" : "show" }} details
        </button>
        <ui v-if="detailsArevisible">
          <li><strong> phone:</strong>{{ phonenumber }}</li>
          <li><strong> Email:</strong>{{ emailadres }}</li>
        </ui>
      </li>
    </ui>
  </section>
</template>

<script>
export default {
  name: "FriendContact",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    emailadres: {
      type: String,
      required: true,
    },
    isFavourtie: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsArevisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsArevisible = !this.detailsArevisible;
    },
    toggleFavourite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
