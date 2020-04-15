import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'



//调用
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        lognFlag:false,
        arr:[],
        userName:'',
        flag:1,
        room:''
    },
    mutations:{
        changeLognFlag(state,type){
            state.lognFlag=type==1?true:false;
        },
        arrPush(state,type){
            state.arr.push(type)
        },
        changeFlag(state,type){
            state.flag=type;
        },


        changeRoom(state,type){
            state.room=type;
        }
    }
})