<template>
  <div v-if="store" class="store clearfix">
    <div class="title">
      <img class="logo" :src="store.logo.url" alt="">
      <span>{{store.name}}</span>
    </div>
    <pc-preview-dialog class="wechat-qrcode thumb fr" v-if="store.store_detail.wechat_qrcode.thumb.url">
      <img :src="store.store_detail.wechat_qrcode.thumb.url" alt="" style="max-height: 60px;">
      <template slot="preview">
        <img :src="store.store_detail.wechat_qrcode.url" alt="图片预览" style="max-width: 100%">
      </template>
    </pc-preview-dialog>
    <div class="info">
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <pc-rank :score="store.rank" class="br10"></pc-rank>
        <span class="br10">{{store.comments_count}}条点评</span>
        <span class="br10" v-if="store.per_expense">₱{{store.per_expense}}/人</span>
        <!--<span class="br10">口味：{{store.store_detail.rank_taste}}</span>-->
        <!--<span class="br10">环境：{{store.store_detail.rank_env}}</span>-->
        <!--<span>服务：{{store.store_detail.rank_service}}</span>-->
      </div>
      <div class="clearfix" style="margin: 8px 0;" v-if="store.store_detail.phones.length">
        电话： {{store.store_detail.phones.join(',')}}
      </div>
      <div class="clearfix" style="margin: 8px 0;" v-if="store.address">
        <span class="fl">地址：</span>
        <p style="overflow: hidden">{{store.address}}</p>
      </div>
      <div class="clearfix" style="margin: 8px 0;" v-if="store.desc">
        <span class="fl">描述：</span>
        <pre style="overflow: hidden">{{store.desc}}</pre>
      </div>
      <div class="attachment-images" v-if="store.attachment_images.length">
        <span>图片：</span>
        <ul>
          <li v-for="attachmentImage in store.attachment_images" :key="attachmentImage.id">
            <pc-preview-dialog>
              <img :src="attachmentImage.file_thumb_url" alt="" class="thumb">
              <template slot="preview">
                <img :src="attachmentImage.file_url" alt="图片预览" style="max-width: 100%">
              </template>
            </pc-preview-dialog>
          </li>
        </ul>
      </div>
      <Map :position="store.position" v-if="store.position"></Map>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Shared/Base/Map.vue'
export default {
  props: {
    store: {
      type: Object,
      require: true
    }
  },
  components: {
    Map
  }
}
</script>

<style lang="scss" scoped>
  .title {
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    padding-bottom: 6px;

    .logo {
      width: 24px;
      height: 24px;
      border-radius: 5px;
      float: left;
      margin-right: 5px;
    }
  }
  .info {
    color: #999;
    font-size: 14px;
    line-height: 16px;

    .attachment-images {
      display: flex;
      align-items: flex-start;
      ul li {
        display: inline-block;
        border: 1px solid #f2f2f2;
        margin-right: 20px;
        .thumb {
          max-height: 80px;
        }
        &:hover {
          box-shadow: 0 0 2px #999;
        }
      }
    }
  }
</style>
