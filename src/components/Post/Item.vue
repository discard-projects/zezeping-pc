<template>
  <div class="post-item" v-if="item">
    <div class="title clearfix">
      <h3 class="fl">{{item.title}}</h3>
      <p class="fr">
        <i class="iconfont icon-view">{{item.views_count}}</i>
        <i class="iconfont icon-vote">{{item.votes_count}}</i>
        <i class="iconfont icon-comment">{{item.discussions_count}}</i>
        <i class="iconfont icon-collection">0</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-item {
    cursor: pointer;
    padding: 0 6px;
    .title {
      line-height: 36px;

      i {
        margin: 0 5px;
      }
    }

    &:hover {
      opacity: 0.8;
      background: #f2f2f2;
    }
  }
</style>
