<template>
  <div class="discussion-item clearfix">
    <img class="fl" :src="item.user.image" alt="">
    <div class="content-box">
      <h3>{{item.user.nickname}}</h3>
      <span class="time fr">{{item.created_time_humane}}</span>
      <p>{{item.content}}</p>
    </div>
    <div>
      <i class="iconfont icon-vote pointer fr" :class="{'active': item.is_approved}" @click="toggleVote">{{item.votes_count}}</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      require: true,
      type: Object
    }
  },
  methods: {
    toggleVote () {
      this.api.putTogglePostDiscussionApprove(this.item.discussable_id, this.item.id).then(res => {
        this.item = Object.assign(this.item, res.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .discussion-item {
    padding: 15px 0;
    border-bottom: 1px solid #f2f2f2;
    img {
      width: 40px;
      height: 40px;
    }
    .content-box {
      overflow: hidden;
      padding-left: 10px;
      h3 {
        display: inline-block;
        color: #444;
      }
      .time {
        color: #666;
      }
      p {
        line-height: 28px;
        font-size: 15px;
        color: #666;
      }
    }

    .icon-vote {
      color: #999;
      &.active {
        color: #3a8ee6;
      }
    }
  }
</style>
