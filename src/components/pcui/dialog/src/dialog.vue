<template>
  <div class="pc-dialog" v-if="currentValue" @click.self="closeOnClickModal ? currentValue = false : null">
    <div class="dialog-main-body">
      <div class="dialog-header">
        <slot name="title">{{title}}</slot>
        <span class="close" @click="currentValue = false">
          <i class="iconfont icon-close"></i>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pcDialog',
  props: {
    value: {
      require: true
    },
    closeOnClickModal: {
      require: false,
      default: true
    },
    title: {
      require: false,
      default: ''
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
  }
}
</script>

<style lang="scss" scoped>
  @import "styleMix";
  @include pc-dialog;
</style>
