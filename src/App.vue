<template>
  <div id="app">
    <TopHeadMenu></TopHeadMenu>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TopHeadMenu from '@/components/Shared/TopHeadMenu'
export default {
  name: 'App',
  components: {
    TopHeadMenu
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 41px;
  overflow: auto;
}
</style>
