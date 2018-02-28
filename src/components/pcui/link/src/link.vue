<template>
  <span class="pc-link" :class="{'is-disabled': disabled}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'PcLink',
  props: {
    disabled: [Boolean]
  }
}
</script>

<style lang="scss" scoped>
  .pc-link {
    cursor: pointer;
    &.is-disabled {
      opacity: .55;
      cursor: not-allowed;
      &:active {
        opacity: .55;
      }
    }
    &:hover {
      text-decoration:underline;
    }
    &:active {
      opacity: 0.7;
    }
  }
</style>
