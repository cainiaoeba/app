<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>关于我们</div>
      </template>
    </NavBarVue>
    <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', padding: '0 16px' }" >关于码路</van-divider>
    <p>码路教育，专注前端培训</p>
    <van-divider :style="{ color: '#1baeae', borderColor: '#1baeae', padding: '0 16px' }" >联系</van-divider>
    <p>微信：itxingguang</p>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
export default {
  name: "About",
  components: {
    NavBarVue,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.van-divider{
  font-size: 20px;
}
p{
  font-size: 15px;
  padding-left: 20px;
}
</style>