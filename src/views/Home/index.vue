<template>
  <div>
    <header class="header-box" :class="{ active: isTop }">
      <van-icon name="wap-nav" :color="isTop ? '#fff' : '#1baeae'" size="14" />
      <input type="text" placeholder="码路严选" />
      <van-icon
        name="manager-o"
        :color="isTop ? '#fff' : '#1baeae'"
        size="18"
      />
    </header>
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
      isTop: false,
    };
  },
  methods: {
    changeTop() {
      console.log("顶部距离变化了");
      const t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > 50) {
        // 附加背景色
        this.isTop = true;
      } else {
        // 相反移除背景色
        this.isTop = false;
      }
    },
  },
  created() {
    //添加scroll事件监听
    window.addEventListener("scroll", this.changeTop);
    //获取首页数据
    infos().then((res) => {
      if (res.resultCode === 200) {
        this.carousels = res.data.carousels;
        this.hotGoodses = res.data.hotGoodses;
        this.newGoodses = res.data.newGoodses;
        this.recommendGoodses = res.data.recommendGoodses;
      }
    });
    if (localStorage.getItem("xftoken")) this.$store.dispatch("shopCartAsync");
  },
  beforeDestroy() {
    //删除scroll事件监听
    window.removeEventListener("scroll", this.changeTop);
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
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  input {
    border: 0;
    border-radius: 20px;
    width: 270px;
    padding-left: 10px;
    padding: 5px 20px 5px 10px;
    font-size: 19px;
    font-weight: 700;
    box-sizing: border-box;
    background: #a7cdcd;
  }
  input::-webkit-input-placeholder {
    color: #1baeae;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #1baeae;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #1baeae;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #1baeae;
  }
}
.active {
  background: #1baeae;
}
</style>