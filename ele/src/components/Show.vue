<template>
  <div class="Show">
    <div class="head">
      <div>
        <i class="el-icon-arrow-left" @click="windIndex"></i>
        <span>{{this.$route.query.name}}</span>
      </div>
    </div>
    <div class="box">
      <div>
        <div>
          <span
            @click="show1=!show1,show=false,show3=false"
            :class="show1?'q1':'12'"
          >{{this.$route.query.name}}</span>
          <i :class="show1?'el-icon-arrow-up q1':'el-icon-arrow-down'"></i>
        </div>
      </div>
      <div>
        <div>
          <span @click="show3 = !show3,show=false,show1=false" :class="show3?'q1':'12'">排序</span>
          <i :class="show3?'el-icon-arrow-up q1':'el-icon-arrow-down'"></i>
        </div>
      </div>
      <div>
        <div>
          <span @click="show = !show,show1=false,show3=false" :class="show?'q2':''">筛选</span>
          <i :class="show?'el-icon-arrow-up q1':'el-icon-arrow-down'"></i>
        </div>
      </div>
    </div>
    <div style="height:5.1rem"></div>

    <div id="big" v-for="(item,index) in mes" :key="index" @click="move(item.id)">
      <div class="content">
        <div>
          <img :src="'//elm.cangdu.org/img/'+item.image_path" alt />
        </div>
        <div class="content_1">
          <p class="one">
            <span class="content_tips">{{item.name}}</span>
            <span class="money">
              <li>保</li>
              <li>准</li>
              <li>票</li>
            </span>
          </p>
          <p class="content_p">
            <span>
              <span style="color:yellow">★★★★★</span>
              <span>{{item.rating}}</span>
              <span>月增106单</span>
            </span>
            <span class="shop_samll" style="    transform: scale(.7);margin-right: -.8rem">
              <span class="song">{{item.delivery_mode.text}}</span>
              <span class="da">准时达</span>
            </span>
          </p>

          <p class="content_p">
            <span>{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
            <span class="shop_samll">
              <span>{{item.distance}} /</span>
              <span style="color:#3190e8">{{item. order_lead_time}}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <transition name="bounce">
      <!-- 排序的弹出框 -->
      <!-- <el-button @click="show3 = !show3">Click Me</el-button> -->
      <div style="margin-top: 20px; height: 200px; width:100%" class="eject" v-if="show3">
        <el-collapse-transition>
          <div v-if="show3">
            <div class="transition-box">
              <li v-for="(item,index) in arr" :key="index" :class="item.flag?'q1':''">
                <i :class="item.icon"></i>
                <p @click="sort(item.id)" :class="item.flag?'q1':''">{{item.name}}</p>
              </li>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </transition>

    <transition name="slide-fade">
      <div style="margin-top: 20px; height: 220px; width:100%" class="eject1" v-if="show">
        <el-collapse-transition>
          <div v-if="show">
            <div class="transition-box">
              <ul>
                <li class="showHead">
                  <p>配送方式</p>
                  <p>
                    <span @click="clickColor(10)" :class="arr1.indexOf(10)>=0?'q2':''">
                      <i class="el-icon-truck" style="margin: 0 .4rem;"></i>
                      蜂鸟转送
                    </span>
                  </p>
                </li>
                <li>
                  <p class="propety">商家属性（可以多选）</p>
                  <div class="fBox">
                    <p
                      v-for="(item,index) in about"
                      :key="index"
                      class="bigP"
                      @click="clickColor(item.id)"
                    >
                      <span
                        :class="arr1.indexOf(item.id)>=0?'q2':''"
                        class="iconSpan"
                        :style="'color:#'+item.icon_color"
                      >{{item.icon_name}}</span>
                      <span :class="arr1.indexOf(item.id)>=0?'q2':''">{{item.name}}</span>
                    </p>
                  </div>
                </li>
                <li class="btn">
                  <button @click="clear">清空</button>
                  <button class="okBtn">确定{{arr1.length}}</button>
                </li>
              </ul>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="eject2" v-if="show1">
        <el-collapse-transition>
          <div>
            <div class="transition-box">
              <ul class="e_left">
                <li
                  v-for="(item,index) in listArr"
                  :key="index"
                  @click="detailClick(item.id)"
                  :class="detailColor==item.id?'q3':''"
                >
                  <span>
                    <img
                      v-if="index>0"
                      :src="'https://fuss10.elemecdn.com/4/82/43703799592368585b23589cf3ba8png.png'"
                      alt
                    />
                    {{item.name}}
                  </span>
                  <span class="font">
                    <span>{{item.count}}</span>
                    <i :class="index>0?'el-icon-right':''"></i>
                  </span>
                </li>
              </ul>
              <ul class="right_e">
                <li v-for="(item,index) in detail" :key="index">
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </transition>

    <div class="bg" v-if="show||show3||show1"></div>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      mes: "",
      show1: false,
      show: false,
      show3: false,
      arr1: [],
      about: "",
      listArr: "",
      detailColor: "",
      detail: "",
      arr: [
        {
          id: 4,
          flag: false,
          name: "智能排序",
          icon: "el-icon-sort"
        },
        {
          flag: false,

          id: 5,
          name: "距离最近",
          icon: "el-icon-location-outline"
        },
        {
          flag: false,
          id: 6,
          name: "销量最高",
          icon: "el-icon-medal-1"
        },
        {
          flag: false,
          id: 1,
          name: "起送价最低",
          icon: "el-icon-bottom"
        },
        {
          flag: false,
          id: 2,
          name: "配送速度最快",
          icon: "el-icon-loading"
        },
        {
          flag: false,
          id: 3,
          name: "评分最高",
          icon: "el-icon-thumb"
        }
      ]
    };
  },
  mounted() {
    //求数据 https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762
    let baseUrl =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http
      .get(baseUrl)
      .then(res => {
        this.mes = res.data;
      })
      .catch(err => {});

    let baseUrl1 =
      " https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
    this.$http
      .get(baseUrl1)
      .then(res => {
        this.about = res.data;
        this.show3 = false;
      })
      .catch(err => {});

    //分类的点击事件
    this.$http
      .get("https://elm.cangdu.org/shopping/v2/restaurant/category")
      .then(res => {
        this.listArr = res.data;
        this.detail = res.data[1].sub_categories;
        this.detailColor = res.data[1].id;
      })
      .catch(err => {});
  },
  methods: {
    //商品详情的点击事件
    detailClick(id) {
      for (let a = 0; a < this.listArr.length; a++) {
        if (id == this.listArr[a].id) {
          this.detail = this.listArr[a].sub_categories;
          this.detailColor = this.listArr[a].id;
        }
      }
    },
    //商家活动属性的请求
    move(id) {
      this.$router.push({
        path: "/Details",
        query: {
          id: id
        }
      });
    },
    //点击返回上一层的函数
    windIndex() {
      this.$router.push("/Sheet");
    },
    //点击发送请求  排序
    sort(id) {
      //每次点击的时候 循环数组 进行比较
      for (let a = 0; a < this.arr.length; a++) {
        if (id == this.arr[a].id) {
          this.arr[a].flag = true;
        } else {
          this.arr[a].flag = false;
        }
      }
      let baseUrl =
        "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&order_by=" +
        id;
      this.$http
        .get(baseUrl)
        .then(res => {
          this.mes = res.data;
          this.show3 = false;
        })
        .catch(err => {});
    },
    //
    clickColor(id) {
      if (this.arr1.indexOf(id) == -1) {
        this.arr1.push(id);
      } else {
        this.arr1.splice(this.arr1.indexOf(id), 1);
      }
    },
    //清空按钮的点击事件的函数
    clear() {
      this.arr1 = [];
    }
  }
};
</script>


