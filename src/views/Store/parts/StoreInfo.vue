<template>
  <div v-if="store">
    <div class="title">
      <img class="logo" :src="store.logo_url" alt="">
      <span>{{store.name}}</span>
    </div>
    <div class="info">
      <div style="display: flex; align-items: center">
        <pc-rank :score="store.rank" class="br10"></pc-rank>
        <span class="br10">{{store.comments_count}}条点评</span>
        <span class="br10">₱{{store.per_expense}}/人</span>
        <span class="br10">口味：{{store.store_detail.rank_taste}}</span>
        <span class="br10">环境：{{store.store_detail.rank_env}}</span>
        <span>服务：{{store.store_detail.rank_service}}</span>
      </div>
      <p style="margin: 8px 0;">
        地址：{{store.address}}
      </p>
      <p style="margin: 8px 0;">
        电话： {{store.store_detail.phones.join(',')}}
      </p>
      <div class="attachment-images" v-if="store.attachment_images.length">
        <span>图片：</span>
        <ul>
          <li v-for="attachmentImage in store.attachment_images" :key="attachmentImage.id">
            <img :src="attachmentImage.file.url" alt="">
          </li>
        </ul>
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    store: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    display: flex;
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
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
</style>
