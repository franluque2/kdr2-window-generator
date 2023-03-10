import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsClassicView from "../views/SkillsClassicView";
import SkillsView from "../views/SkillsView";
import LootView from "../views/LootView";
import ClassSkillsView from "../views/ClassSkillsView";
import BlacklistView from "../views/BlacklistView";
import SkillsGigaView from "../views/SkillsGigaView";
import GamblerRollView from "../views/GamblerRollView";
import MassBlacklistView from "../views/MassBlacklistView";
import TaxTrackerView from "../views/TaxTrackerView";
import AuctionView from "../views/AuctionView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },{
    path: '/loot',
    name: 'loot',
    component: LootView
  },{
    path: '/skills-classic',
    name: 'skills-classic',
    component: SkillsClassicView
  },{
    path: '/class-skills',
    name: 'class-skills',
    component: ClassSkillsView
  },
  {
    path: '/blacklists',
    name:'blacklists',
    component:BlacklistView
  },
  {
    path: '/mass-blacklists',
    name:'mass-blacklists',
    component:MassBlacklistView
  },

  {
    path: '/skills-giga',
    name:'skills-giga',
    component:SkillsGigaView
  },
  {
    path:'/gambler-gen',
    name:'gambler-gen',
    component:GamblerRollView
  },
  {
    path:'/tax-tracker',
    name:'tax-tracker',
    component:TaxTrackerView
  },
  {
    path:'/auction',
    name:'auction',
    component:AuctionView
  }
]

const router = new VueRouter({
  routes
})

export default router
