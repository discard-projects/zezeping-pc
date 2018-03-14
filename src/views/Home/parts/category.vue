<template>
  <pc-card>
    <div class="header">
      <div class="title">
        <img :src="category.logo_thumb.url" v-if="category.logo_thumb.url">
        <span>{{category.name}}</span>
      </div>
    </div>
    <div class="body">
      <store-card v-for="store in tableData.data" :store="store" :key="store.id"></store-card>
      <div>
        <pagination :q="q" :paginateMeta="paginateMeta" :pageSizes="[12]" :pushRouter="fetchData" layout="prev, pager, next" v-if="paginateMeta.total_pages > 1"></pagination>
      </div>
    </div>
  </pc-card>
</template>

<script>
import StoreCard from '@/components/Shared/zeui/card/store-card'
import index from '@/components/Shared/Mixin/index'
import query from '@/components/Shared/Mixin/query'
export default {
  mixins: [index, query],
  props: {
    category: {
      require: true
    }
  },
  data () {
    return {
      q: {
        per_page: 12
      }
    }
  },
  methods: {
    fetchData () {
      this._fetchData(this.api.getHomeStores(Object.assign({}, this.q, {category_name: this.category.name})))
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
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    line-height: 30px;
    font-size: 20px;
  }
}
.body {
}
</style>
