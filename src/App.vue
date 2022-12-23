<template>
  <div id="app">
    <router-view></router-view>
    <div class="sky"></div>
    <TabBarVue v-if="isShow"></TabBarVue>
  </div>
</template>

<script>
import TabBarVue from './components/TabBar.vue';
export default {
  name: "App",
  components: {
    TabBarVue
  },
  data() { 
    return {
      isShow:false
    }
  },
  watch: {
    $route: function (val) {
      console.log(val)
      this.isShow=val.meta.isShow
    }
  }
};
</script>

<style>
.sky{
  height: 50px;
  width: 100%;
}
</style>
