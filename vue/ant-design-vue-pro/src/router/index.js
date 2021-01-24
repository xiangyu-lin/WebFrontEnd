import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () => 
          import(/* webpackChunkName: "user" */ "../views/Login.vue" )
      },
      {
        path: "/user/register",
        component: () => 
          import(/* webpackChunkName: "user" */ "../views/Register.vue" )
      }
    ]
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {icon: 'form', title: "Dashboard" },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
  },
  {
    path: "/testtools",
    name: "TestTools",
    meta: {icon: "dashboard", title: "测试工具" },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/testtools/gatewaymaker",
        name: "GatewayMaker",
        meta: {title: "GatewayMaker" },
        hideChildrenInMenu: true,
        component: () => 
          import(/* webpackChunkName: "user" */ "../views/TestTools/GatewayMaker.vue")
      },
      {
        path: "/testtools/rmqpush",
        name: "rmqpush",
        meta: {title: "rmqpush" },
        component: () => 
          import(/* webpackChunkName: "user" */ "../views/TestTools/RocketMqPush.vue")
      },
    ]
  },
  {
    path: "/logs",
    name: "Logs",
    meta: {icon: 'dashboard', title: "日志分析" },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/logs/realtimelogs",
        name: "realtimelogs",
        meta: {title: "realtimelogs" },
        component: () => 
          import(/* webpackChunkName: "logs" */ "../views/Logs/RealtimeLogs.vue" )
      },
    ]
  },
  {
    path: "/configs",
    name: "Configs",
    meta: {icon: 'form', title: "配置中心" },
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout.vue"),
  },
  {
    path: "/",
    // name: "Home",
    redirect: "/dashboard",
    // meta: {icon: 'form', title: "主页" },
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   meta: {icon: "dashboard", title: "仪表盘" },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "*",
    name: "404",
    hideInMenu: true,
    meta: {icon: "dashboard", title: "仪表盘" },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
