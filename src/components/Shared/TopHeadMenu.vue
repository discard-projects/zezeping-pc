<template>
  <div>
    <div v-if="userInfo">
      <div style="color: #13ce66">
        <span> {{userInfo.nickname || userInfo.email}} <i class="el-icon-caret-bottom el-icon--right"></i></span>
      </div>
      <div>
        <span @click="logout">退出facebook</span>
      </div>
    </div>
    <span v-else index="null" @click="loginFromGithub">facebook登录</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    }),
    canShow () {
      return true
    },
    activeIndex () {
      return this.$route.name
    }
  },
  methods: {
    handleSelect (key, keyPath) {},
    loginFromGithub () {
      window.location.href = `${process.env.API_ROOT}/auth/facebook?auth_origin_url=${process.env.WEB_HOST}/login`
    },
    logout () {
      console.log('logout')
      this.api.logout().then(() => {
        this.$store.dispatch('logout')
      }).catch(() => {
        this.$store.dispatch('logout')
      })
    }
  }
}
</script>
