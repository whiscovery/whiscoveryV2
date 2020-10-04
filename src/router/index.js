import Vue from "vue"
import VueRouter from "vue-router"
import home from "../views/Home.vue"

Vue.use(VueRouter)
// const Study = () =>{
//   return import(/* webpackChunkName: "study" */ "@/views/Study.vue")
// }

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/study",
    name: "study",
    component: () => import(/* webpackChunkName: "list" */ "@/views/Study.vue"),
    children: [
      {
        path: "/study/studylist",
        name: "studylist",
        component: () =>
          import(
            /* webpackChunkName: "studylist" */ "@/views/Study/StudyList.vue"
          )
      },
      {
        path: "/study/studyform",
        name: "studyform",
        component: () =>
          import(
            /* webpackChunkName: "studyform" */ "@/views/Study/StudyForm.vue"
          )
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
