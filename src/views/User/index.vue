<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>我的</div>
      </template>
    </NavBarVue>

    <section>
      <div class="myInfo">
        <img src="../../assets/use.png" alt="" />
        <div class="info">
          <span>昵称: {{ username }}</span>
          <span>登录名: {{ username }}</span>
          <span>个性签名：随新所欲，蜂富多彩</span>
        </div>
      </div>
      <ul>
        <li @click="$router.push('/order')">
          <span>我的订单</span>
          <van-icon name="arrow" />
        </li>
        <li @click="$router.push('/id')">
          <span>账号管理</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>地址管理</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>关于我们</span>
          <van-icon name="arrow" />
        </li>
      </ul>
    </section>
  </div>
</template> 

<script>
import NavBarVue from "@/components/NavBar.vue";
export default {
  name: "view-user",
  components: {
    NavBarVue,
  },
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
};
</script>

<style scoped lang="less">
.myInfo {
  padding: 25px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  background: linear-gradient(90deg,#1baeae,#51c7c7);
  box-shadow: 0 2px 8px #269090;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .info {
    display: flex;
    flex-direction: column;
    span{
      box-sizing: border-box;
      padding: 2px 0;
    }
  }
}
section{
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  color: #2c3E50;
  ul{
    box-sizing: border-box;
    padding: 10px;
    li{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(215, 214, 214);
      padding: 13px 0;
    }
  }
}
</style>