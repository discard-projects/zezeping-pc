<template>
  <div class="main-body">
    <div class="left-body">
      <pc-card>
        <store-info :store="store"></store-info>
      </pc-card>
      <pc-card style="margin: 15px 0;">
        <comment-info></comment-info>
      </pc-card>
    </div>
  </div>
</template>

<script>
import StoreInfo from './parts/StoreInfo.vue'
import CommentInfo from './parts/CommentInfo.vue'
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
    CommentInfo
  }
}
</script>
