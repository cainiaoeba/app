<template>
  <div>
    <van-nav-bar @click-left="$router.push('/home')" title="标题" left-text="返回" left-arrow fixed placeholder >
      <template #title>
        <div>
          <slot name="title"></slot>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
</style>