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
    getProfile (autoSkip) {
      this.api.getMeProfile().then(res => {
        this.$store.dispatch('setUserInfo', res.data.item)
        this.form = Object.assign({}, res.data.item)
        if (autoSkip) {
          if (res.data.item.nickname) {
            this.$router.push({name: 'Home'})
          } else {
            this.$router.push({name: 'Profile'})
          }
        }
      })
    },
    onSubmit (formRef) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          this.api.putProfile(this.form).then(res => {
            this.getProfile(true)
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
