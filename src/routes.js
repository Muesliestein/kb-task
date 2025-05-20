import Vue from "vue";
import VueRouter from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppMe from "./pages/AppMe.vue";
import StartPage from "./pages/StartPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import NewsPage from "./pages/News.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: StartPage,
    },
    {
      path: "/home",
      component: AppHome,
    },
    {
      path: "/me",
      component: AppMe,
    },
    {
      path: "/projects",
      component: ProjectPage,
    },
    {
      path: "/gallery",
      component: GalleryPage,
    },
    {
      path: "/contacts",
      component: ContactsPage,
    },
    {
      path: "/news",
      component: NewsPage,
    },
  ],
});
