<template>
  <div class="clearfix">
    <img class="fl user-logo" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1202455018,1076925148&fm=27&gp=0.jpg" alt="">
    <div class="right-body">
      <ul>
        <li><span class="username">张小宝</span></li>
        <li class="info">
          <pc-rank fontSize="14px" class="br15"></pc-rank>
          <span class="br10">口味：3.2</span>
          <span class="br10">环境：3.2</span>
          <span>服务：3.2</span>
        </li>
        <li>
          <p class="content">
            周末朋友在三里屯小聚，选了粤菜餐厅，据说是成龙开的，在工体体育馆里面，环境不错，独栋二层小楼，装修古...
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .user-logo {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 20px;
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
