<template>
  <div class="City">
    <div class="head">
      <div class="head_top">
        <span>ele.me</span>
        <i class="logn" @click="toLogn" v-if="flag">登录|注册</i>
        <i class="logn el-icon-user-solid" v-else></i>
      </div>
      <div style="height: 1.95rem"></div>
      <div class="head_poCity">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div class="head_floer">
        <span>></span>
      </div>
    </div>

    <div class="hot_city clear">
      <p>热门城市</p>
      <span v-for="(item,index) in hotCity" :key="index" @click="cityFn(item.id)">{{item.name}}</span>
    </div>

    <div class="allCity clear">
      <div v-for="(item,index) in str" :key="index" class="clear">
        <p>{{item}}</p>
        <span v-for="(t,i) in city[item]" :key="i" @click="cityFn(t.id)">{{t.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, Store } from "vuex";
export default {
  name: "City",
  data() {
    return {
      //热门城市
      hotCity: "",
      city: "",
      str: "ABCDEFGHJKLMNPQRSTUVWXYZ",
      flag: true
    };
  },
  computed: {
    ...mapState(["lognFlag"])
  },
  methods: {
    toLogn() {
      this.$router.push("/Logn");
    },
    //城市的点击事件
    cityFn(id) {
      //点击的时候切换数据 并且携带id
      // this.$store.state.lognFlag,
      // ...mapState
      // //console.log(  this.lognFlag)
      if (this.lognFlag) {
        this.$router.push({
          path: "/Citydetails",
          query: {
            id: id
          }
        });
      }
      
    }
  },
  beforeMount() {
    let baseUrl = "https://elm.cangdu.org";
    this.$http
      .get(baseUrl + "/v1/cities?type=hot")
      .then(res => {
        this.hotCity = res.data;
        //console.log(res.data);
      })
      .catch(err => {
        //console.log(err.data);
      });

    //所有城市
    this.$http
      .get(baseUrl + "/v1/cities?type=group")
      .then(res => {
        this.city = res.data;
        //console.log(res.data.A);
      })
      .catch(err => {
        //console.log(err.data);
      });
    //获取上一个页面传输过来的 判断 是否登录
    this.$route.query.id == 1 ? (this.flag = false) : "";
  }
};
</script>


<style lang='less' scoped>
.City {
  background: #f5f5f5;
}
.head {
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
  color: #fff;
  font-size: 0.7rem;
  &:nth-child(1) span {
    float: left;
    margin-left: 0.5rem;
  }
  span,
  i {
    font-style: normal;
    margin-top: 0.5rem;
  }
  .logn {
    float: right;
    margin-right: 0.5rem;
  }
}
.head_poCity {
  display: flex;
  justify-content: space-between;
  line-height: 1.45rem;
  padding: 0 0.45rem;
  span {
    font-size: 0.55rem;
    color: #666;
  }
}
.head_floer {
  width: 100%;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  height: 1.8rem;
  // padding: 0 .45rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
  font: 0.75rem/1.8rem Microsoft YaHei;
  span {
    float: right;
    margin-right: 0.5rem;
  }
}
.hot_city {
  margin-bottom: 0.4rem;
  p {
    background: #fff;
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem Helvetica Neue;
  }
  span {
    // display: inline-block;
    background: #fff;

    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: 0.6rem/1.75rem Microsoft YaHei;
    box-sizing: border-box;
  }
}
.allCity {
  div {
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    span {
      float: left;
      // display: inline-block;
      overflow: hidden;
      text-align: center;
      color: #666;
      border-bottom: 0.025rem solid #e4e4e4;
      border-right: 0.025rem solid #e4e4e4;
      width: 25%;
      height: 1.75rem;
      font: 0.6rem/1.75rem Microsoft YaHei;
      box-sizing: border-box;
      overflow: hidden;
      zoom: 1;
    }
    p {
      // float: left;
      color: #666;
      font-weight: 400;
      text-indent: 0.45rem;
      border-top: 2px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      font: 0.55rem/1.45rem Helvetica Neue;
    }
  }
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
</style>
