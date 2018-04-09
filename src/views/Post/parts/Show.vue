<template>
  <div class="main-body">
    <div class="post-show bg-white clearfix" v-if="post">
      <div class="head clearfix">
        <h3 style="display: inline-block">{{ post.title }}</h3>
        <el-button class="fr" size="mini" @click="$router.push({name: 'PostEdit', params: $route.params})" v-if="userInfo && userInfo.id == post.user_id">编辑</el-button>
        <div class="info">
          <span class="fr">创建于:{{post.created_time_humane}}</span>
          <span class="fr">分类:{{post.category_name}}</span>
        </div>
      </div>
      <p class="content" v-html="post.content"></p>
      <div class="fr">
        <i class="iconfont icon-view disabled" style="margin-right: 15px">{{ post.views_count }}</i>
        <i @click="toggleCollection" class="iconfont icon-collection pointer" :class="{'active': post.is_collected}" style="margin-right: 15px">{{ post.collections_count }}</i>
        <i @click="toggleVote" class="iconfont icon-vote pointer" :class="{'active': post.is_approved}">{{ post.votes_count }}</i>
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
import { mapState } from 'vuex'
export default {
  data () {
    return {
      post: null
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
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
    },
    toggleCollection () {
      this.api.putTogglePostCollect(this.post.id).then(res => {
        this.post = Object.assign(this.post, res.data)
      })
    },
    toggleVote () {
      this.api.putTogglePostApprove(this.post.id).then(res => {
        this.post = Object.assign(this.post, res.data)
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

        .info {
          text-align: left;
          line-height: 20px;
          font-size: 13px;
          color: #888;

          span {
            margin: 0 15px;
          }
        }
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
