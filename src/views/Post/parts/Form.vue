<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="108px" style="padding: 20px">
    <el-form-item label="标题(Title)" prop="title">
      <el-input v-model="form.title" placeholder="Please input title"></el-input>
    </el-form-item>
    <el-form-item label="内容(Content)" prop="content">
      <post-editor v-model="form.content"></post-editor>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="$emit('handler')">{{form.id ? '立即更新' : '立即创建'}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import PostEditor from '@/components/Shared/PostEditor'
export default {
  props: {
    form: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      rules: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'},
          {min: 2, max: 255, message: '长度在 2 到 255 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入内容', trigger: 'blur'},
          {min: 20, message: '长度最少20个字符', trigger: 'blur'}
        ]
      }
    }
  },
  components: {
    PostEditor
  }
}
</script>
