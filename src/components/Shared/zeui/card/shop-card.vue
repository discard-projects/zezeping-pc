<template>
  <div class="ze-shop-card">
    <pc-link>
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=634887906,3562780320&fm=27&gp=0.jpg" alt="">
    </pc-link>
    <pc-link>
      <div class="title">
        <span>黄焖鸡米饭</span>
      </div>
    </pc-link>
    <div class="info clearfix">
      <div>
        <pc-rank></pc-rank>
        <span class="fr">1342条点评</span>
      </div>
      <div>
        <span>创意菜</span>
        <span class="fr">Makati</span>
      </div>
      <div style="margin-top: 5px">
        <span>₱300/per</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .ze-shop-card {
    display: inline-block;
    width: 200px;
    padding: 0 10px;
    margin-bottom: 20px;
    text-align: left;

    img {
      width: 180px;
      height: 100px;
      margin-bottom: 10px;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 5px #555;
      }
    }

    .title {
      max-width: 100%;
      font-size: 16px;
      text-overflow: ellipsis;
    }
    .info {
      color: #999;
      font-size: 12px;
    }
  }
</style>
