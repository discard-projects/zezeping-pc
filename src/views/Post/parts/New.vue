<template>
  <post-form :form="form" @handler="onSubmit"></post-form>
</template>

<script>
import PostForm from './Form.vue'
export default {
  data () {
    return {
      form: {
        title: '',
        category_id: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit', this.form)
      this.api.postPost(this.form).then(res => {
        this.$router.back()
      })
    }
  },
  components: {
    PostForm
  }
}
</script>
