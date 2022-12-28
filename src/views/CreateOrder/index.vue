<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>生成订单</div>
      </template>
    </NavBarVue>
    <!-- 地址模块 -->
    <van-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
    />
    <!-- 商品列表 -->
    <div class="shopCart">
      <section class="cart-box" v-for="item in shopCart" :key="item.goodsId">
        <van-card
          :num="item.goodsCount"
          :price="item.sellingPrice"
          :title="item.goodsName"
          :thumb="item.goodsCoverImg"
        >
        </van-card>
      </section>
    </div>
    <!-- 底部生成订单 -->
    <van-submit-bar :price="allPrice" button-text="生成订单" @submit="onSubmit" />
    <van-popup v-model="show" position="bottom" :style="{ height: '24%' }" >
      <div @click="goOrder(item.name)" v-for="(item,index) in pays" :key="index">{{ item.name }}</div>
      <section></section>
      <div @click="offGoOrder">取消</div>
    </van-popup>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import { getAddressId, getSettle,saveOrder,paySuccess } from "../../api/index";
export default {
  name: "Order",
  components: {
    NavBarVue,
  },
  data() {
    return {
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
      shopCart: [], //结算商品数据
      allPrice: Number(localStorage.getItem('allPrice')),//结算总金额
      show: false,//是否展示弹出层
      cartItemIds: '',//结算的商品id
      addressId: this.$route.query.addressId,//结算地址id
      pays: [
        {
          name:'微信支付'
        },
        {
          name:'支付宝支付'
        }
      ],//支付方式的数据
      orderNo:'',//订单编号
    };
  },
  methods: {
    //编辑地址
    onEdit() { 
      this.$router.push('addressList')
    },
    //生成订单按钮
    onSubmit() { 
      this.show = true
      saveOrder({addressId: this.addressId, cartItemIds: this.cartItemIds.split(',')}).then(res => {
        console.log('sava', res)
        if (res.resultCode === 200) {
          this.orderNo=res.data
        }
      })
    },
    // 支付跳转我的订单页
    goOrder(paysName) { 
      if (paysName == '微信支付') { 
        paySuccess(this.orderNo,1).then(res => {
          if (res.resultCode == 200) {
            console.log(res)
            this.$toast('微信支付成功')
            setTimeout(() => {
              this.$router.push('/order')
            }, 500);
          }
        })
      } else if (paysName == '支付宝支付') {
        this.$toast('支付宝支付成功')
        paySuccess(this.orderNo,2).then(res => {
          if (res.resultCode == 200) {
            console.log(res)
            this.$toast('支付宝支付成功')
            setTimeout(() => {
              this.$router.push('/order')
            }, 500);
          }
        })
      }
    },
    // 取消跳转我的订单页
    offGoOrder() {
      this.$router.push('/order')
    }
  },
  created() {
    this.cartItemIds=localStorage.getItem("cartItemIds")
    //获取结算商品信息
    getSettle(this.cartItemIds).then((res) => {
      if (res.resultCode === 200) {
        this.shopCart = res.data;
      }
    });
    //获取结算地址信息
    getAddressId(this.addressId).then((res) => {
      if (res.resultCode == 200) {
        this.currentContact = {
          name: res.data.userName,
          tel:
            res.data.userPhone +
            res.data.provinceName +
            res.data.cityName +
            res.data.regionName,
        };
      }
    });
  },
};
</script>

<style scoped lang="less">
.van-popup.van-popup--bottom{
  border-radius: 15px 15px 0 0;
  text-align: center;
  color: #323233;
  font-size: 16px;
  div{
    padding: 14px 16px;
  }
  :nth-child(3){
    height: 10px;
    background: #f7f8fa;
  }
}
.van-button__content{
  height: 50px;
}
.van-submit-bar__bar{
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
.van-submit-bar__text{
  border-top: 1px solid #ccc;

    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
  }
.van-submit-bar {
  position: fixed;
  bottom:10px;
  width: 100%;
}
.van-submit-bar__button{
  width: 100%;
  height: 100px;
}
.shopCart {
  margin-bottom: .5rem;
  
  .cart-box {
    margin: 10px 0;
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
</style>