<template>
  <div class="ze-shop-card" @click="$router.push({name: 'storeDetail', params: {id: store.id}})">
    <img :src="store.logo.url" alt="">
    <div class="title">
      <span>{{store.name}}</span>
    </div>
    <div class="info">
      <div class="clearfix">
        <pc-rank :score="store.rank"></pc-rank>
        <span class="fr">{{store.comments_count}}条点评</span>
      </div>
      <div class="clearfix">
        <span>{{store.category_names.join(',')}}</span>
        <span class="fr">{{store.region_name}}</span>
      </div>
      <!--<div style="margin-top: 5px">-->
        <!--<span>₱{{store.per_expense}}/per</span>-->
      <!--</div>-->
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
    padding: 15px;

    transition: transform 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
      box-shadow: 0 0 5px #f2f2f2;
    }

    img {
      max-width: 180px;
      max-height: 100px;
      margin-bottom: 5px;
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
