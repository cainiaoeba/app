<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>我的订单</div>
      </template>
    </NavBarVue>
    <!-- tab标签分类 -->
    <van-tabs v-model="index">
      <van-tab @click="changeTab(item.status)" v-for="(item, index) in tabs" :title="item.text" :key="index">
      </van-tab>
    </van-tabs>
    <!-- 订单列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item.orderId">
        <template #default>
          <div class="shopCart">
            <p> 
              <span>{{ item.createTime }}</span>
              <span>{{ item.orderStatusString }}</span> 
            </p>
            <section class="cart-box" v-for="item2 in item.newBeeMallOrderItemVOS" :key="item2.goodsId">
              <van-card :num="item2.goodsCount" :price="item2.sellingPrice" :title="item2.goodsName" :thumb="item2.goodsCoverImg" >
              </van-card>
            </section>
          </div>
        </template>
      </van-cell>
    </van-list> 
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import { getOrderList } from '../../api/index'
export default {
  name: "order",
  components: {
    NavBarVue,
  },
  data() {
    return {
      tabs: [
        {
          text: "全部",
          status: "",
        },
        {
          text: "待付款",
          status: "0",
        },
        {
          text: "待确认",
          status: "1",
        },
        {
          text: "待发货",
          status: "2",
        },
        {
          text: "已发货",
          status: "3",
        },
        {
          text: "交易完成",
          status: "4",
        },
      ],
      list: [],//列表数据
      loading: false,//是否开启加载状态
      finished: false,//是否加载完毕
      pageNumber: 1,//获取第几页面的数据
      status: '',//订单的状态
      index:0,//不同的tab
    };
  },
  methods: {
    //自动触发1次异步
    onLoad() {
      console.log('onLoad....')
      getOrderList(this.pageNumber++, this.status).then(res => {
        console.log('tab', res)
        if (res.data.list.length == 0) {
          // 数据全部加载完成finished = true
          this.finished = true
        }
        this.list = this.list.concat(res.data.list)
        // 加载状态结束
        this.loading=false
      })
      // // 异步更新数据
      // // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    } 
  },
  watch: {
    // 监听tabs的index变化 根据变化改变status发请求
    index(val) {
      console.log(val)
      this.status = this.tabs[val].status //改变状态
      this.pageNumber = 1 //重置1页的数据
      this.list=[]  //重置列表数据
      this.finished = false //加载状态未完成
      this.loading=true //开启加载状态
      this.onLoad()
    }
  }
};
</script>

<style scoped lang="less">
.shopCart{
  p{
    display: flex;
    justify-content: space-between;
  }
}
.van-tabs{
  position: fixed;
  top: 46px;
  left: 0;
  z-index: 100;
}
.van-list{
  margin-top: 46px;
}
</style>