<template>
  <div class="Money">
    <div class="member_head">
      <p>{{mes}}</p>
      <i class="el-icon-arrow-left" @click="fn"></i>
    </div>
    <div style="height:2.2rem"></div>

    <div class="facing">
      <div>
        <p>
          <span  v-text="num==1?'当前余额':'当前积分'"></span>
          <!-- <span v-else></span> -->
          <span>
            <img src="static/img/m.png" alt />
            <span style="color: #3190e8;" v-text="num==1?'余额说明':'积分说明'">余额说明</span>
          </span>
        </p>

        <h1 v-text="num==1?'0.00':'0'">0.00</h1>
        <span v-text="num==1?'元':'分'">元</span>

        <div :style="num==1?'background:#ccc':'background:#FE6D47'" v-text="num==1?'提现':'积分兑换商品'"></div>
      </div>
    </div>
    <p class="newP">交易明细</p>

    <div class="no">
      <img src="static/img/e.png" alt />
      <p v-if="num!=1">最近三十天没有积分记录</p>
      <p v-text="num==1?'暂无明细记录':'快去下单赚取大量积分把'"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Money",
  data() {
    return {
      mes: "",
      num: ""
    };
  },
  beforeMount() {
    this.mes = this.$route.query.id;
    this.num = this.mes;
    if (this.mes == 1) {
      this.mes = "我的余额";
    } else {
      this.mes = "我的积分";
    }
  },
  methods: {
    fn() {
      this.$router.push("/Sheet/My");
    }
  }
};
</script>


<style lang='less' scoped>
.newP {
  font-size: 0.6rem;
  color: #999;
  line-height: 2rem;
  padding-left: 0.5rem;
}
.no {
  text-align: center;
  p {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    color: #666;
  }
}
.facing {
  padding: 0.3rem;
  background: #3190e8;
  div {
    padding: 0.4rem;
    background-color: #fff;
    border-radius: 0.15rem;
    p {
      display: flex;
      justify-content: space-between;
      font-size: 0.55rem;
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.2rem;
        margin-top: 0.1rem;
      }
    }
    h1 {
      font-size: 1.8rem;
      color: #333;
      font-weight: 400;
      margin: 0.5rem 0.5rem 0.5rem 0;
      display: inline-block;
      //   vertical-align: middle;
    }
    div {
      width: 95.5%;
      height: 2rem;
      font-size: 0.8rem;
      color: #fff;
      border-radius: 0.15rem;
      line-height: 2rem;
      margin-top: 1rem;
      text-align: center;
      background-color: #ccc;
    }
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
