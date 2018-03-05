<template>
  <div v-if="store">
    <div class="title">
      {{store.name}}
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
        {{store.address}}
      </p>
      <p style="margin: 8px 0;">
        电话： {{store.store_detail.phones.join(',')}}
      </p>
      <div>
        <span>图片：</span>
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
    font-size: 20px;
    padding-bottom: 6px;
  }
  .info {
    color: #999;
    font-size: 14px;
    line-height: 16px;
  }
</style>
