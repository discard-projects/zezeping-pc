<template>
  <div>
    <div class="title">
      网友点评<span style="color: #999">(7869)</span>
    </div>
    <div>
      <comment-item></comment-item>
    </div>
  </div>
</template>

<script>
import CommentItem from './Comment/CommentItem.vue'
export default {
  components: {
    CommentItem
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-size: 16px;
    padding-bottom: 6px;
  }
</style>
