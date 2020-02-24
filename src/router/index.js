import Vue from 'vue'
import Router from 'vue-router'
import Homeinfo from '@/components/Homeinfo'
import HomePage from '@/components/home_page/HomePage'
import Choiceness from '@/components/choiceness/Choiceness'


Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Homeinfo',
    component: Homeinfo,
  },
  {
    path:'/homepage0',
    name:'homepage',
    component:HomePage
  },
  {
    path:'/homepage1',
    name:'choiceness',
    component:Choiceness
  }
  
]

export default new Router({
  routes: routes
})
