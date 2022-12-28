<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in carousels" :key="index">
        <img :src="item.carouselUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-grid column-num="5">
      <van-grid-item v-for="item in 10" :key="item" icon="photo-o" text="文字" />
    </van-grid>
    <!-- 新品推荐 -->
    <Goods :itemGoods="newGoodses">
      <template #title>
        <div>
          <h2>新品推荐</h2>
        </div>
      </template>
    </Goods>
    <!-- 热销商品 -->
    <Goods :itemGoods="hotGoodses">
      <template #title>
        <div>
          <h2>热销商品</h2>
        </div>
      </template>
    </Goods>
    <!-- 最新推荐 -->
    <Goods :itemGoods="recommendGoodses">
      <template #title>
        <div>
          <h2>最新推荐</h2>
        </div>
      </template>
    </Goods>
  </div>
</template>

<script>
import Goods from '../../components/Goods.vue'
import { infos } from "../../api/index.js";
export default {
  name: "view-home",
  components: {
    Goods
  },
  data() {
    return {
      carousels: [], //轮播图数据
      hotGoodses:[],
      newGoodses: [],
      recommendGoodses:[],
    };
  },
  created() {
    infos().then((res) => {
      if (res.resultCode === 200) {
        this.carousels = res.data.carousels;
        this.hotGoodses = res.data.hotGoodses
        this.newGoodses = res.data.newGoodses
        this.recommendGoodses=res.data.recommendGoodses
      }
    });
    this.$store.dispatch('shopCartAsync')
  },
};
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    display: block;
  }
}
</style>