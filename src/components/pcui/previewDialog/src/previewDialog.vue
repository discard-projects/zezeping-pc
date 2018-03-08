<template>
  <div>
    <span class="pointer" @click.prevent="dialogVisible = true">
      <slot></slot>
    </span>
    <el-dialog :visible.sync="dialogVisible" style="text-align: center" append-to-body  :width="`${dialogWidth}%`">
      {{dialogWidth}}
      <div slot="title" style="text-align: left">
        <el-button @click.stop="moreBigger" icon="el-icon-zoom-in" v-if="dialogWidth != maxWidth" size="small"></el-button>
        <el-button @click.stop="moreSmaller" icon="el-icon-zoom-out" v-if="dialogWidth != minWidth" size="small"></el-button>
      </div>
      <slot name="preview"></slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'PcPreviewDialog',
  props: {
    maxWidth: {
      type: Number,
      default: 80,
      require: false
    },
    minWidth: {
      type: Number,
      default: 20,
      require: false
    },
    stepWidth: {
      type: Number,
      default: 10,
      require: false
    }
  },
  data () {
    return {
      dialogWidth: 50,
      dialogVisible: false
    }
  },
  methods: {
    moreBigger () {
      let afterVa = this.dialogWidth + this.stepWidth
      console.log(afterVa, this.maxWidth)
      this.dialogWidth = afterVa > this.maxWidth ? this.maxWidth : afterVa
    },
    moreSmaller () {
      let afterVa = this.dialogWidth - this.stepWidth
      this.dialogWidth = afterVa < this.minWidth ? this.minWidth : afterVa
    }
  }
}
</script>
