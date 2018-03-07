<template>
  <pc-card>
    <div class="header">
      <div class="title">
        <span>{{title}}</span>
      </div>
    </div>
    <div class="body">
      <store-card v-for="store in tableData.data" :store="store" :key="store.id"></store-card>
      <div>
        <pagination :q="q" :paginateMeta="paginateMeta" :pageSizes="[12]" :pushRouter="fetchData" layout="prev, pager, next"></pagination>
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
    name: {
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
  computed: {
    title () {
      switch (this.name) {
        case 'Food':
          return '美食'
      }
    }
  },
  methods: {
    fetchData () {
      this._fetchData(this.api.getHomeStores(Object.assign({}, this.q, {category_name: this.name})))
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
