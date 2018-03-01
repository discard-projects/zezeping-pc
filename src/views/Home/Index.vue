<template>
  <div>
    <div class="main-body">
      <category></category>
    </div>
  </div>
</template>

<script>
import index from '@/components/Shared/Mixin/index'
import query from '@/components/Shared/Mixin/query'
import Category from './parts/category.vue'
export default {
  mixins: [index, query],
  components: {
    Category
  }
}
</script>

<style lang="scss" scoped>
  .main-body {
    max-width: 1232px;
     margin: 30px auto 0;
  }
</style>
