<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>商品详情</div>
      </template>
    </NavBarVue>
    <div class="goodsTop">
      <img :src="info.goodsCoverImg" alt="" />
      <h3>{{ info.goodsName }}</h3>
      <span>免邮费 顺丰快递</span>
      <p>{{ info.sellingPrice }}</p>
    </div>
    <ul>
      <li>概述</li>
      <li>参数</li>
      <li>安装服务</li>
      <li>常见问题</li>
    </ul>
    <div v-html="info.goodsDetailContent"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon @click="$router.push('/cart')" icon="cart-o" text="购物车" :badge="$store.getters.cartCount"/>
      <van-goods-action-button
        color="#be99ff"
        type="warning"
        text="加入购物车"
        @click="addGoods"
      />
      <van-goods-action-button @click="buy" color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { goodsDetail,shopCart } from "../../api/index.js";
import NavBarVue from "@/components/NavBar.vue";
export default {
  name: "Info",
  components: {
    NavBarVue,
  },
  data() {
    return {
      info: {},//商品数据
      isBuy:false,//控制商品是否已添加
    };
  },
  methods: {
    //添加商品
    addGoods() {
      if (!this.isBuy) {
          shopCart({goodsId:this.$route.params.id,goodsCount:1}).then(res => {
          console.log(res)
          if (res.resultCode === 200) {
            this.$toast.success('添加成功');
            this.$store.dispatch('shopCartAsync')
          }
        })
      }
      this.$toast.fail('请勿重复添加');
    },
    //立即购买按钮
    buy() { 
      this.addGoods()
      this.$router.push('/cart')
    }
  },
  created() {
    //根据id获取商品详情数据
    goodsDetail(this.$route.params.id).then((res) => {
      console.log(res);
      if (res.resultCode === 200) {
        this.info=res.data
      }
    });
    this.$store.dispatch('shopCartAsync')
  },
};
</script>

<style scoped lang="less">
.goodsTop {
  padding: 0 10px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
  h3 {
    font-size: 18px;
    color: #333333;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
  p {
    font-size: 22px;
    color: #f63515;
  }
}
ul {
  font-size: 15px;
  color: #333333;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  li {
    font-size: 15px;
    flex: 1;
    text-align: center;
    padding: 5px 0;
    border-right: 1px solid #333333;
  }
  :nth-child(4) {
    border: 0;
  }
}
</style>