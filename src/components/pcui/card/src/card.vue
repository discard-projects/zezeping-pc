<template>
  <div class="pc-card">
    <div class="card-header" v-if="title">
      <slot name="title">{{title}}</slot>
      <span class="close">
        <i class="iconfont icon-close"></i>
      </span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PcCard',
  props: {
    title: {
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .pc-card {
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    color: #303133;

    .card-header {
      font-size: 18px;
      color: #303133;
      margin-bottom: 15px;

      .close {
        @include tap;
        float: right;
      }
    }
  }
</style>
