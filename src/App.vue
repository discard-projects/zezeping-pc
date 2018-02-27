<template>
  <div id="app">
    <TopHeadMenu></TopHeadMenu>
    <router-view/>
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
