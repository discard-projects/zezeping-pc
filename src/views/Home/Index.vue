<template>
  <div style="margin-bottom: 30px">
    <div class="carousel-container">
      <el-carousel type="card" class="carousel" :interval="5000" v-if="home && home.banners.length">
        <el-carousel-item v-for="banner in home.banners" :key="banner.id">
          <div style="width: 100%; height: 100%;">
            <img :src="banner.image.url" alt="" style="width: 100%; height: 100%;">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
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
.carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .carousel {
    width: 1232px;
  }
}
</style>

<style lang="scss">
  .carousel-container {
    .el-carousel__mask {
      opacity: 0.7;
    }
  }
</style>
