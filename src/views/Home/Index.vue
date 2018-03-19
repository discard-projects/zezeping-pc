<template>
  <div style="margin-bottom: 30px">
    <div class="carousel-container">
      <div v-if="home && home.banners.length">
        <div class="qrcode-dingyuehao-box">
          <span style="width: 0">&nbsp;</span>
          <div class="qrcode-dingyuehao" style="display: inline-block">
            <img src="~assets/images/qrcode_for_dingyuehao.jpg" alt="" style="width: 150px">
            <p style="text-align: center; color: #888">关注我们</p>
          </div>
          <div class="qrcode-personal" style="display: inline-block">
            <img src="~assets/images/qrcode_for_personal.jpg" alt="" style="width: 150px">
            <p style="text-align: center; color: #888">微信客服</p>
          </div>
        </div>
        <el-carousel type="card" class="carousel" :interval="5000">
          <el-carousel-item v-for="banner in home.banners" :key="banner.id">
            <div style="width: 100%; height: 100%;">
              <img :src="banner.image.url" alt="" style="width: 100%; height: 100%;">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="main-body" v-if="home">
      <div class="main-panel" style="width: 1232px">
        <category :category="category" v-for="category in home.categories" :key="category.id" style="margin-bottom: 20px"></category>
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
.qrcode-dingyuehao-box {
  text-align: right;
  height: 0;
  .qrcode-dingyuehao {
    display: inline-block;
    position: absolute;
    transform: translate(22px, 22px);
  }
  .qrcode-personal {
    position: absolute;
    transform: translate(22px, 212px);
  }
}

.carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .carousel {
    flex: 1232px;
    width: 1232px;
    min-width: 1232px;
    max-width: 1232px;
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
