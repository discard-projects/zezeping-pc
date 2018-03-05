<template>
  <div>
    <div class="title">
      网友点评<span style="color: #999">({{store && store.comments_count}})</span>
    </div>
    <ul class="comments">
      <li v-for="comment in comments" :key="comment.id" style="margin-bottom: 15px">
        <comment-item :comment="comment"></comment-item>
      </li>
    </ul>
  </div>
</template>

<script>
import CommentItem from './Comment/CommentItem.vue'
export default {
  props: {
    store: {
      require: true
    }
  },
  data () {
    return {
      comments: []
    }
  },
  methods: {
    getStoreComments () {
      this.api.getStoreComments(this.$route.params.id).then(res => {
        console.log(res.data)
        this.comments = res.data.items
      })
    }
  },
  mounted () {
    this.getStoreComments()
  },
  components: {
    CommentItem
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-size: 16px;
    padding-bottom: 6px;
  }
  .comments {
    li:not(:last-child) {
      border-bottom: 5px solid #f2f2f2;
    }
  }
</style>
