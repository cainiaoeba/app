<template>
  <div>
    <NavBarVue>
      <template #title>
        <div>{{ $route.query.flag == "false" ? "新增地址" : "编辑地址" }}</div>
      </template>
    </NavBarVue>
    <van-address-edit
      :area-list="areaList"
      :show-delete="$route.query.flag == 'false' ? false : true"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      :address-info="addressInfo"
    />
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import { areaList } from "@vant/area-data";
import { addAddress, getAddressId } from "../../api/index";
export default {
  name: "addressEdit",
  components: {
    NavBarVue,
  },
  data() {
    return {
      areaList, //省市区数据
      searchResult: [],
      addressInfo: { }, //编辑地址数据回显
    };
  },
  methods: {
    //新增地址保存按钮
    onSave(val) {
      const options = {
        areaCode: val.areaCode,
        cityName: val.city,
        defaultFlag: 1,
        detailAddress: val.addressDetail,
        postalCode: "",
        provinceName: val.province,
        regionName: val.county,
        userName: val.name,
        userPhone: val.tel,
      };
      // 点击添加进来
      addAddress(options).then((res) => {
        if (res.resultCode === 200) {
          this.$toast("新增地址成功");
          this.$router.back();
        }
      });
    },
    onDelete() { },
    // 根据地址，得到地区编码
    getAreaCode(area) { 
      area = area.replace(/区|县/, '')
      for (let code in areaList.county_list) {
        if (areaList.county_list[code].includes(area)) {
          return code
        }
      }
    }
  },
  created() {
    this.id = this.$route.query.addressId;
    // 点击编辑进来
    if (this.id) {    
      getAddressId(this.id).then((res) => {
        if (res.resultCode === 200) {
          this.addressInfo = {
            areaCode:this.getAreaCode(res.data.regionName),
            id: res.data.addressId,
            name: res.data.userName,
            tel: res.data.userPhone,
            province: res.data.provinceName,
            city: res.data.cityName,
            county: res.data.regionName,
            addressDetail: res.data.detailAddress,
            isDefault: res.data.defaultFlag ? true : false,
          };
        }
      });
    }
  },
};
</script>

<style scoped lang="less">
</style>