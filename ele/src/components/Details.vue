<template>
  <div class="Details">
    <div class="Details_head">
      <div
        class="details_box"
        :style="'background:url(http://elm.cangdu.org/img/'+mes.image_path+') '"
      >
        <div></div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="details_title">
        <img :src="'http://elm.cangdu.org/img/'+mes.image_path" alt />
        <div>
          <span>{{mes.name}}</span>
          <p>
            <span>商家配送</span>
            <span>{{mes.float_minimum_order_amount}}分钟送达</span>
            <span>配送费￥{{mes.status}}</span>
          </p>
          <p>公告：{{mes.promotion_info}}</p>
        </div>
      </div>
    </div>
    <div class="details_content">
      <div>
        <span :class="num==1?'q1':''">商品</span>
      </div>
      <div>
        <span :class="num==2?'q1':''">评价</span>
      </div>
    </div>
    <div style="height:6.1rem"></div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      mes: "",
      message: "",
      num: 1
    };
  },
  mounted() {
    //https://elm.cangdu.org/shopping/restaurant/1

    this.$http
      .get("https://elm.cangdu.org/shopping/restaurant/" + this.$route.query.id)
      .then(res => {
        this.mes = res.data;
        // ////console.log(res.data);
      })
      .catch(err => {
        ////console.log(err.data);
      });
  },
  methods: {
    //跳转详情
    toShop() {
      this.$router.push({
        path: "/Details/Shop",
        query: {
          id: this.$route.query.id
        }
      });
    }
  },
  // watch: {
  //   $route(to, from) {
  //     ////console.log(from.path);
  //   }
  // }
};
</script>


<style lang='less' scoped>
.details_content {
  width: 100%;
  position: fixed;
  top: 4rem;
  left: 0;
  z-index: 12;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.3rem 0 0.6rem;
  border-bottom: 1px solid #ebebeb;

  div {
    text-align: center;
    flex: 1;

    span {
      font-size: 0.75rem;
      color: #666;
      padding: 0.3rem 0.1rem;
      border-bottom: 0.12rem solid #fff;
    }
  }
}
.Details_head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100%;
  .details_box {
    // border: 1px solid red;
    background-size: cover;
    opacity: 0.4;
    height: 4rem;
    position: relative;
    z-index: 1;
    div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #000;
      opacity: 0.8;
      z-index: 11;
    }
    i {
      color: #fff;
      position: absolute;
      z-index: 122;
      top: 40%;
      right: 0.8rem;
      font-weight: 800;
    }
  }
  .details_title {
    position: absolute;
    padding: 0.3rem;
    top: 0;
    z-index: 12;
    display: flex;
    justify-content: space-between;
    img {
      width: 2.9rem;
      height: 2.9rem;
      display: block;
      margin-top: 0.25rem;
      border-radius: 0.15rem;
    }
    div {
      & > span {
        font-size: 1rem;
        color: #fff;
        margin-left: 1rem;
      }
      p {
        font-size: 0.5rem;
        margin-top: 0.3rem;
        color: #fff;
        margin-bottom: 0.3rem;
        margin-left: 1rem;
      }
    }
  }
}
.q1 {
  color: #3190e8 !important;
  border-color: #3190e8 !important;
}
</style>
