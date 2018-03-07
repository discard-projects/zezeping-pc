<template>
  <div class="top-head-menu clearfix" style="background: #fff">
    <ul class="left-ul fl">
      <li>
        <pc-link @click.native="$router.push({name: 'Home'})" style="color: #f59c20; font-size: 16px">zezePing</pc-link>
      </li>
    </ul>
    <ul class="right-ul fr">
      <li v-if="userInfo">
        <pc-hover-pop style="display: inline-block; padding: 0 10px" class="pop">
          <span class="title"> {{userInfo.nickname || userInfo.email}} </span>
          <template slot="panel">
            <pc-link @click.native="logout">退出</pc-link>
          </template>
        </pc-hover-pop>
      </li>
      <li v-else>
        <pc-link @click.native="loginFromGithub">facebook登录</pc-link>
      </li>
      <li>帮助中心</li>
    </ul>
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
      this.api.logout().then(() => {
        this.$store.dispatch('logout')
      }).catch(() => {
        this.$store.dispatch('logout')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-head-menu {
    height: 40px;
    background: #f6f6f6;
    box-shadow: 0 0px 1px #999;

    ul {
      padding: 0 20px;
      li {
        display: inline-block;
        line-height: 40px;
        &:not(:last-child):after {
          content: '|';
          display: inline-block;
          height: 100%;
          padding: 0 3px;
        }
        .pop {
          &:hover {
            .title {
              color: #f65d29;
            }
          }
        }
      }
    }
  }
</style>
