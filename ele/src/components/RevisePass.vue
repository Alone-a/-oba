<template>
  <div class="RevisePass">
    <div class="head">
      <span @click="go">返回</span>
      <p>密码登录</p>
    </div>
    <div class="content">
      <p>
        <input type="text" placeholder="账号" />
      </p>
      <p>
        <input type="text" placeholder="旧密码" />
      </p>
      <p>
        <input type="text" placeholder="请输入新密码" />
      </p>
      <p>
        <input type="text" placeholder="确认新密码" />
      </p>
      <p>
        <input type="text" placeholder="验证码" />
        <img :src="img" alt />
        <span @click="fn">
          看不清
          <br />换一张
        </span>
      </p>
    </div>
    <div class="btn" @click="tip">确认修改</div>
  </div>
</template>

<script>
export default {
  name: "RevisePass",
  data() {
    return {
      img: ""
    };
  },
  methods: {
    go() {
      this.$router.push("/Logn");
    },
    tip() {
      this.$router.push({
        path: "/RevisePass/Tips"
        //   query:{
        //      id:1,
        //   }
      });
    },
    //点击切换验证码
    fn() {
      let baseUrl = "https://elm.cangdu.org";
      this.$http({
        method: "post",
        url: baseUrl + "/v1/captchas"
      })
        .then(res => {
          //输出成功的数据
          this.img = res.data.code;
        })
        .catch(err => {
          //console.log(err.data);
        });
    }
  },
  beforeMount() {
    let baseUrl = "https://elm.cangdu.org";
    this.$http({
      method: "post",
      url: baseUrl + "/v1/captchas"
    })
      .then(res => {
        //输出成功的数据
        this.img = res.data.code;
        //console.log(res.data.code);
      })
      .catch(err => {
        //console.log(err.data);
      });
  }
};
</script>


<style lang='less' scoped>
.btn {
  margin: 1rem 0.5rem;
  font-size: 0.7rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
}
.head {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
  position: relative;
  span {
    width: 3rem;
    height: 1rem;
    line-height: 2.2rem;
    font-size: 0.8rem;
    position: relative;
    left: 1rem;
    z-index: 111;
  }
  p {
    // float: left;
    position: absolute;
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    top: 0.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
  }
}
.content {
  // display: flex;
  // justify-content: space-between;
  margin-top: 0.5rem;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
  input {
    border: none;
    list-style: none;
    font-size: 0.8rem;
    color: #666;
    outline: none;
  }

  img {
    width: 3.5rem;
    height: 1.5rem;
    margin-right: 0.2rem;
  }
  p {
    padding: 0.6rem 0.8rem;
    font-size: 0.55rem;
    color: #666;
    border-bottom: 1px solid #f1f1f1;
    span {
      float: right;
    }
  }
}
</style>
