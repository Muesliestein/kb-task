<template>
  <div>
    <NavBar />
    <div class="container centered-content">
      <section id="about-me">
        <h2>Обо мне</h2>
        <p>
          Привет! Меня зовут Владимир — я младший фронтенд-разработчик в
          <em>Лиге цифровой экономики</em>. Уже год работаю с Vue 2 на
          коммерческом проекте и активно прокачиваю стек: изучаю Vue 3 и
          TypeScript.
        </p>

        <p>
          В проекте полноценно взаимодействую с бэкенд-командой, аналитиками и
          тестированием. Больше всего меня вдохновляют задачи, где можно
          поработать с данными, добавить выразительные анимации и вложить
          креатив.
        </p>

        <p>
          В коде придерживаюсь принципа “семь раз отмерь — один раз отрежь”:
          внимание к деталям и чистота реализации — мои приоритеты.
        </p>

        <p>
          Помимо фронтенда, я создаю эмбиент-видео по играм, которые публикую на
          YouTube и ВКонтакте:<br />
          <a
            href="https://www.youtube.com/@TreeOfEmpty/"
            class="container_a"
            target="_blank"
            rel="noopener noreferrer"
            >TreeOfEmpty на YouTube</a
          >
          |
          <a
            href="https://vkvideo.ru/@treeofempty"
            class="container_a"
            target="_blank"
            rel="noopener noreferrer"
            >TreeOfEmpty ВКонтакте</a
          >
        </p>

        <p>
          Также я играю на электрогитаре в группе <em>Fall Against The Sky</em>,
          бегаю, хожу в зал и люблю хороший чай. Моя цель сейчас — углубить
          навыки и вырасти как сильный фронт.
        </p>
      </section>
    </div>
    <footer>Zavaleev Vladimir 2025(c)</footer>
  </div>
</template>

<script>
import NavBar from "../components/m-navigation.vue";

export default {
  name: "AppMe",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 50px auto;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}

.container_a {
  color: #4caf50;
  text-decoration: none;
  margin: 0 5px;
}

.container_a:hover {
  opacity: 0.5;
}

#about-me {
  padding: 20px 0;
}
</style>
