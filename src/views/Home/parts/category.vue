<template>
  <pc-card>
    <div class="header">
      <div class="title">
        <span>美食</span>
      </div>
    </div>
    <div class="body">
      <shop-card v-for="i in 10" :key="i"></shop-card>
    </div>
  </pc-card>
</template>

<script>
import ShopCard from '@/components/Shared/zeui/card/shop-card'
export default {
  components: {
    ShopCard
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 30px;
  margin-bottom: 15px;
  .title {
    padding-left: 40px;
    background: url("../../../assets/images/category/meishi.png") no-repeat;
    line-height: 30px;
    font-size: 20px;
  }
}
.body {
  text-align: center;
}
</style>
