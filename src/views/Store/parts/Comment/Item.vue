<template>
  <div class="clearfix">
    <img class="fl user-logo" :src="comment.user.image" alt="">
    <div class="right-body">
      <ul>
        <li><span class="username">{{comment.user.nickname || comment.user.name}}</span></li>
        <li class="info">
          <pc-rank :score="comment.rank" fontSize="14px" class="br10"></pc-rank>
          <span class="br10">口味：{{comment.rank_taste}}</span>
          <span class="br10">环境 {{comment.rank_env}}</span>
          <span>服务：{{comment.rank_service}}</span>
        </li>
        <li>
          <p class="content">
            {{comment.content}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-logo {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 15px;
  }
  .right-body {
    overflow: hidden;
    font-size: 14px;

    li {
      display: flex;
      align-items: center;
      line-height: 22px;

      .content {
        margin-top: 2px;
      }
    }

    .info {
      color: #999;
    }
  }
</style>
