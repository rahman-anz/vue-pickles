import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ByName from "./pages/ByName.vue";
import ByArea from "./pages/ByArea.vue";
import RecipeDetails from "./pages/RecipeDetails.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/by-name",
      name: "by-name",
      component: ByName,
    },
    {
      path: "/by-area/:area?",
      name: "by-area",
      component: ByArea,
    },
    {
      path: "/details/:id?",
      name: "details",
      component: RecipeDetails,
    },
  ],
});
export default router;
