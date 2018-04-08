<template>
  <div class="discussion-new">
    <discussion-form :form="form" @handler="$emit('handler', form)"></discussion-form>
  </div>
</template>

<script>
import DiscussionForm from './Form.vue'
export default {
  data () {
    return {
      form: {
        content: ''
      }
    }
  },
  components: {
    DiscussionForm
  }
}
</script>
