<template>
  <div class="main-body">
    <div class="post-show bg-white clearfix" v-if="post">
      <div class="head">
        <h3 style="display: inline-block">{{ post.title }}</h3>
        <el-button class="fr" size="mini" @click="$router.push({name: 'PostEdit', params: $route.params})">编辑</el-button>
      </div>
      <p class="content" v-html="post.content"></p>
      <div class="fr">
        <el-button size="small"><i class="iconfont icon-collection"></i>{{ post.collections_count }}</el-button>
        <el-button size="small"><i class="iconfont icon-vote"></i>{{ post.votes_count }}</el-button>
      </div>
    </div>
    <div class="discussions-show bg-white">
      <ul v-if="post">
        <li v-for="discussion in post.discussions" :key="discussion.id">
          <discussion-item :item="discussion"></discussion-item>
        </li>
      </ul>
      <discussion-new @handler="createDiscussion"></discussion-new>
    </div>
  </div>
</template>

<script>
import DiscussionNew from '@/components/Discussion/New.vue'
import DiscussionItem from '@/components/Discussion/Item.vue'
export default {
  data () {
    return {
      post: null
    }
  },
  methods: {
    fetchData () {
      this.api.getPost(this.$route.params.id).then(res => {
        this.post = res.data.item
      })
    },
    createDiscussion (discussion) {
      this.api.postPostDiscussions(this.$route.params.id, discussion).then(res => {
        discussion.content = ''
        this.fetchData()
      })
    }
  },
  mounted () {
    this.fetchData()
  },
  components: {
    DiscussionNew,
    DiscussionItem
  }
}
</script>

<style lang="scss" scoped>
  .main-body {
    .post-show {
      margin: 15px;
      text-align: center;
      padding: 10px;

      .head {
        line-height: 30px;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 8px;
        margin-bottom: 10px;
      }

      .content {
        text-align: left;
      }
    }

    .discussions-show {
      margin: 15px;
      padding: 10px;
    }
  }
</style>
