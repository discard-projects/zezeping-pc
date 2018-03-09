<template>
  <div id="app">
    <TopHeadMenu></TopHeadMenu>
    <div class="main">
      <router-view/>
    </div>
    <BottomFooter></BottomFooter>
  </div>
</template>

<script>
import TopHeadMenu from '@/components/Shared/TopHeadMenu'
import BottomFooter from '@/components/Shared/BottomFooter'
export default {
  name: 'App',
  components: {
    TopHeadMenu,
    BottomFooter
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 41px;
  overflow: auto;
  min-width: 500px;
}
</style>
