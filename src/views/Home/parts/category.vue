<template>
  <pc-card>
    <div class="header">
      <div class="title">
        <span>{{title}}</span>
      </div>
    </div>
    <div class="body">
      <store-card v-for="store in stores" :store="store" :key="store.id"></store-card>
    </div>
  </pc-card>
</template>

<script>
import StoreCard from '@/components/Shared/zeui/card/store-card'
export default {
  props: {
    title: {
      require: true
    },
    stores: {
      type: Array,
      required: true
    }
  },
  components: {
    StoreCard
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
