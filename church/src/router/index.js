import Vue from "vue";
import VueRouter from "vue-router";
// import firebase from '@/firebase'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/user",
      name: "User",
      component: () => import("@/views/UserRegister.vue"),
    },
    {
      path: "/user-home",
      name: "User-Home",
      component: () => import("@/views/UserHome.vue"),
      children: [
        {
          path: "/user-home/parent",
          name: "parent",
          meta: { title: "parent" },
          component: () => import("@/views/UserComp/Parent.vue"),
        },
        {
          path: "/user-home/parent-edit",
          name: "parent-edit",
          meta: { title: "parent-edit" },
          component: () => import("@/views/UserComp/Parent-Edit.vue"),
        },
        {
          path: "/user-home/non-parent",
          name: "non-parent",
          meta: { title: "non-parent" },
          component: () => import("@/views/UserComp/Non-Parent.vue"),
        },
        {
          path: "/user-home/non-parent-edit",
          name: "non-parent-edit",
          meta: { title: "non-parent-edit" },
          component: () => import("@/views/UserComp/Non-Parent-Edit.vue"),
        },
        {
          path: "/user-home/family",
          name: "family",
          meta: { title: "family" },
          component: () => import("@/views/UserComp/Family.vue"),
        },
        {
          path: "/user-home/settings",
          name: "settings",
          meta: { title: "settings" },
          component: () => import("@/views/UserComp/Settings.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("@/views/Admin.vue"),
    },
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: () => import("@/views/Dashboard.vue"),
    //   // meta: { requiresAuth: true },
    //   children: [
    //     {
    //       path: "/dashboard/requests",
    //       name: "requests",
    //       meta: { title: "requests" },
    //       component: () => import("@/views/admin/Requests.vue"),
    //     },
    //   ],
    // },
  ],
});

// router.beforeEach((to, from, next) => {

//   document.title = to.meta.title
//     next()

//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = firebase.auth().currentUser

//   if (requiresAuth && !currentUser) {
//       next('/login')
//   } else if (requiresAuth && currentUser) {
//       next()
//   } else {
//       next()
//   }
// });

export default router;