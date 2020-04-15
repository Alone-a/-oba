<template>
  <div class="Download">
    <div class="member_head">
      <p>下载</p>
      <i class="el-icon-arrow-left" @click="fn"></i>
    </div>
    <div style="height:2.2rem"></div>
    <div class="down">
      <img src="static/img/logo.jfif" alt />
      <p>下载饿了么APP</p>
      <div>下载</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Download",
  data() {
    return {};
  },
  methods: {
    fn() {
      let id = this.$store.state.flag;
      ////console.log(id);
      this.$router.push("/Sheet/My");
      this.$store.commit("changeFlag", 4);
    }
  }
};
</script>


<style lang='less' scoped>
body {
  background: #fff;
}
.down {
  text-align: center;
  img {
    border-radius: 1rem;
    margin-top: 1rem;
  }
  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }
  div {
    background-color: #4cd964;
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
    margin: 0 0.7rem;
    line-height: 1.8rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
  }
}
.member_head {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.2rem;
  p {
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 0.5rem;
  }
  i {
    float: left;
    margin-top: -1rem;
    color: #fff;
  }
}
</style>
