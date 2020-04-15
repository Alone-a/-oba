<template>
 <div class='Tips'>
  <div class="warn" v-if="flag">
      <div>
        <span class="q1"></span>
        <span class="q2"></span>
      </div>
      <p>{{mes}}</p>
      <button @click="changeFlag">确认</button>
    </div>
  <!-- </div> -->
 </div>
</template>

<script>
export default {
 name:'Tips',
 data() {
 return {
      mes: "fdafasd",
      flag:true
 }
 },
 methods: {
  //点击确认更改flag的值  让弹框显示
    changeFlag(){
        this.flag=false;
    }
 },
}
</script>


<style lang='less' scoped>
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
    padding:0;
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
</style>
