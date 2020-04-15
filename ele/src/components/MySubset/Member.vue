<template>
  <div class="Member">
    <div class="member_head">
      <p>会员中心</p>
      <i class="el-icon-arrow-left" @click="fn"></i>
    </div>
    <div style="height:2.2rem"></div>
    <div class="accoutn">
      为账户
      <span>我的账户</span> 购买会员
    </div>

    <div class="privilege">
      <div>
        <span>会员特权</span>
        <p>
          会员说明
          <i class="el-icon-arrow-right"></i>
        </p>
      </div>
    </div>
    <ul>
      <li v-for="(item,index) in 2" :key="index">
        <img src="static/img/1212.jfif" alt />
        <div>
          <h4>减免配送费</h4>
          <p>每月减免30单，每日可减免三单，每单最高减十元</p>
          <p>蜂鸟专送专项</p>
        </div>
      </li>
    </ul>

    <div class="open">开通会员</div>
    <div class="money">
      <p>
        1ge月
        <span>￥20</span>
      </p>
      <div>购买</div>
    </div>

    <div class="convent">
      <span>兑换会员</span>
      <p>
        使用卡号卡密
        <i class="el-icon-arrow-right"></i>
      </p>
    </div>

    <div class="convent">
      <span>兑换会员</span>
      <p>
        使用卡号卡密
        <i class="el-icon-arrow-right"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      mes: this.$route.query.name
    };
  },
  methods: {
      //返回的点击事件
      fn(){
          this.$router.push('/Sheet/My')
      }
  }
};
</script>


<style lang='less' scoped>
.convent {
    margin-top: .5rem;
    padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  line-height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.7rem;
  color: #333;
  p {
    font-size: 0.6rem;
    color: #999;
    margin-right: 0.2rem;
  }
}
.money {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.7rem;
  font-size: 0.8rem;
  line-height: 2.6rem;
  padding-left: 0.6rem;
  span {
    font-weight: 700;
    color: #f60;
  }
  div {
    border: 0.025rem solid #f60;
    border-radius: 0.2rem;
    line-height: 1.2rem;
    height: 1.2rem;
    width: 2.6rem;
    text-align: center;
    font-size: 0.6rem;
    color: #f60;
  }
}
.open {
  background: #fff;
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: #333;
  line-height: 2rem;
  border-bottom: 1px solid #f5f5f5;
  padding-right: 0.7rem;
  padding-left: 0.6rem;
}
ul {
  li {
    border-bottom: 1px solid #f5f5f5;
    padding: 0.5rem;
    display: flex;
    background: #fff;
    justify-content: space-between;
    // border: 1px solid red;
    img {
      width: 1.6rem;
      height: 1.8rem;
      vertical-align: middle;
      margin: 0.5rem 0.5rem 0 0;
    }
    div {
      vertical-align: middle;
      width: 90%;
      h4 {
        margin: 0;
        font-size: 0.7rem;
        color: #333;
        font-weight: 400;
      }
      p {
        font-size: 0.5rem;
        color: #999;
        margin-top: 0.2rem;
      }
    }
  }
}
.privilege {
  div {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 0.7rem;
    span {
      font-size: 0.7rem;
      color: #333;
    }
    p {
      font-size: 0.6rem;
      color: #999;
      margin-right: 0.2rem;
    }
  }
}
.accoutn {
  font-size: 0.7rem;
  color: #666;
  line-height: 2rem;
  padding-left: 0.7rem;
  span {
    font-weight: 700;
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
