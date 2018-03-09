<template>
  <div style="margin-bottom: 30px">
    <el-carousel class="carousel" :interval="5000" v-if="home && home.banners.length">
      <el-carousel-item v-for="banner in home.banners" :key="banner.id">
        <img :src="banner.image.url" alt="" style="width: 100%; min-height: 100%">
      </el-carousel-item>
    </el-carousel>
    <div class="main-body" v-if="home">
      <div class="main-panel" style="width: 1232px">
        <category :name="category.name" v-for="category in home.categories" :key="category.id" style="margin-bottom: 20px"></category>
        <div class="qrcode-dingyuehao" style="display: inline-block">
          <img src="~assets/images/qrcode_for_dingyuehao.jpg" alt="" style="width: 150px">
          <p style="text-align: center; color: #888">关注我们</p>
        </div>
      </div>
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
.main-panel {
  position: relative;
  .qrcode-dingyuehao {
    position: absolute;
    top: 0;
    right: -170px;
  }
}
.carousel {
  width: 100%;
  max-height: 300px;
}
</style>
