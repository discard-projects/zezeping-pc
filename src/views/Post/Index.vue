<template>
  <div class="main-body bg-white">
    <el-tabs v-model="activeTabName" type="border-card">
      <el-tab-pane name="new" label="最新帖子">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="views-hot" label="浏览最多">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="votes-hot" label="点赞最多">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="collections-hot" label="收藏最多">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="collected" label="我的收藏">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="my" label="我的帖子">
        <el-button size="mini" type="primary" class="fr" @click="goPostNew">新增帖子</el-button>
        <ul class="clearfix">
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PostItem from '@/components/Post/Item'
import index from '@/components/Shared/Mixin/index'
import query from '@/components/Shared/Mixin/query'
export default {
  mixins: [index, query],
  data () {
    return {
      activeTabName: 'new'
    }
  },
  watch: {
    activeTabName (newVal) {
      switch (newVal) {
        case 'new':
          this.fetchData({qs_sorts: 'created_at desc', q_page: 1})
          break
        case 'views-hot':
          this.fetchData({qs_sorts: 'views_count desc', q_page: 1})
          break
        case 'votes-hot':
          this.fetchData({qs_sorts: 'votes_count desc', q_page: 1})
          break
        case 'collections-hot':
          this.fetchData({qs_sorts: 'collections_count desc', q_page: 1})
          break
        case 'collected':
          this.fetchData({q_collections_user_id_eq: 3, q_page: 1})
          break
        case 'my':
          this.fetchData({q_user_id_eq: 3, q_page: 1})
          break
      }
    }
  },
  methods: {
    fetchData (extraQuery) {
      if (!extraQuery) {
        extraQuery = {qs_sorts: 'created_at desc'}
      }
      this._fetchData(this.api.getPosts(Object.assign({}, this.q, extraQuery)))
    },
    goPostNew () {
      this.validLogin() && this.$router.push({name: 'PostNew'})
    }
  },
  components: {
    PostItem
  }
}
</script>
