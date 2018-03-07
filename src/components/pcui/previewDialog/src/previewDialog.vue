<template>
  <div>
    <span class="pointer" @click.prevent="dialogVisible = true">
      <slot></slot>
    </span>
    <pc-dialog v-model="dialogVisible" style="text-align: center">
      <slot name="preview"></slot>
    </pc-dialog>
  </div>
</template>

<script>
export default {
  name: 'PcPreviewDialog',
  data () {
    return {
      dialogVisible: false
    }
  }
}
</script>
