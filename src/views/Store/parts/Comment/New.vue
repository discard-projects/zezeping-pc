<template>
  <pc-dialog title="新增评论" v-model="dialogShow" :closeOnClickModal="false">
    <el-form ref="form" :model="form" label-width="80px" style="padding-right: 20px; min-width: 500px">
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.content" placeholder="说点什么呢.."></el-input>
      </el-form-item>
      <el-form-item>
        <pc-button type="primary" @click="handlerCreate">立即创建</pc-button>
      </el-form-item>
    </el-form>
  </pc-dialog>
</template>

<script>
import newMix from '@/components/Shared/Mixin/new'
export default {
  mixins: [newMix],
  data () {
    return {
      form: {
        content: ''
      }
    }
  },
  methods: {
    handlerCreate () {
      this._handlerCreate(this.api.postStoreComment(this.$route.params.id, this.form))
    }
  }
}
</script>
