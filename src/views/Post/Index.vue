<template>
  <div class="main-body bg-white">
    <el-tabs v-model="activeTabName" type="border-card">
      <el-tab-pane name="new" label="最新帖子">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
            {{post}}
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="views-hot" label="浏览最多">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
            {{post}}
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="votes-hot" label="点赞最多">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
            {{post}}
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="collections-hot" label="收藏最多">
        <ul>
          <li v-for="post in tableData.data" :key="post.id" @click="$router.push({name: 'PostShow', params: {id: post.id}})">
            <post-item :item="post"></post-item>
            {{post}}
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane name="collected" label="我的收藏">我的收藏</el-tab-pane>
      <el-tab-pane name="my" label="我的帖子">
        <el-button class="fr" @click="$router.push({name: 'PostNew'})">新增帖子</el-button>
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
          break
        case 'collected':
          break
        case 'my':
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
    }
  },
  components: {
    PostItem
  }
}
</script>
