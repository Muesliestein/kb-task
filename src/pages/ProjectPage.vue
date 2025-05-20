<template>
  <div>
    <NavBar />
    <div class="container centered-content">
      <p>Песочница, балуюсь всякими функциями</p>
      <div>{{ counter }}</div>
      <button @click="count">Нажми</button>
    </div>
    <footer>Zavaleev Vladimir 2025(c)</footer>
  </div>
</template>

<script>
import NavBar from "../components/m-navigation.vue";

export default {
  name: "ProjectPage",
  components: {
    NavBar,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    count() {
      this.counter++;
    },
  },
};
</script>

<style scoped></style>
