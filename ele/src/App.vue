<template>
  <div id="app">
    <router-view/>
    <!-- <Tips/> -->
  </div>
</template>

<script>
import Tips from './components/Tips'
export default {
  name: 'App',
  components:{
    Tips
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body{
  font-size: 20px;
    background: #F5F5F5;

}
p,body,button,ul,li{
  margin: 0;
  border:none;
  outline: none;
  list-style: none;
  padding: 0;
}
</style>
