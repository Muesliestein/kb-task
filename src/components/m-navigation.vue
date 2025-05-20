<template>
  <div class="navbar">
    <nav class="nav-container">
      <ul class="nav-list">
        <li><router-link to="/home" class="nav-item">Главная</router-link></li>
        <li>
          <router-link to="/news" class="nav-item">Блог</router-link>
        </li>
        <li>
          <router-link to="/projects" class="nav-item">Песочница</router-link>
        </li>
        <li><router-link to="/me" class="nav-item">Обо мне</router-link></li>

        <li class="dropdown">
          <button
            class="nav-item dropdown-toggle"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Еще
          </button>
          <transition name="dropdown_transition">
            <ul class="dropdown-menu">
              <li>
                <router-link to="/contacts" class="dropdown-item"
                  >Контакты</router-link
                >
              </li>
              <li>
                <router-link to="/services" class="dropdown-item disabled"
                  >Услуги</router-link
                >
              </li>
              <li>
                <router-link to="/gallery" class="dropdown-item"
                  >Галерея</router-link
                >
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  height: 60px;
  display: flex;
  align-items: center;
}

.nav-container {
  width: 100%;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #555;
}

.router-link-active {
  background-color: #4caf50;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.dropdown-toggle:hover {
  background-color: #555;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #444;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  z-index: 1;
  border-radius: 5px;
  padding: 10px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #555;
}

.dropdown_transition-enter-active,
.dropdown_transition-leave-active {
  transition: opacity 1.5s ease;
}

.dropdown_transition-enter,
.dropdown_transition-leave-to {
  opacity: 0;
}

.disabled {
  color: gray;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
