<template>
  <div class="My">
    

    <div class="my_head">
      <div>
        <img src="http://elm.cangdu.org/img/default.jpg" alt />
        <div>
          <p>当前用户名</p>
          <p>
            <i class="el-icon-mobile"></i>
            <span>暂时没有绑定手机号</span>
          </p>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>

    <div class="balance">
      <div v-for="(item,index) in arr" :key="index" @click="toMoney(item.id)">
        <p>
          <span :style="'color:'+item.color">{{item.num}}</span>
          {{item.title}}
        </p>
        <p id="small_font_p">{{item.name}}</p>
      </div>
    </div>

    <div class="list">
      <ul>
        <li
          v-for="(item,index) in listArr"
          :key="index"
          :style="index==3?'margin-top:.4rem':''"
          @click="fn(item.id),to(item.id)"
        >
          <i :class="item.icon" :style="'color:'+item.color"></i>
          <p>
            <span>{{item.name}}</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      arr: [
        { id: 1, num: "0.00", name: "我的余额", title: "元", colot: "#f90" },
        {
          id: 2,
          num: 3,
          name: "我的优惠",
          title: "个",
          color: "#ff5f3e"
        },
        {
          id: 3,
          name: "我的积分",
          num: 0,
          title: "分",
          color: "#6ac20b"
        }
      ],
      listArr: [
        {
          id: 1,
          name: "我的订单",
          icon: "el-icon-coin"
        },
        {
          id: 2,
          name: "积分商城",
          icon: "el-icon-news",
          color: "red"
        },
        {
          id: 3,
          name: "饿了么会员卡",
          color: "rgb(255, 198, 54);",
          icon: "el-icon-trophy-1"
        },
        {
          id: 4,
          name: "服务中心",
          color: "#4AA5F0",
          icon: "el-icon-full-screen"
        },
        {
          id: 5,
          name: "下载饿了么APP",
          color: "#4AA5F0",
          icon: "el-icon-platform-eleme"
        }
      ]
    };
  },
  // mounted() {
  //   //https://elm.cangdu.org/v1/user
  //   this.$http
  //     .get("https://elm.cangdu.org/v1/user")
  //     .then(res => {
  //       // this.messsage = res.data;
  //       //console.log(res.data);
  //     })
  //     .catch(err => {
  //       // //console.log(err.data);
  //     });
  // },
  methods: {
    toMoney(id) {
      if (id == 2) {
        this.$router.push("/Pref");
        return;
      }
      this.$router.push({
        path: "/Money",
        query: {
          id: id
        }
      });
    },
    //订单的点击事件
    fn(id) {
      if (id == 1) {
        this.$store.commit("changeFlag", 3);
        this.$router.push("/Sheet/Order");
      }
    },
    //跳转事件
    to(id) {
      if (id == 2) {
        this.$router.push("/Integral");
      } else if (id == 3) {
        this.$router.push("/Member");
      } else if (id == 4) {
        this.$router.push("/Emom");
      } else if (id == 5) {
        this.$router.push("/Download");
      }
    }
  }
};
</script>


<style lang='less' scoped>
.list {
  ul {
    margin-top: 0.5rem;
    li {
      background: #fff;
      i {
        margin-top: 0.3rem;
      }
      padding-left: 0.5rem;
      display: flex;
      justify-content: end;
      p {
        vertical-align: top;
        margin-left: 0.5rem;
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        padding: 0.433333rem 0.266667rem 0.433333rem 0;
        font-size: 0.7rem;
        color: #333;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
.balance {
  // padding-top: 1rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  div {
    border-right: 1px solid #f1f1f1;
    width: 33.33%;
    box-sizing: border-box;
    text-align: center;
    p {
      font-size: 0.57333rem;
      color: #666;
      font-weight: 400;
      span {
        padding: 0.853333rem 0 0.453333rem;
        display: inline-block;
        font-size: 1.2rem;
        color: #f90;
        font-weight: 700;
        line-height: 1rem;
        font-family: Helvetica Neue, Tahoma;
      }
    }
  }
}
#small_font_p {
  font-size: 0.7rem;
  padding-bottom: 0.453333rem;
}
.my_head {
  div {
    align-items: center;
    background: #3190e8;
    padding: 0.666667rem 0.6rem;
    // display: flex;
    // justify-content: space-around;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      vertical-align: middle;
      display: inline-block;
      vertical-align: middle;
    }
    div {
      // border: 1px solid red;
      p {
        display: block;
        font-weight: 700;
        font-size: 0.8rem;
        color: #fff;
        margin-top: 0.2rem;
        span {
          font-size: 0.5rem;
        }
      }
      display: inline-block;
      vertical-align: middle;
    }
    i {
      color: #fff;
    }
    .el-icon-arrow-right {
      float: right;
      margin-top: 0.89rem;
    }
  }
}


</style>
