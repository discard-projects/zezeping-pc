<template>
  <div>
    <div class="main-body" v-if="home">
      <category :name="category.name" v-for="category in home.categories" :key="category.id"></category>
    </div>
  </div>
</template>

<script>
import index from '@/components/Shared/Mixin/index'
import query from '@/components/Shared/Mixin/query'
import Category from './parts/category.vue'
export default {
  mixins: [index, query],
  data () {
    return {
      home: null
    }
  },
  methods: {
    getHome () {
      this.api.getHome().then(res => {
        this.home = res.data
      })
    }
  },
  mounted () {
    this.getHome()
  },
  components: {
    Category
  }
}
</script>
