<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>我的订单</div>
      </template>
    </NavBarVue>

    <van-tabs>
      <van-tab @click="changeTab(item.status)" v-for="(item, index) in tabs" :title="item.text" :key="index">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item.orderId" :title="item">
            <template #default>
              <div class="shopCart">
                <section class="cart-box" v-for="item2 in item.newBeeMallOrderItemVOS" :key="item2.orderId">
                  <p></p>
                  <van-card
                    :num="item2.goodsCount"
                    :price="item2.sellingPrice"
                    :title="item2.goodsName"
                    :thumb="item2.goodsCoverImg"
                  >
                  </van-card>
                </section>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-tab>
    </van-tabs>
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
      list: [],
      loading: false,
      finished: false,
      pageNumber: '1',
      status:''
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    //切换tab发请求
    changeTab(status) { 
      getOrderList(this.pageNumber, status).then(res => {
        console.log('tab', res)
        if (res.resultCode == 200) {
          this.list=res.data.list
        }
      })
    }
  },
  created() { 
    this.changeTab()
  }
};
</script>

<style scoped lang="less">
</style>