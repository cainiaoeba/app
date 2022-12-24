<template>
  <div class="goods-box">
    <div class="title">
      <slot name="title">默认标题</slot>
    </div>
    <ul>
      <router-link
        v-for="item in itemGoods"
        :key="item.goodsId"
        :to="'/info/'+item.goodsId" 
        class="goods-item"
      >
        <img :src="item.goodsCoverImg" alt="" />
        <span>{{ item.goodsName }}</span>
        <p>{{ item.sellingPrice }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props: {
    itemGoods: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.goods-box {
  text-align: center;
  .title{
    background: #f9f9f9;
    color: #1baeae;
    padding: 10px 0;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    .goods-item {
      width: 50%;
      font-size: 14px;
      text-align: center;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
      color: #444;
      img {
        width: 120px;
        margin: 0 auto;
      }
      p{
        color: #1baeae;
      }
    }
    .goods-item:nth-child(odd){
      border-right: 1px solid #ccc;
    }
  }
}
</style>