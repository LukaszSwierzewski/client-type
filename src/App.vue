<template>
  <div id="app">
    <MenuNav :someProp="'10'"></MenuNav>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import MenuNav from "./components/AppNavbar.vue";

//@ts-ignore
import AppFooter from "./components/AppFooter.vue";
@Component({
  components: {
    MenuNav,
    AppFooter
  }
})
export default class App extends Vue {}
</script>
