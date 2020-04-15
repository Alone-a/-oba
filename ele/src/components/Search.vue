<template>
  <div class="Search">
   

    <form action>
      <input type="text" placeholder="清输入商家或没事名称" class="inp" v-model="mes" />
      <input type="button" value="提交" class="inp2" @click="send" />
    </form>

    <p class="frim" v-if="messsage!=''">商家</p>
    <div class="store" v-for="(item,index) in messsage" :key="index" @click="to(item.id)">
      <div>
        <img :src="' http://elm.cangdu.org/img/'+item.image_path" alt />
        <div class="frim_p">
          <p>{{item.name}}</p>
          <p>月销{{item.recent_order_num}}单</p>
          <p>{{item.float_minimum_order_amount}}起送 / 距离{{item.distance}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      mes: "",
      messsage: ""
    };
  },
  methods: {
     to(id) {
      this.$router.push({
        path: "/Details",
        query: {
          id: id
        }
      });
    },
    //
    send() {
      this.$http
        .get(
          "https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=" +
            this.mes
        )
        .then(res => {
          this.messsage = res.data;
          // //console.log(res.data);
        })
        .catch(err => {
          // //console.log(err.data);
        });
    },
  }
};
</script>


<style lang='less' scoped>
.frim_p {
  width: 100%;
  margin-left: 0.5rem;
  font-size: 0.7rem;
  padding-bottom: 0.25rem;
  border-bottom: 0.025rem solid #e4e4e4;
  color: #666;
}
.store > div {
  background: #fff;
  display: flex;
  justify-content: "center";
  padding: 0.5rem;
  border-bottom: 0.025rem solid #e4e4e4;
}
img {
  width: 1.7rem;
  height: 1.7rem;
}
.frim {
  font-size: 0.6rem;
  line-height: 2rem;
  text-indent: 0.5rem;
  font-weight: 700;
  color: #666;
}
form {
  background-color: #fff;
  padding: 0.5rem;
  display: flex;
}
.inp {
  flex: 4;
  border: 0.025rem solid #e4e4e4;
  font-size: 0.65rem;
  color: #333;
  border-radius: 0.125rem;
  background-color: #f2f2f2;
  font-weight: 700;
  padding: 0 0.25rem;
  height: 1.5rem;
}
input {
  outline: none;
}
.inp2 {
  flex: 1;
  border: 0.025rem solid #3190e8;
  margin-left: 0.2rem;
  font-size: 0.65rem;
  color: #fff;
  border-radius: 0.125rem;
  background-color: #3190e8;
  font-weight: 700;
  padding: 0 0.25rem;
}


</style>
