<template>
  <el-dialog title="编辑" :visible.sync="dialogShow" width="95%" :close-on-click-modal="false" append-to-body>
    <el-form :model="comCode" ref="formRef" label-width="100px">
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formRef')">更新</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import ComForm from './ComForm.vue'
import edit from '@/components/Shared/Mixin/edit'
export default {
  mixins: [edit],
  props: ['componentId', 'comCode'],
  data () {
    return {
      desc: ''
    }
  },
  watch: {
    comCode: {
      handler (newVal) {
        if (newVal) {
          this.desc = newVal.desc
        }
      },
      immediate: true
    }
  },
  methods: {
    handlerUpdate () {
      this._handlerUpdate(this.api.putComponentCode(this.componentId, this.comCode.id, {desc: this.desc}), (err, res) => {
        if (!err) {
          this.comCode.desc = this.desc
        }
      })
    },
    submitForm (formRef) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          this.handlerUpdate()
        }
      })
    }
  },
  components: {
    ComForm
  }
}
</script>