<style lang='less' scoped>
.right_e {
  li {
    box-sizing: border-box;
    width: 97%;
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
    border-bottom: 0.025rem solid #e4e4e4;
  }
  height: 16.5rem;
  overflow-y: scroll;
}
.font {
  span {
    border-radius: 0.5rem;
    transform: scale(0.9);
    padding: 0 0.2rem;
    color: #fff;
    background-color: #ccc;
    font-size: 0.4rem;
    border: 0.025rem solid #ccc;
  }
}
.eject2 {
  height: 16.5rem;
  width: 100%;
  position: fixed;
  top: 5.121rem;
  left: 0;
  z-index: 1232;
  background: #fff;
  .transition-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    ul {
      width: 50%;
      font-size: 0.5rem;
      color: #666;
      line-height: 1.8rem;
      padding: 0;
    }
  }
}
.e_left {
  background: #f1f1f1;
  li {
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    img {
      width: 0.8rem;
      height: 0.8rem;
      vertical-align: middle;
      margin-right: 0.2rem;
    }
  }
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}
.btn {
  margin-top: 0.3rem;
  display: block;
  button {
    color: #fff;
    border: 0.025rem solid #fff;
    width: 49%;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.8rem;
    line-height: 1.8rem;
    border-radius: 0.2rem;
  }
  .okBtn {
    background-color: #56d176;
    color: #fff;
    border: 0.025rem solid #56d176;
  }
}
.eject1 {
  padding-left: 0.6rem;
  width: 100%;
  position: fixed;
  top: 4.121rem;
  left: 0;
  z-index: 1232;
  background: #fff;
  .showHead {
    p {
      font-size: 0.4rem;
      color: #333;
      line-height: 1.5rem;
      height: 1.5rem;
      text-align: left;
      padding-left: 0.5rem;
      span {
        display: flex;
        align-items: center;
        border: 0.025rem solid #eee;
        width: 4.7rem;
        height: 1.4rem;
        margin-right: 0.25rem;
        border-radius: 0.125rem;
        padding: 0 0.25rem;
        margin-bottom: 0.25rem;
      }
    }
  }
}
.fBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.iconSpan {
  width: 0.8rem;
  height: 0.8rem;
  font-size: 0.5rem;
  border: 0.025rem solid #e4e4e4;
  border-radius: 0.15rem;
  margin-right: 0.25rem;
  line-height: 0.8rem;
  text-align: center;
}
.propety {
  font-size: 0.4rem;
  color: #333;
  line-height: 1.5rem;
  height: 1.5rem;
  text-align: left;
  padding-left: 0.5rem;
  background-color: #fff;
}
.bigP {
  display: flex;
  align-items: center;
  border: 0.025rem solid #eee;
  width: 4.8rem;
  height: 1.4rem;
  margin-right: 0.25rem;
  border-radius: 0.125rem;
  padding: 0 0 0 0.5rem;
  margin-bottom: 0.25rem;
  span {
    font-size: 0.4rem;
    color: #333;
  }
}
.eject {
  width: 100%;
  position: fixed;
  top: 4.121rem;
  left: 0;
  z-index: 1232;
  div {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      p {
        line-height: 2.5rem;
        flex: auto;
        text-align: left;
        text-indent: 0.25rem;
        border-bottom: 0.025rem solid #e4e4e4;
        font-size: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        vertical-align: middle;
      }
      i {
        vertical-align: middle;
        width: 0.7rem;
        height: 0.7rem;
        margin: 1.05rem 0.6rem 0 1rem;
        font-size: 0.5rem;
      }
    }
  }
}
.one {
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  color: #999;
  span {
    transform: scale(0.8);
    margin-right: -0.4rem;
    li {
      display: inline-block;
      border: 0.025rem solid #f1f1f1;
      padding: 0 0.04rem;
      border-radius: 0.08rem;
      margin-left: 0.05rem;
    }
  }
}
.content_p {
  display: flex;
  justify-content: space-between;
}
#big {
  padding: 0.7rem;
  padding-right: 0;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  border-bottom: 0.1rem solid #f1f1f1;
}
.content_1 {
  flex: auto;
  width: 78%;
}
.content_1 p:nth-of-type(2),
.content_1 p:nth-of-type(3) {
  font-size: 0.6rem;
  margin-top: 0.5rem;
}
.content_2 p:nth-of-type(1) {
  font-size: 0.7rem;
}
.content_2 {
  text-align: right;
  float: right;
  p {
    margin-top: 0.2rem;
  }
}
.song {
  color: #fff;
  background-color: #3190e8;
  border: 0.025rem solid #3190e8;
  font-size: 0.1rem;
}

