<template>
  <div>
    <pc-card style="width: 50%; min-width: 400px; margin: 0 auto; margin-top: 30px;">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="80px" style="margin-top: 20px">
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" placeholder="please input your nickname"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('formRef')">更新</el-button>
        </el-form-item>
      </el-form>
    </pc-card>
  </div>
</template>

<script>
import validators from '@/libs/validators'
export default {
  data () {
    return {
      form: {
        nickname: ''
      },
      rules: {
        nickname: validators.required({message: 'required！'})
      }
    }
  },
  methods: {
    getProfile () {
      this.api.getMeProfile().then(res => {
        this.form = res.data.item
      })
    },
    onSubmit (formRef) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          this.api.putProfile(this.form).then(res => {
            this.getProfile()
          })
        }
      })
    }
  },
  mounted () {
    this.getProfile()
  }
}
</script>
