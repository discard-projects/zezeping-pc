<template>
  <div class="main-body">
    <div class="left-body">
      <pc-card>
        <store-info></store-info>
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
  props: {
    store: {
      require: true
    }
  },
  components: {
    StoreInfo,
    CommentInfo
  }
}
</script>
