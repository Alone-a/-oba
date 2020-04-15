<template>
  <div class="Emom">
    <div class="member_head">
      <p>服务中心</p>
      <i class="el-icon-arrow-left" @click="fn"></i>
    </div>
    <div style="height:2.2rem"></div>

    <div class="on_line">
      <div>
        <i class="el-icon-mobile-phone" style="color:#FF7B52"></i>
        <span>在线客服</span>
      </div>
      <div>
        <i class="el-icon-service" style="color:green"></i>
        <span>在线客服</span>
      </div>
    </div>

    <p class="hot">热门问题</p>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span>{{item}}</span>
        <i class="el-icon-arrow-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Emom",
  data() {
    return {
      list: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其他问题",
        "准时达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责声明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    };
  },
  methods: {
    //返回的点击事件
    fn() {
      this.$router.push("/Sheet/My");
    }
  }
};
</script>


<style lang='less' scoped>
ul {
  li {
    background: #fff;
    padding: 0 0.7rem;
    line-height: 2rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span,i {
      font-size: 0.7rem;
      color: #666;
    }
  }
}
.hot {
  background: #fff;
  font-size: 0.85rem;
  color: #333;
  line-height: 3rem;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 0.7rem;
}
.on_line {
  display: flex;
  justify-content: space-between;
  background: #fff;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 4rem;
    border-bottom: 1px solid #f5f5f5;
    span {
      margin-top: 0.4rem;
      font-size: 0.6rem;
      color: #666;
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
