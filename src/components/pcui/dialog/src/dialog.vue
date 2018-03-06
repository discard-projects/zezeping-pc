<template>
  <div class="pc-dialog" v-if="currentValue" @click="currentValue = false">
    <div class="dialog-main-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import pageScroll from './pageScroll'
export default {
  name: 'pcDialog',
  props: {
    value: {
      require: true
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  updated () {
    if (this.currentValue) {
      pageScroll.lock()
    } else {
      pageScroll.unlock()
    }
  },
  destroyed () {
    pageScroll.unlock()
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include pc-dialog;
</style>
