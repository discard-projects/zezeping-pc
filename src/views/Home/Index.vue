<template>
  <div style="margin-bottom: 30px" v-if="home && home.banners.length">
    <el-carousel class="carousel" :interval="5000">
      <el-carousel-item v-for="banner in home.banners" :key="banner.id">
        <img :src="banner.image.url" alt="" style="width: 100%; min-height: 100%">
      </el-carousel-item>
    </el-carousel>
    <div class="main-body" v-if="home">
      <category :name="category.name" v-for="category in home.categories" :key="category.id"></category>
    </div>
  </div>
</template>

<script>
import index from '@/components/Shared/Mixin/index'
import query from '@/components/Shared/Mixin/query'
import Category from './parts/category.vue'
import { Carousel, CarouselItem } from 'element-ui'
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
    Category,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  max-height: 300px;
}
</style>
