<template>
  <div>
    <NavBar />
    <div class="container centered-content">
      <p class="home-intro">
        Привет! Вы находитесь на моем проекте, созданном в рамках "Курса
        молодого бойца" в Лиге цифровой экономики.
        <br /><br />
        Здесь представлены основные разделы:
        <br />
        — <strong>Блог</strong> — бесконечный скролл с API и фильтрацией;<br />
        — <strong>Песочница</strong> — отработка кода и баловство;<br />
        — <strong>Обо мне</strong> — информация обо мне;<br />
        — <strong>Галерея</strong> — просмотр, загрузка и удаление изображений.
        <br /><br />
        При реализации галереи и работы с модальными окнами я опирался на опыт,
        полученный в Яндекс Практикуме. Понимание API-запросов и бесконечного
        скролла пришло из задач на коммерческом проекте. А жизненный цикл
        компонентов Vue стал понятен благодаря десяткам часов на YouTube и
        документации.
        <br /><br />
        Основной упор сделан на архитектуру и применение технологий (Vue 2, Vue
        Router, Vuex, axios), поэтому визуальная часть минималистична.
      </p>
    </div>
    <footer>Zavaleev Vladimir 2025(c)</footer>
  </div>
</template>

<script>
import NavBar from "../components/m-navigation.vue";

export default {
  name: "AppHome",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.home-intro {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  text-align: center;
  white-space: pre-line;
}
</style>
