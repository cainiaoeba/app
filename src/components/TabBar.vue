<template>
  <div class="tabBar">
    <router-link to="/home" tag="div" class="tab-item">
      <div class="icon iconfont icon-shouye"></div>
      <div class="text">首页</div>
    </router-link>
    <router-link to="/cate" tag="div" class="tab-item">
      <div class="icon iconfont icon-grouping"></div>
      <div class="text">分类</div>
    </router-link>
    <router-link to="/cart" tag="div" class="tab-item">
      <section class="count">
        <div class="icon iconfont icon-gouwuche"></div>
        <h1>{{ $store.getters.cartCount }}</h1>
      </section>
      <div class="text">购物车</div>
    </router-link>
    <router-link to="/user" tag="div" class="tab-item">
      <div class="icon iconfont icon-31wode"></div>
      <div class="text">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.tabBar{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 6px 6px #ccc;
  background: #fff;
  .tab-item{
    &.router-link-exact-active {
      color: #1baeae;
    }
    .icon {
      .van-icon {
        font-size: 30px;
      }
    }
    .iconfont {
      font-size: 0.55rem;
    }
    .text{
      font-size: .24rem;
    }
    .count{
      display: flex;
    }
  }
}
</style>