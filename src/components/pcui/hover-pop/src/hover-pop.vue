<template>
  <div class="pc-hover-pop" @mouseover="showPanel = true" @mouseout="showPanel = false">
    <slot></slot>
    <div class="panel" v-if="showPanel">
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PcHoverPop',
  data () {
    return {
      showPanel: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .pc-hover-pop {
    position: relative;
    z-index: 100;
    &:hover {
      background: #fff;
    }
    .panel {
      position: absolute;
      background: #fff;
      left: 0;
      min-width: 100%;
      text-align: center;
    }
  }
</style>
