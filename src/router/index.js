import { createRouter, createWebHistory } from "vue-router";

import TestView from "../views/Presentation/TestView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "test",
      component: TestView,
    },

  ],
});

// router.beforeEach((to, from, next) => {
//   // to : 이동할 url
//   // from : 현재 url
//   // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
//   console.log('every single routing is pending')
//   console.log("from : ", from)
//   console.log("to : ", to)

//   if (from.fullPath === '/' && to.name !== 'author')
//     next({ name: 'author' })
//   else
//     next()
    
// })

export default router;