.da {
  color: #3190e8;
  border: 0.025rem solid #3190e8;
  font-size: 0.1rem;
}
.content_2 p:nth-of-type(3) {
  span {
    color: #999;
    font-size: 0.4rem;
  }
}
.content {
  text-align: left;
  background: #fff;
  div {
    display: inline-block;
    vertical-align: middle;
    img {
      width: 3.1rem;
      height: 3.1rem;
      display: block;
    }
  }
}
.content_tips {
  font-size: 2rem;
  width: 8.5rem;
  color: #333;
  padding-top: 0.01rem;
  font: 0.65rem/0.65rem PingFangSC-Regular;
  font-weight: 700;
  margin-left: -0.9rem;
}
.content_tips::before {
  content: "\54C1\724C";
  display: inline-block;
  font-size: 0.8rem;
  line-height: 0.6rem;
  color: #333;
  background-color: #ffd930;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  margin-right: 0.2rem;
}

.head {
  div {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.95rem;
    text-align: center;
    span {
      font-size: 1.1rem;
      color: #fff;
      text-align: center;
      font-weight: 700;
      margin-top: 0.6rem;
      display: inline-block;
      margin-right: 0.4rem;
    }
    i {
      float: left;
      margin: 0.9rem 0 0 0.4rem;
      color: #fff;
    }
  }
}
.box {
  width: 100%;
  background: #fff;
  border-bottom: 0.025rem solid #f1f1f1;
  position: fixed;
  top: 2.95rem;
  left: 0;
  z-index: 12;
  display: flex;
  justify-content: space-between;
  div {
    width: 33.33%;
    height: 2.1rem;

    background-color: #fff;
    line-height: 2rem;
    div {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      border-right: 0.025rem solid #e4e4e4;
      span {
        font-size: 0.65rem;
        color: #444;
        width: 33.3%;
        height: 1.6rem;
        text-align: center;
        line-height: 1rem;
      }
    }
  }
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.transition-box {
  background-color: #fff;
  box-sizing: border-box;
  margin-right: 20px;
}
.q1 {
  color: #3190e8 !important;
}
.q2 {
  color: #3190e8 !important;
}
.q3 {
  background: #fff;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
