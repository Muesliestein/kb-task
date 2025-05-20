<template>
  <transition name="fade">
    <div id="app">
      <button @click="goHome">START</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "StartPage",
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152642;
  margin: 0;
  padding: 0;
}
div {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  width: 180px;
  height: 70px;
  border-radius: 20px;
  background-color: rgb(255, 238, 4);
  box-shadow: 0 0 15px rgba(203, 218, 4, 0.8);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:active {
  box-shadow: 0 0 15px rgba(89, 95, 2, 0.8);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

button:hover {
  background-color: #45b323;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
