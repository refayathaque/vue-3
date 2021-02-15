import { createRouter, createWebHistory } from "vue-router";

import Teams from "./components/routing/Teams.vue";
import TeamMembers from "./components/routing/TeamMembers.vue";
import Users from "./components/routing/Users.vue";
import NamedRouterAlpha from "./components/routing/NamedRouterAlpha.vue";
import NamedRouterBeta from "./components/routing/NamedRouterBeta.vue";

const router = createRouter({
  scrollBehavior(_, _2, savedPosition) {
    // having these underscores are important! they state that while I won't be using the first 2 args, I WILL be using the 3rd arg, if the underscores are omitted the funct will provide `to` instead of `savedPosition` as arg
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
    // where the page should return to upon a route change
  },
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      path: "/teams",
      component: Teams,
      children: [
        {
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ], // i.e., teams/:teamId
    },
    {
      path: "/users",
      meta: { extraData: 'Access me with $route in components', extraDataTwo: 'Can also access me in the nav guards', needsAuth: true },
      component: Users,
      children: [
        {
          path: "namedRouters",
          components: { default: NamedRouterAlpha, bottom: NamedRouterBeta },
        },
      ],
      beforeEnter(_, _2, next) {
        next();
      },
      // same as `router.beforeEach` but for this single route
      // also available in the component itself e.g., `beforeRouteEnter`, `beforeRouteLeave`, `beforeRouteUpdate`, etc.
    },
    { path: "/:notFound(.*)", redirect: "/teams" },
    // { path: "/:notFound(.*)", component: NotFound },
    // catch all route
  ],
});

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach", to.meta, from);
  next();
  // pass in boolean to allow/cancel nav
  // pass in route as string to force nav somewhere
  // ^ can also use object syntax for named routes and to pass in params and queries
  // be careful and avoid infinite loops by checking if `to` is already destined for the route you want to force - video 180
  // use this for auth, prevent user from accessing specific/subsequent pages if user is not auth'ed
});

// router.afterEach((to, from) => {
//   only runs AFTER a nav has been confirmed, hence no `next`
//   could be useful for sending analytics data, just use for user activity logging
// })

export default router;