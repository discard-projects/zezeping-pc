<template>
  <div class="ze-shop-card">
    <pc-link @click.native="$router.push({name: 'storeDetail', params: {id: store.id}})">
      <img :src="store.logo.url" alt="">
    </pc-link>
    <pc-link>
      <div class="title" @click.native="$router.push({name: 'storeDetail', params: {id: store.id}})">
        <span>{{store.name}}</span>
      </div>
    </pc-link>
    <div class="info clearfix">
      <div>
        <pc-rank></pc-rank>
        <span class="fr">{{store.comments_count}}条点评</span>
      </div>
      <div>
        <span>创意菜</span>
        <span class="fr">{{store.region}}</span>
      </div>
      <div style="margin-top: 5px">
        <span>₱{{store.per_expense}}/per</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    store: {
      required: true
    }
  }
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
      margin-bottom: 5px;
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
