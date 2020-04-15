<template>
  <div class="Index">
    <template>
      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="9.5rem" :autoplay="false">
          <el-carousel-item v-for="(item,index) in 2" :key="index">
            <h3 class="small">
              <div class="text">
                <div v-for="(t, i) in mes.slice(index*8, 8*(index+1))" :key="i">
                  <img
                    :src="'https://fuss10.elemecdn.com'+t.image_url"
                    alt
                    @click="toShow(t.title)"
                  />
                  <p @click="toShow(t.title)">{{t.title}}</p>
                </div>
              </div>
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </template>
    <div class="home">
        <i class="el-icon-house"></i>
      附近商家</div>
    <!--  -->
    <div id="big" v-for="(item,index) in messsage" :key="index" @click="toShop(item.id)">
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
  </div>
</template>

<script>
//https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg
export default {
  name: "Index",
  data() {
    return {
      mes: "",
      mes1: this.$store.state.room,
      messsage: "",
      arr: [
        [
          {
            name: "甜品饮品",
            img: "static/img/1.jpeg"
          },
          {
            name: "商超便利",
            img: "static/img/2.jpeg"
          },
          {
            name: "美食",
            img: "static/img/3.jpeg"
          },
          {
            name: "简餐",
            img: "static/img/4.jpeg"
          },
          {
            name: "新店特惠",
            img: "static/img/5.jpeg"
          },
          {
            name: "准时达",
            img: "static/img/6.jpeg"
          },
          {
            name: "预定早餐",
            img: "static/img/7.jpeg"
          },
          {
            name: "土豪推荐",
            img: "static/img/8.jpeg"
          }
        ],
        [
          {
            name: "川湘菜",
            img: "static/img/10.jpeg"
          },
          {
            name: "麻辣烫",
            img: "static/img/11.jpeg"
          },
          {
            name: "包子粥店",
            img: "static/img/12.jpeg"
          },
          {
            name: "鲜花蛋糕",
            img: "static/img/13.jpeg"
          },
          {
            name: "日韩料理",
            img: "static/img/14.jpeg"
          },
          {
            name: "果树生鲜",
            img: "static/img/15.jpeg"
          },
          {
            name: "甜品饮汉堡薯条品",
            img: "static/img/16.jpeg"
          },
          {
            name: "披萨意面",
            img: "static/img/17.jpeg"
          }
        ]
      ]
    };
  },
  beforeMount() {
    //https://elm.cangdu.org
    let id = this.$route.query.id;
    let baseUrl = "https://elm.cangdu.org";
    this.$http
      .get(baseUrl + "/v2/index_entry")
      .then(res => {
        this.mes = res.data;
        // //console.log(res.data);
      })
      .catch(err => {
        // //console.log(err.data);
      });
  },
  mounted() {
    let id = this.$route.query.id;
    let baseUrl =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http
      .get(baseUrl)
      .then(res => {
        this.messsage = res.data;
        //console.log(res.data);
      })
      .catch(err => {
        // //console.log(err.data);
      });
  },
  methods: {
    //点击顶部推荐商品的时候  跳转页面  并且携带参数
    toShow(res) {
      this.$router.push({
        path: "/Show",
        query: {
          name: res
        }
      });
    },
    //商品详情的跳转
    toShop(id) {
      this.$router.push({
        path: "/Details",
        query: {
          id: id
        }
      });
    }
  }
};
</script>


<style lang='less' scoped>
.el-carousel__button{
  border-radius: 100%;
  background: #3190e8;
}
.home{
  margin-top: .5rem;
  padding: .2rem 0 0 0.6rem;
  text-align: left;
  font-size: .7rem;
  background: #fff;
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
  // border: 1px solid red;
}
#big {
  // border: 1px solid red;
  padding: 0.7rem;
  padding-right: 0;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  border-bottom: 0.1rem solid #f1f1f1;
  // position: relative;
}
.content_1 {
  flex: auto;
  // border: 1px solid red;
  // float: right;
  width: 78%;
}
.content_1 p:nth-of-type(2),
.content_1 p:nth-of-type(3) {
  font-size: 0.6rem;
  margin-top: 0.5rem;
}
.content_2 p:nth-of-type(1) {
  font-size: 0.7rem;
  // float: right;
}
.content_2 {
  text-align: right;
  float: right;
  // margin-right: 1rem;
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
  // background-color: #3190e8;
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
  // width: 100%;
  background: #fff;
  div {
    display: inline-block;
    vertical-align: middle;
    // height: 4rem;
    // padding: 0.4rem;
    img {
      width: 3.1rem;
      height: 3.1rem;
      display: block;
      // margin-right: 0.4rem;
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

.Index {
  text-align: center;
}
.text {
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #fff;
  div {
    height: 4.5rem;
    width: 25%;
    // border: 1px solid red;
    box-sizing: border-box;
    img {
      margin-bottom: 0.3rem;
      width: 1.8rem;
      height: 1.8rem;
    }
    p {
      text-align: center;
      font-size: 0.55rem;
      color: #666;
    }
  }

  .text_d {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
  }
}
.head {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.95rem;
  div {
    display: flex;
    justify-content: space-around;
    margin-top: 0.6rem;
    span {
      font-size: 1.1rem;
      color: #fff;
      text-align: center;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 60%;
    }
    i {
      // background: #fff;
      color: #fff;
      margin-top: 0.25rem;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  // font-size: 14px;
  // opacity: 0.75;
  // line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
