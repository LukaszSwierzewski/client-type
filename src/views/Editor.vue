<template>
  <div>
    <div class="add">
      <input v-model="newPost.title" type="text" />
      <input v-model="newPost.description" typ="text" />
      <button @click="addPost()">add</button>
    </div>
    {{ msg }}
    <button @click="clickMe()">Method test</button>
    <div v-if="!posts">loading</div>
    <div class="item" v-else v-for="post in posts" :key="post._id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <button @click="deletePost(post._id)">Delete</button>
      <router-link v-bind:to="{ name: 'Article', params: { id: post._id } }">
        Detail</router-link
      >
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Service from "../services/api";
import { IPost, INewPost } from "../types/Post";

@Component({})
export default class App extends Vue {
  public posts: IPost[] = [
    //to jest test - interface dziala - dziwne w sumie
    { _id: "a", title: "b", description: "c", visible: true }
  ];
  someNum: number = 1;
  newPost: INewPost = {
    title: "",
    description: "",
    visible: false
  };
  public msg: string = "typescript vue";
  async getPosts(): Promise<Array<IPost>> {
    const response = await Service.getPosts();
    let data = response.data;
    return (this.posts = data);
  }
  clickMe(): string {
    return (this.msg = "lolol");
  }
  async addPost() {
    await Service.addPost({
      title: this.newPost.title,
      description: this.newPost.description,
      visible: this.newPost.visible
    });
    this.getPosts();
  }
  async deletePost(id: string) {
    await Service.deletePost(id);
    this.getPosts();
  }
  async created(): Promise<object> {
    return this.getPosts();
  }
}
</script>

<style scoped>
.item {
  border: 1px solid black;
  text-align: center;
}
.add {
  text-align: center;
}
</style>
