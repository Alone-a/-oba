<template>
  <div class="Citydetails">
    <div class="head">
      <span @click="go" class="el-icon-arrow-left"></span>
      <p>{{mes}}</p>
    </div>
    <div class="content">
      <p>
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="word" />
        <input class="btn" type="button" value="提交" @click="submit" />
      </p>
    </div>

    <!-- 创建搜索之后的东西 -->
    <ul class="after">
      <li v-for="(item,index) in list" :key="index" @click="clickIndex(item.address)">
        <h4>{{item.name}}</h4>
        <p>{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Citydetails",
  data() {
    return {
      mes: "",
      word: "",
      id: this.$route.query.id,
      list: ""
    };
  },
  mounted() {
    // this.id = id;
    let id = this.$route.query.id;
    let baseUrl = "https://elm.cangdu.org";
    this.$http
      .get(baseUrl + "/v1/cities/" + id)
      .then(res => {
        this.mes = res.data.name;
        //console.log(res.data);
      })
      .catch(err => {
        //console.log(err.data);
      });
  },
  methods: {
    //返回按钮的点击事件
    go() {
      this.$router.push("/City");
    },
    //点击tijiao的按钮的事件
    submit() {
      //console.log(this.id, this.word);
      let baseUrl = "https://elm.cangdu.org";
      this.$http
        .get(
          "https://elm.cangdu.org/v1/pois?city_id=" +
            this.id +
            "&keyword=" +
            this.word +
            "&type=search"
        )
        .then(res => {
          this.list = res.data;
          //console.log(res.data);
        })
        .catch(err => {
          //console.log(err.data);
        });
    },
    //具体登录地址的点击事件
    clickIndex(res) {
      this.$store.commit("changeRoom", res);
      this.$router.push({
        path: "/Sheet",
        query: {
          id: res
        }
      });
    }
  }
};
</script>


<style lang='less' scoped>
.after {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  li {
    margin: 0 auto;
    padding-top: 0.65rem;
    border-bottom: 1px solid #e4e4e4;
    h4 {
      margin: 0 auto 0.35rem;
      width: 90%;
      font-size: 0.9rem;
      color: #333;
      font-weight: 400;
    }
    p {
      width: 90%;
      margin: 0 auto 0.55rem;
      font-size: 0.6rem;
      color: #999;
    }
  }
}
.head {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 3rem;
  position: relative;
  span {
    width: 3rem;
    height: 1rem;
    line-height: 3rem;
    font-size: 0.8rem;
    position: relative;
    left: 1rem;
    z-index: 111;
  }
  p {
    // float: left;
    position: absolute;
    font-size: 1.4rem;
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
  margin-top: 0.8rem;
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-top: 0.4rem;
  p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    input {
      border: 1px solid #e4e4e4;
      padding: 0 0.3rem;
      font-size: 1rem;
      color: #333;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      height: 2rem;
      margin-top: 0.6rem;
    }
    .btn {
      background-color: #3190e8;
      font-size: 1rem;
      color: #fff;
      height: 2.3rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
