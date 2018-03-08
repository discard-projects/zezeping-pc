<template>
  <pc-dialog title="新增评论" v-model="dialogShow" :closeOnClickModal="false">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="80px" style="padding-right: 20px; min-width: 500px">
      <el-form-item label="评分" prop="rank">
        <div style="display: inline-flex; align-items: center; height: 40px;">
          <el-rate v-model="form.rank" show-text></el-rate>
        </div>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="form.content" placeholder="说点什么呢.."></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <multiple-uploader v-model="form.attachment_image_ids" :attachment-images.sync="form.attachment_images"></multiple-uploader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlerCreate('formRef')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </pc-dialog>
</template>

<script>
import validators from '@/libs/validators'
import newMix from '@/components/Shared/Mixin/new'
import MultipleUploader from '@/components/Shared/Uploader/MultipleUploader'
export default {
  mixins: [newMix],
  data () {
    return {
      form: {
        rank: 0,
        content: '',
        attachment_image_ids: [],
        attachment_images: []
      },
      rules: {
        rank: [
          {validator: validators.numberValidator.minValue(0, false), trigger: 'change', message: '给个评分吧'}
        ],
        content: [
          validators.required({message: '大爷，说点什么吧！'})
        ]
      }
    }
  },
  methods: {
    handlerCreate (formRef) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          this._handlerCreate(this.api.postStoreComment(this.$route.params.id, this.form))
        }
      })
    }
  },
  components: {
    MultipleUploader
  }
}
</script>
