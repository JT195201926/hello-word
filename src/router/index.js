import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path:'/my',
    name:'My',
    component:()=>
        import("../views/My.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
