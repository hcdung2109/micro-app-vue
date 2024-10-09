import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import HelloWorld from "./components/HelloWorld.vue";

// Define your routes
const routes = [
  {
    path: "/#/vue3",
    name: "Home",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/#/vue3/hello",
    name: "Hello",
    component: HelloWorld,
    meta: { requiresAuth: true }, // Protect this route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add a route guard to check login state
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("accessToken"); // Check if token exists
  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    next("/#/login"); // Redirect to login if not logged in
  } else {
    next(); // Proceed to the route
  }
});

export default router;
