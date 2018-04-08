<template>
  <el-form ref="form" :model="form">
    <el-form-item label="我来说一句">
      <el-input type="textarea" v-model="form.content" placeholder="说点什么呢..."></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('handler')">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      require: true
    }
  }
}
</script>
