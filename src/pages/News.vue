<template>
  <div>
    <NavBar />

    <div class="container centered-content">
      <div class="filters">
        <label for="userId">Пользователь:</label>
        <select v-model="filters.userId" @change="resetPage">
          <option value="">Все</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>

        <label for="title">Заголовок:</label>
        <input
          type="text"
          v-model="filters.title"
          @input="resetPage"
          placeholder="Фильтровать по заголовку"
        />
      </div>

      <div class="posts" ref="scrollContainer" @scroll="handleScroll">
        <div v-for="item in filteredPosts" :key="item.id" class="post">
          <h3>{{ item.title }}</h3>
          <h4>{{ getUserName(item.userId) }}</h4>
          <p>{{ item.body }}</p>
        </div>
        <div v-if="loading" class="loading">Загрузка...</div>
      </div>
    </div>
    <footer>Zavaleev Vladimir 2025(c)</footer>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/m-navigation.vue";

export default {
  name: "NewsPage",
  components: { NavBar },
  data() {
    return {
      posts: [],
      users: [],
      filters: {
        userId: "",
        title: "",
      },
      page: 1,
      limit: 10,
      loading: false,
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => {
        return (
          (!this.filters.userId || post.userId === this.filters.userId) &&
          (!this.filters.title ||
            post.title.toLowerCase().includes(this.filters.title.toLowerCase()))
        );
      });
    },
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        this.users = response.data;
      } catch {
        console.log("Ошибка при загрузке пользователей:");
      }
    },
    async fetchPosts() {
      if (this.loading) return;
      this.loading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
              ...(this.filters.userId && { userId: this.filters.userId }),
              ...(this.filters.title && { title_like: this.filters.title }),
            },
          },
        );
        this.posts = [...this.posts, ...response.data];
        this.page += 1;
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
      } finally {
        this.loading = false;
      }
    },
    getUserName(userId) {
      // eslint-disable-next-line no-shadow
      const user = this.users.find((user) => user.id === userId);
      return user ? user.name : "Неизвестный пользователь";
    },
    handleScroll(event) {
      const container = event.target;
      const bottom =
        container.scrollHeight === container.scrollTop + container.clientHeight;
      if (bottom) {
        this.fetchPosts();
      }
    },
    resetPage() {
      this.page = 1;
      this.posts = [];
      this.fetchPosts();
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchPosts();
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
}
.filters label {
  margin-right: 10px;
}
.filters select,
.filters input {
  margin-right: 20px;
}
.posts {
  max-height: 80vh;
  overflow-y: auto;
}
.post {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.loading {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
}
</style>
