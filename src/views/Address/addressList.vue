<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>地址管理</div>
      </template>
    </NavBarVue>
    <van-address-list
      v-model="a"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="toOrder($event.id)"
    />
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import { getAddress } from "../../api/index.js";
export default {
  name: "addressList",
  components: {
    NavBarVue,
  },
  data() {
    return {
      chosenAddressId: "", //被选中的地址
      list: [], //地址列表数据
    };
  },
  methods: {
    // 新增地址按钮
    onAdd() {
      this.$router.push({
        path: "/addressEdit",
        query: { flag: false },
      });
    },
    //编辑地址按钮
    onEdit(item, index) {
      this.$router.push({
        path: "/addressEdit",
        query: {
          flag: true,
          addressId: item.id,
        },
      });
    },
    //切换地址跳转生成订单页
    toOrder(id) {
      this.$router.push("/create-order?addressId=" + id);
    },
  },
  created() {
    //获取地址列表数据
    getAddress().then((res) => {
      if (res.resultCode == 200) {
        this.list = res.data.map((item) => {
          return {
            id: item.addressId,
            name: item.userName,
            tel: item.userPhone,
            address: item.provinceName + item.cityName + item.regionName,
            isDefault: item.defaultFlag == 1 ? true : false,
          };
        });
      }
    });
    // const res = this.list.filter(item => item.isDefault == true)
    // this.chosenAddressId=res[0]?.id
    this.$toast('请先选择收货地址')
  },
  computed: {
    a: {
      get() {
        return (this.chosenAddressId = this.list.filter(
          (item) => item.isDefault == true
        )[0]?.id);
      },
      set(val) {
        console.log(val);
        this.chosenAddressId = val;
      },
    },
  },
};
</script>

<style scoped lang="less">
</style>