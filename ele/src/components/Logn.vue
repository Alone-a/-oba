<template>
  <div class="Logn">
    <div class="head">
      <span @click="go" class="el-icon-arrow-left"></span>
      <p>密码登录</p>
    </div>
    <div class="content">
      <div>
        <input type="text" placeholder="账号" v-model="name" />
      </div>
      <div>
        <input type="password" placeholder="密码" v-model="pass" />
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="code" />
        <img :src="img" alt />
        <div class="tip" @click="fn">
          <p>看不清</p>
          <p>换一张</p>
        </div>
      </div>
    </div>
    <div class="tips">
      <p>温馨提示：为注册的账号，登录的时候卉自动注册</p>
      <p>注册过的用户可凭借账号密码登录</p>
    </div>
    <button @click="logn">登录</button>
    <a @click="to">忘记密码?</a>

    <!-- 警告框框 -->
    <div class="warn" v-if="flag">
      <div>
        <span class="q1"></span>
        <span class="q2"></span>
      </div>
      <p>{{mes}}</p>
      <button @click="changeFlag">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logn",
  data() {
    return {
      img: "",
      name: "",
      pass: "",
      code: "",
      mes: "fdafasd",
      flag: false
    };
  },
  methods: {
    //返回上一层的函数
    go() {
      this.$router.push("/City");
    },
    //修改密码的函数
    to() {
      this.$router.push("/RevisePass");
    },
    //切换验证码的函数
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
        });
    },
    //点击登录的函数
    logn() {
      let baseUrl = "https://elm.cangdu.org";
      this.$http({
        method: "post",
        url: baseUrl + "/v2/login",
        data: {
          username: this.name,
          password: this.pass,
          captcha_code: this.code
        }
      })
        .then(res => {
          //输出成功的数据
          //   this.img = res.data.code;
          if (this.name == "Qwertyuiop" && this.pass == "123123") {
            //改变登录状态
             this.$store.commit("changeLognFlag",1);
              //跳转页面
              this.$router.push({
                path:'/City',
                query:{
                  id:1,
                }
              })
          } else if (res.data.message == "验证码失效") {
            (this.mes = "验证码失效"), (this.flag = true);
          } else if (res.data.message == "密码错误") {
            (this.mes = "密码错误"), (this.flag = true);
          }
        })
        .catch(err => {
          //console.log(err.data);
        });
    },
    //点击确认更改flag的值  让弹框显示
    changeFlag() {
      this.flag = false;
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


<style lang="less" scoped>
//警告框框
.warn {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6rem;
  margin-left: -6rem;
  width: 12rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  padding-top: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px;
  border-radius: 0.25rem;
  div {
    width: 3rem;
    height: 3rem;
    border: 0.15rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .q1 {
      width: 0.12rem;
      height: 1.5rem;
      background-color: #f8cb86;
    }
    .q2 {
      width: 0.2rem;
      height: 0.2rem;
      border: 1px;
      border-radius: 50%;
      margin-top: 0.2rem;
      background-color: #f8cb86;
    }
  }
  button {
    display: block;
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    color: #fff;
    font-weight: 700;
    margin-top: 0.8rem;
    background-color: #4cd964;
    width: 100%;
    text-align: center;
    line-height: 1.8rem;
    border: 1px;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  p {
    font-size: 0.7rem;
    color: #333;
    line-height: 0.9rem;
    text-align: center;
    margin-top: 0.8rem;
    padding: 0 0.4rem;
  }
}
a {
  float: right;
  font-size: 0.6rem;
  color: #3b95e9;
  margin-right: 0.3rem;
  padding-right: 0.5rem;
}
.Logn {
  font-size: 22.5px;
}
html,
body {
  background: #f5f5f5;
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
    z-index: 11;
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
  }
}
.content {
  div {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.8rem;
    border-bottom: 1px solid #f1f1f1;
    background: #fff;
    input {
      border: none;
      list-style: none;
      font-size: 0.8rem;
      color: #666;
      outline: none;
    }
    .tip {
      padding: 0;
      //   border: 1px solid red;
      display: flex;
      align-content: space-between;
    }
    img {
      width: 3.5rem;
      height: 1.5rem;
      margin-right: 0.2rem;
      float: right;
    }
    p {
      font-size: 0.55rem;
      color: #666;
    }
  }
}
.tips {
  p {
    font-size: 0.5rem;
    color: red;
    padding: 0.4rem 0.6rem;
    line-height: 0.5rem;
  }
}
button {
  width: 94.5%;
  margin: 0 0.5rem 1.3rem;
  font-size: 0.7rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.5rem 0;
  border: 1px;
  border-radius: 0.15rem;
  text-align: center;
  outline: none;
}
</style>
