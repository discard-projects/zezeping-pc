<template>
  <div>
    <span class="pointer" @click.prevent="dialogVisible = true">
      <slot></slot>
    </span>
    <el-dialog :visible.sync="dialogVisible" style="text-align: center" append-to-body>
      <slot name="preview"></slot>
    </el-dialog>
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
