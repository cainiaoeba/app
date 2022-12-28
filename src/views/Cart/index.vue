<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>购物车</div>
      </template>
    </NavBarVue>
    <section v-if="shopCart.length>0">
      <div class="shopCart">
        <section class="cart-box" v-for="item in shopCart" :key="item.goodsId">
          <van-swipe-cell id="swipe">
            <van-checkbox v-model="item.done"></van-checkbox>
            <van-card
              :num="item.goodsCount"
              :price="item.sellingPrice"
              :title="item.goodsName"
              :thumb="item.goodsCoverImg"
            >
              <template #footer>
                <van-stepper
                  v-model="item.goodsCount"
                  @plus="plus(item)"
                  @minus="minus(item)"
                />
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="Del(item.cartItemId)"
              />
            </template>
          </van-swipe-cell>
        </section>
      </div>
      <van-submit-bar
        :price="allPrice"
        button-text="结算"
        @submit="onSubmit"
        :disabled="allPrice > 0 ? false : true"
      >
        <van-checkbox v-model="allDone">全选</van-checkbox>
      </van-submit-bar>
    </section>
    <div class="isShow-sky" v-else>
      <span>🤷</span>
      <p>购物车空空如也</p>
      <div @click="$router.push('/home')">前往首页</div>
    </div>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import { changeGoodsCount, delGoods } from "../../api/index.js";
export default {
  name: "cart",
  components: {
    NavBarVue,
  },
  data() {
    return {
      value: 1,
      cartItemIds: [], //所勾选的商品id数据
    };
  },
  computed: {
    //购物车数据
    shopCart() {
      return this.$store.state.shopCart;
    },
    // 全选反选
    allDone: {
      get() {
        return this.shopCart.every((item) => item.done);
      },
      set(val) {
        console.log(val);
        this.shopCart.forEach((item) => (item.done = val));
      },
    },
    // 商品总价
    allPrice() {
      return this.shopCart.reduce((a, b) => {
        return a + (b.done == true ? b.goodsCount * b.sellingPrice * 100 : 0);
      }, 0);
    },
  },
  methods: {
    //根据cartItemId删除商品
    Del(id) {
      delGoods(id).then((res) => {
        if (res.resultCode === 200) {
          this.$toast("删除成功");
          //刷新页面，重新获取购物车数据
          this.$store.dispatch("shopCartAsync");
        }
      });
    },
    // 结算按钮
    onSubmit() {
      // 过滤所勾选商品的id
      this.$store.state.shopCart.filter((item) => {
        if (item.done) {
          this.cartItemIds.push(item.cartItemId);
        }
      });
      // 持久化存储商品id
      localStorage.setItem("cartItemIds", this.cartItemIds);
      // 勾选的商品总价
      localStorage.setItem("allPrice", this.allPrice);
      this.$router.push("/addressList");
    },
    //增加商品数量
    plus(item) {
      changeGoodsCount({
        cartItemId: item.cartItemId,
        goodsCount: item.goodsCount + 1,
      }).then();
    },
    // 减少商品数量
    minus(item) {
      changeGoodsCount({
        cartItemId: item.cartItemId,
        goodsCount: item.goodsCount - 1,
      }).then();
    },
  },
  created() {
    //获取购物车数据
    this.$store.dispatch("shopCartAsync");
  },
};
</script>

<style scoped lang="less">
.isShow-sky{
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  div{
    text-align: center;
    padding: 10px 30px;
    background: #1baeae;
    color: #fff;
    font-size: 14px;
  }
  p{
    margin: 10px;
    font-size: 18px;
  }
}
/deep/.van-swipe-cell__wrapper {
  align-items: center;
  width: 100%;
  display: flex;
}
.van-submit-bar {
  position: fixed;
  bottom: 1.3rem;
}
.shopCart {
  margin-bottom: 0.6rem;
  .cart-box {
    padding: 0 0.15rem;
    .div#swipe {
      width: 100%;
    }
    .van-card {
      width: 100%;
      margin-left: 0.05rem;
      .van-card__price {
        color: red;
      }
    }
  }
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>