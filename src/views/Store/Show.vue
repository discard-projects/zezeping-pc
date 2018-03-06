<template>
  <div class="main-body">
    <div class="left-body">
      <pc-card>
        <store-info :store="store"></store-info>
        <div class="store-opts">
          <pc-button @click="$refs['commentNewRef'].dialogShow = true" type="primary" size="small">写点评</pc-button>
          <comment-new ref="commentNewRef"></comment-new>
        </div>
      </pc-card>
      <pc-card style="margin: 15px 0;">
        <comment-info :store="store"></comment-info>
      </pc-card>
    </div>
  </div>
</template>

<script>
import StoreInfo from './parts/StoreInfo.vue'
import CommentInfo from './parts/CommentInfo.vue'
import CommentNew from './parts/Comment/New.vue'
export default {
  data () {
    return {
      store: null
    }
  },
  methods: {
    getStoreInfo () {
      this.api.getStore(this.$route.params.id).then(res => {
        this.store = res.data.item
      })
    }
  },
  mounted () {
    this.getStoreInfo()
  },
  components: {
    StoreInfo,
    CommentInfo,
    CommentNew
  }
}
</script>

<style lang="scss" scoped>
  .store-opts {
    margin-top: 15px;
  }
</style>
