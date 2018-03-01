<template>
  <div class="pc-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PcCard'
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
  }
</style>
