<template>
  <div class="Integral">
    <div class="box">
      <p>请重新进入</p>
      <span>请返回重新进入积分商城~</span>
      <img src="https://yun.duiba.com.cn/webapp/img/retrylogin.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Integral",
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang='less' scoped>
.box {
  // position: relative;
  width: 50%;
  margin: 50% auto;
  text-align: center;
  p {
    font-size: 26px;
    color: #0d7fd5;
    margin-bottom: 15px;
  }
  span{
          font-size: 14px;
    color: #666;
    margin-bottom: 19px;
  }
  img {
    width: 100%;
  }
}
</style>
