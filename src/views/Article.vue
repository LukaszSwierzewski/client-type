<template>
  <div class="article-page">
    <h1>dsasdaasd</h1>
    {{ $route.params.id }}
    {{ post }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Route } from "vue-router";
import { IOnePost } from "../types/Post";
import Service from "../services/api";
interface WithRoute {
  $route: Route;
}
@Component({})
export default class Article extends Vue {
  // post = {
  //   _id: "",
  //   title: "",
  //   description: "",
  //   visible: ""
  // };
  post = [];
  async getPost() {
    const response = await Service.getPost(this.$route.params.id);
    this.post = response.data;
  }
  mounted() {
    this.getPost();
  }
}
</script>
