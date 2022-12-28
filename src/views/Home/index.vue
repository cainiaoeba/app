<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in carousels" :key="index">
        <img :src="item.carouselUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-grid column-num="5">
      <van-grid-item
        v-for="(item, index) in icon"
        :key="index"
        :icon="item.icon"
        :text="item.text"
      />
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
import Goods from "../../components/Goods.vue";
import { infos } from "../../api/index.js";
export default {
  name: "view-home",
  components: {
    Goods,
  },
  data() {
    return {
      carousels: [], //轮播图数据
      hotGoodses: [],
      newGoodses: [],
      recommendGoodses: [],
      icon: [
        {
          icon: "shopping-cart",
          text: "码路超市",
        },
        {
          icon: "manager",
          text: "码路服饰",
        },
        {
          icon: "wechat-pay",
          text: "全球购",
        },
        {
          icon: "award",
          text: "码路生鲜",
        },
        {
          icon: "logistics",
          text: "直邮到家",
        },
        {
          icon: "after-sale",
          text: "充值缴费",
        },
        {
          icon: "bag-o",
          text: "9.9元拼",
        },
        {
          icon: "coupon-o",
          text: "领卷",
        },
        {
          icon: "bill-o",
          text: "省钱",
        },
        {
          icon: "goods-collect",
          text: "全部",
        },
      ], //宫格数据
    };
  },
  created() {
    infos().then((res) => {
      if (res.resultCode === 200) {
        this.carousels = res.data.carousels;
        this.hotGoodses = res.data.hotGoodses;
        this.newGoodses = res.data.newGoodses;
        this.recommendGoodses = res.data.recommendGoodses;
      }
    });
    if(localStorage.getItem('xftoken'))
    this.$store.dispatch("shopCartAsync");
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
/deep/.van-grid-item__icon {
  color: #1baeae;
}
</style>