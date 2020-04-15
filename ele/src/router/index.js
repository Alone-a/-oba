import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/City'
import Logn from '@/components/Logn'
import RevisePass from '@/components/RevisePass'
import Tips from '../components/Tips'
import Citydetails from '../components/Citydetails'
import Index from '../components/Index'
//主页
import Sheet from '../components/Sheet'
//效果展示
import Show from '../components/Show'
import Search from '../components/Search'
import Order from '../components/Order'
import My from '../components/My'

//我的页面的所有子路由
import Integral from '../components/MySubset/Integral'

import Emom from '../components/MySubset/Emom'
import Download from '../components/MySubset/Download'
import Money from '../components/MySubset/Money'
import Pref from '../components/MySubset/Pref'

import Details from '../components/Details'
import Shop from '../components/MySubset/Shop'


//导入路由配置
import inter from './integral'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Logn',
      component: Logn,
    },
    {
      path: '/RevisePass',
      component: RevisePass,
      children: [
        {
          path: 'Tips',
          component: Tips
        }
      ]
    },
    {
      //详情城市
      path: '/Citydetails',
      component: Citydetails
    },

    {
      path: '/Sheet',
      component: Sheet,
      //子路由
      children: [
        {
          //主页
          path: 'Index',
          name: 'Index',
          component: Index
        }, {
          path: 'Search',
          component: Search
        }, {
          path: 'Order',
          component: Order,
        }, {
          path: 'My',
          component: My,
        }
      ],
      redirect: { name: 'Index' }
    },
    {
      path: '/Show',
      component: Show
    },
    //我的页面的子路由
    {
      path: '/Integral',
      component: Integral,
    }, {
      path: '/Emom',
      component: Emom
    }, {
      path: '/Download',
      component: Download
    },
    {
      path: '/Money',
      component: Money
    }, {
      path: '/Pref',
      component: Pref
    }, {
      path: '/Details',
      component: Details,
      children:[
        {
          path:'Shop',
          name:'Shop',
          component:Shop
        }
      ],
      redirect: { name: 'Shop' }
    },

    {
      path: '/',
      redirect: '/City',
    },
    inter
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}