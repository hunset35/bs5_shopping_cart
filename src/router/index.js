import Router from "vue-router";

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home.vue")
    },
    {
      path: "/beginner",
      name: "beginner",
      component: () => import("@/views/layouts/beginnerTeaching/beginner.vue")
    }
  ]
});
