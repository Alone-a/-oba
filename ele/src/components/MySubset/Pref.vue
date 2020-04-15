<template>
  <div class="Pref">
    <div class="member_head">
      <p>我的优惠</p>
      <i class="el-icon-arrow-left" @click="fn"></i>
    </div>
    <div style="height:2.2rem"></div>
    <div class="pref_head">
      <div>
        <span style="color:#3190e8; border-bottom-color: #3190e8;">红包</span>
      </div>
      <div>
        <span>商家代金券</span>
      </div>
    </div>
    <p class="paper">
      <span>
        有
        <span style="color:red">3</span>个红包即将到期
      </span>
      <span>
        <img src="static/img/m.png" alt />
        <span style="    color: #3190e8;">红包说明</span>
      </span>
    </p>

    <div class="new_paper" v-for="(item,index) in 3" :key="index">
      <div class="paper_one">
        <p>
          <span>￥</span>
          <span style="    font-size: 1.5rem;">1</span>
          <span>.</span>
          <span>1</span>
        </p>
        <p class="paper_one_p">满20可用</p>
      </div>
      <div class="paper_two">
        <h3>分享红包</h3>
        <p>2019-09-23到期</p>
        <p>限手机号为1121221212</p>
      </div>
      <div class="paper_there">剩三日</div>
    </div>
    <p class="tips">限品类，快餐便当，特色菜系，小吃夜宵，甜品饮品，异国料理</p>

    <div class="past">查看历史红包 ></div>

    <div class="recommend">
      <span>兑换红包</span>
      <span>推荐有奖</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pref",
  data() {
    return {};
  },
  methods: {
    fn() {
      this.$router.push("/Sheet/My");
    }
  }
};
</script>


<style lang='less' scoped>
.recommend {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  span {
    flex: 1;
    line-height: 2rem;
    text-align: center;
    font-size: 0.7rem;
    color: #555;
  }
}
.past {
  font-size: 0.5rem;
  color: #999;
  margin-right: 0.2rem;
  margin-top: 2rem;
  text-align: center;
}
.tips {
  font-size: 0.4rem;
  color: #999;
  margin-left: 0.6rem;
  margin-top: 1rem;
}
.new_paper {
  display: flex;
  border-top: 1px solid red;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: #fff;
  margin-top: 0.3rem;

  .paper_one {
    //   padding: 1rem;
    // border-right: 0.025rem dotted #ccc;s
    margin-right: 1rem;
    p {
      vertical-align: bottom;
      font-size: 0;
      span {
        color: #ff5340;
        font-size: 0.9rem;
      }
      //   font-size: 1rem;
    }
    .paper_one_p {
      font-size: 0.5rem;
      color: #999;
    }
  }
  .paper_there {
    font-size: 0.95rem;
    color: #ff5340;
  }
  .paper_two {
    h3 {
      margin: 0;
      font-size: 0.7rem;
      color: #666;
      //   margin-left: -0.7rem;
    }
    p {
      //   list-style-type: disc;99
      //   margin-left: -0.7rem;
      font-size: 0.4rem;
      color: #999;
    }
  }
}
.paper {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  margin-top: 0.6rem;
  span {
    font-size: 0.6rem;
    img {
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.2rem;
    }
  }
}
.pref_head {
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 2rem;
  line-height: 2rem;
  div {
    text-align: center;
    width: 50%;
    span {
      text-align: center;
      font-size: 0.65rem;
      color: #333;
      padding-bottom: 0.2rem;
      border-bottom: 0.1rem solid #fff;
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
