<template>
  <div class="Shop">
    <div class="shop_big">
      <div class="shop_left">
        <ul>
          <li
            v-for="(item,index) in mes"
            :key="index"
            :class="num==index?'q2':''"
            @click="changeNum(index)"
          >
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="shop_right">
        <ul v-for="(item,index) in mes" :key="index" class="shopList" :id="'shop'+index">
          <p class="tiele">
            <span class="title_span_big">{{item.name}}</span>
            <span>{{item.description}}</span>
          </p>
          <li v-for="(t,i) in item.foods" :key="i">
            <i v-if="!t.is_essential" class="shop_new">
              <span>新品</span>
            </i>
            <img :src="'http://elm.cangdu.org/img/'+t.image_path" alt />
            <div>
              <p class="one_p">{{t.name}}</p>
              <!-- http://elm.cangdu.org/img/16f35f39b6262048.jpg -->
              <p class="two_p">{{t.description}}</p>
              <p>
                <span>月售{{t.month_sales}}分</span>
                <span>好评率{{t.satisfy_rate}}%</span>
              </p>
              <p class="three_p">{{t.description}}</p>
              <p class="font_p">
                <span>￥{{t.category_id}}</span>
              </p>
              <p class="shop_add">
                <transition name="slide-fade">
                  <span
                    v-for="(o,v) in car"
                    :key="v"
                    v-if="o.id==t._id&&o.num>0"
                    class="shop_add_span"
                  >
                    <i class="el-icon-remove-outline" @click="ruduce(t._id,t.category_id)"></i>
                    <span>{{o.num}}</span>
                  </span>
                </transition>
                <i class="el-icon-circle-plus-outline" @click="addCar(t._id,t.category_id)"></i>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="shop_car">
      <div class="shop_car_icon">
        <div :class="money>0?'q3':''">
          <i class="el-icon-truck"></i>
          <span v-if="money>0">{{money}}</span>
        </div>
      </div>
      <div class="shop_car_num">
        <p>￥{{toal}}</p>
        <p class="car_num_p">配送费5</p>
      </div>

      <div :class="toal>20?'shop_car_s q4':'shop_car_s'">
        <span v-if="toal>20">去结算</span>
        <span v-else>还差￥{{20-toal}}起送</span>
      </div>
      <!-- <div>去结算</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  data() {
    return {
      mes: "",
      num: 0,
      flag: true,
      car: [{ id: 1, num: 1, money: 1 }],
      money: "",
      toal: 0
    };
  },
  updated() {
    // for(let a of this.car){
    //   this.money+=a.num
    // }
  },
  mounted() {
    //https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1
    this.$http
      .get(
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.$route.query.id
      )
      .then(res => {
        this.mes = res.data;
        //console.log(res.data);
      })
      .catch(err => {
        //console.log(err.data);
      });

    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //减少的事件

    ruduce(id,n) {
      this.money = Number(this.money) - 1;
      this.toal = Number(this.toal) - n;
      for (let a = 0; a < this.car.length; a++) {
        if (this.car[a].id == id) {
          this.car[a].num--;
          if (a.num == 0) {
            //删除这个商品
            this.car.splice(this.car.indexOf(this.car[a]), 1);
          }
        }
      }
      //console.log(this.car);
    },
    //加入购物车的点击事件
    addCar(id, n) {
      this.toal = Number(this.toal) + n;
      //console.log(this.toal);
      this.money = Number(this.money) + 1;
      for (let a = 0; a < this.car.length; a++) {
        // //console.log(id)
        if (this.car[a].id == id) {
          this.car[a].num++;
          //console.log(this.car);

          break;
        }
        if (a == this.car.length - 1) {
          this.car.push({ id: id, num: 1 });
          //console.log(this.car);
          break;
        }
      }
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let a = document.querySelectorAll(".shopList");
      for (let i = 0; i < a.length; i++) {
        if (
          a[i].offsetTop - 100 < scrollTop &&
          a[i + 1].offsetTop > scrollTop
        ) {
          this.num = i;
        }
      }
    },
    changeNum(id) {
      this.num = id;
      //获取页面的滚动偏移量
      let scrollNum =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      //获取滚动页面的高度
      let shop = document.querySelector("#shop" + id);
      let shopRight = document.querySelector(".shop_right");
      // console.log("滚动", scrollNum);
      // console.log("元素", shop.offsetTop);
      // console.log(shopRight);
      let a = scrollNum - shop.offsetTop;
      if (this.flag) {
        a += 120;
        this.flag = false;
      }
      // console.log(a);

      shopRight.style.transform = "translateY(" + a + "px)";
      let timer = setInterval(() => {
        a < 0 ? (a -= 1) : (a += 1);
        shopRight.style.transform = "translateY(" + a + "px)";
        if (a > -5 || a < 5) {
          clearInterval(timer);
        }
      }, 1000);
    }
  }
};
</script>


