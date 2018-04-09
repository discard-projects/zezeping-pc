<template>
  <div class="post-item" v-if="item">
    <div class="title clearfix">
      <div class="fl">
        <span class="category">{{item.category_name}}</span>
        <ul style="display: inline-block; list-style-type: circle; padding-left: 20px;">
          <li>
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <p class="fr">
        <i class="iconfont icon-view">{{item.views_count}}</i>
        <i class="iconfont icon-vote">{{item.votes_count}}</i>
        <i class="iconfont icon-comment">{{item.discussions_count}}</i>
        <i class="iconfont icon-collection">{{item.collections_count}}</i>
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
      font-size: 15px;
      color: #666;
      border-bottom: 1px solid #f2f2f2;

      i {
        margin: 0 5px;
      }

      .category {
        font-size: 14px;
        color: #999;
        line-height: 0;
      }
    }

    &:hover {
      opacity: 0.8;
      background: #f2f2f2;
    }
  }
</style>
