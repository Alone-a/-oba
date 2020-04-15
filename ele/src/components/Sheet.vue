<template>
  <div class="Sheet">
    <div class="head">
      <div>
        <i class="el-icon-arrow-left" v-if="num>=2" @click="back"></i>
        <i class="el-icon-search" v-else @click="to(2)"></i>
        <span>{{mes}}</span>
        <i class="people el-icon-s-custom" @click="to(4)" v-if="num<4"></i>
        <i class="people el-icon-s-custom" style="color:#3190e8" v-else></i>
      </div>
    </div>
    <div style="height:2.5rem"></div>
    <router-view></router-view>
    <div class="tail">
      <div
        v-for="(item,index) in tailArr"
        :key="index"
        :class="item.flag?'q1':''"
        @click="to(item.id)"
      >
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sheet",
  data() {
    return {
      num: 1,
      mes: this.$store.state.room,
      tailArr: [
        {
          flag: true,
          name: "外卖",
          id: 1,
          icon: "el-icon-eleme"
        },
        {
          flag: false,
          name: "搜索",
          id: 2,
          icon: "el-icon-s-grid"
        },
        {
          flag: false,
          name: "订单",
          id: 3,
          icon: "el-icon-document"
        },
        {
          flag: false,
          name: "我的",
          id: 4,
          icon: "el-icon-user-solid"
        }
      ]
    };
  },
  mounted() {
    let id = this.$store.state.flag;
    //展示相对应的页面
    this.changeFlag(id);
    this.num=id;
  },
  watch: {
    $route(to, from) {
      //////////////console.log(to.path);
      if (to.path == "/Sheet/My") {
        this.changeFlag(4);
      } else if (to.path == "/Sheet/Index") {
        this.changeFlag(1);
      } else if (to.path == "/Sheet/Search") {
        this.changeFlag(2);
      }else{
        this.changeFlag(3);
      }
    }
  },

  methods: {
    //跳转搜索的点击事件
    to(id) {
      if (id == 2) {
        this.mes='搜索'
        this.$router.push("/Sheet/Search");
      } else if (id == 1) {
        this.mes=this.$store.state.room
        this.$router.push("/Sheet/Index");
      } else if (id == 3) {
        this.$router.push("/Sheet/Order");
        this.mes='订单'
      } else {
        this.$router.push("/Sheet/My");
        this.mes='我的'
      }
      this.$store.commit("changeFlag", id);
      this.num=id;

      this.changeFlag(id);
    },
    changeFlag(id) {
      for (let a of this.tailArr) {
        if (a.id == id) {
          a.flag = true;
        } else {
          a.flag = false;
        }
      }
    },

  
    //返回的点击事件
    back() {
      if (this.num != 1) {
        this.$store.commit("changeFlag", 1);

        this.num = 1;
        this.$router.push("/Sheet/Index");
        this.changeFlag(1);
      } else {
        return;
      }
    }
  }
};
</script>


<style lang='less' scoped>
.tail {
  // border: 1px solid red;
  height: 2.54rem;
  background: #fff;
  position: fixed;
  z-index: 111;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
  div {
    text-align: center;
    span {
      display: block;
      font-size: 0.45rem;
      color: #666;
      margin-top: 0.4rem;
    }
    i {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      margin-top: 0.3rem;
      fill: #ccc;
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
  height: 2.5rem;
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
.q1 {
  color: #099aff;
  font-weight: 800;
}
</style>