<style lang='less' scoped>
.shop_car {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #3d3d3f;
  height: 3rem;
  div {
    display: inline-block;
  }
  .shop_car_icon {
    div {
      // display: flex;
      background-color: #3d3d3f;
      // background: #3190e8;

      position: absolute;
      width: 2rem;
      height: 2rem;
      padding: 0.4rem;
      border: 0.18rem solid #444;
      border-radius: 50%;
      left: 0.5rem;
      top: -0.7rem;
      text-align: center;
      line-height: 2rem;
      i {
        width: 1rem;
        height: 1rem;
        color: #fff;
      }
      span {
        position: absolute;
        top: -0.5rem;
        right: 0;
        background: #ff461d;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        font-size: 0.1rem;
        line-height: 1rem;
        color: #fff;
        font-weight: 500;
      }
    }
  }
  .shop_car_s {
    vertical-align: middle;
    float: right;
    height: 100%;
    line-height: 100%;
    // margin-top: 0.5rem;
    padding: 1rem 0.4rem 0 0.4rem;
    background: #535356;
    // align-items: center;
    span {
      font-size: 0.9rem;
      color: #fff;
      font-weight: 700;
    }
  }
  .shop_car_num {
    margin: 0.5rem 0 0 4rem;
    p {
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.1rem;
    }
    .car_num_p {
      font-size: 0.4rem;
    }
  }
}
.shop_add {
  position: absolute;
  // width: 2rem;
  right: 1rem;
  bottom: 1rem;
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  i {
    fill: #3190e8;
    // background: #3190e8;
    color: #3190e8;
  }
  // span {
  //   display: inline-block;
  //   // border: 1px solid red;
  //   border-radius: 100%;
  //   width: 0.5rem;
  //   height: 0.5rem;
  //   font-size: 0.1rem;
  // }
  .shop_add_span {
    display: flex;
    span {
      margin: 0 0.2rem;
    }
    justify-content: space-between;
  }
}
.tiele {
  width: 100%;
  padding: 0.7rem 0.4rem;
  display: flex;
  justify-content: end;
  align-items: center;
  span {
    font-size: 0.5rem;
    color: #999;
  }
  .title_span_big {
    font-size: 0.7rem;
    color: #666;
    font-weight: 700;
    margin-right: 0.5rem;
  }
}
.shopList {
  position: relative;
  li {
    // display: flex;
    background-color: #fff;
    padding: 0.6rem 0.4rem;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden;
    // justify-content: space-between;
    .shop_new {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #4cd964;
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: flex-end;
      transform: rotate(-45deg) translate(-0.1rem, -1.5rem);
      border: none;
      border-radius: 0;
      span {
        font-size: 0.4rem;
        color: #fff;
        text-align: center;
        flex: 1;
        transform: scale(0.8) translate(0.1rem, -0.1rem);
      }
    }
    img {
      width: 2rem;
      height: 2rem;
      display: inline-block;
      vertical-align: middle;
    }
    div {
      vertical-align: middle;

      display: inline-block;
      width: 75%;
    }
  }
  p {
    font-size: 0.7rem;
    color: #333;
  }
  .one_p {
    font-size: 0.9rem;
    overflow-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
  }
  .two_p {
    font-size: 0.5rem;
    color: #999;
    line-height: 0.6rem;
    overflow-wrap: normal;
    white-space: nowrap;
    overflow: hidden;
  }
  .font_p {
    span {
      color: #f60;
      font-weight: 700;
    }
    margin-right: 0.3rem;
    font-size: 0.7rem;
  }
  .three_p {
    font-size: 0.3rem;
    border: 1px solid currentColor;
    border-radius: 0.3rem;
    padding: 0.08rem;
    display: inline-block;
    transform: scale(0.8);
    // margin-left: -.35rem;
    color: rgb(241, 136, 79);
    border-color: rgb(240, 115, 115);
  }
}
.shop_right {
  width: 100%;
  // border:  1px solid red;
  overflow-y: auto;
  overflow: hidden;
  margin-left: 4rem;
  // height: 26rem;
}
.shop_big {
  display: flex;
  justify-content: space-between;
}
.shop_left {
  position: fixed;
  left: 0;
  top: 6rem;
  width: 22%;
  ul {
    li {
      width: 100%;
      padding: 0.7rem 0.4rem;
      border-bottom: 0.025rem solid #ededed;
      box-sizing: border-box;
      border-left: 0.15rem solid #f8f8f8;
      position: relative;
      // background: #fff;
      span {
        font-size: 0.7rem;
        color: #666;
      }
    }
  }
}
.q2 {
  border-left: 0.15rem solid #3190e8 !important;
  background-color: #fff;
}
.q3 {
  background: #3190e8 !important;
}
.q4 {
  background: #4cd964 !important;
  padding: 1rem 1rem 0 1rem !important;
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
