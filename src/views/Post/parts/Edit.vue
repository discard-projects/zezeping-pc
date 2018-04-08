<template>
  <post-form :form="form" @handler="onSubmit" v-if="form"></post-form>
</template>

<script>
import PostForm from './Form.vue'
export default {
  data () {
    return {
      form: null
    }
  },
  methods: {
    fetchData () {
      this.api.getPost(this.$route.params.id).then(res => {
        this.form = res.data.item
      })
    },
    onSubmit () {
      this.api.putPost(this.form.id, this.form).then(res => {
        this.$router.back()
      })
    }
  },
  mounted () {
    this.fetchData()
  },
  components: {
    PostForm
  }
}
</script>
