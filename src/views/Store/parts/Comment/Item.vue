<template>
  <div class="clearfix" style="margin-bottom: 16px">
    <img class="fl user-logo" :src="comment.user.image" alt="" v-if="comment.user.image">
    <Avatar :text="comment.user.id_hash" class="fl user-logo" v-else></Avatar>
    <div class="right-body">
      <ul>
        <li>
          <span class="username">{{comment.user.nickname || comment.user.name}}</span>
          <pc-rank :score="comment.rank" fontSize="14px" class="br10" style="margin-left: 10px"></pc-rank>
        </li>
        <li class="info">
          <!--<span class="br10">口味：{{comment.rank_taste}}</span>-->
          <!--<span class="br10">环境 {{comment.rank_env}}</span>-->
          <!--<span>服务：{{comment.rank_service}}</span>-->
        </li>
        <li>
          <p class="content">
            {{comment.content}}
          </p>
        </li>
        <li>
          <div style="display: inline-block; margin-top: 5px" v-for="(attachmentImage,index) in comment.attachment_images" :key="index">
            <pc-preview-dialog>
              <pc-link><img :src="attachmentImage.file_thumb.url" alt="" style="max-height: 60px"></pc-link>
              <template slot="preview">
                <img :src="attachmentImage.file_small.url" alt="图片预览" style="max-height: 500px; width: auto; max-width: 100%">
              </template>
            </pc-preview-dialog>
          </div>
        </li>
        <li>
          <p class="time">{{comment.created_time}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Shared/zeui/avatar/avatar'
export default {
  props: {
    comment: {
      type: Object,
      require: true
    }
  },
  components: {
    Avatar
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

    .time {
      color: #999;
      font-size: 14px;
    }
  }
</style>
