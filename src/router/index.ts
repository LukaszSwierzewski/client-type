import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Editor.vue";
import Article from "@/views/Article.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:id",
    name: "Article",
    component: Article
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
