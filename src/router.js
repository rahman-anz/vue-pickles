import { createRouter, createWebHistory } from "vue-router";
import ByLetter from "./pages/ByLetter.vue";
import ByName from "./pages/ByName.vue";
import AllAreas from "./pages/AllAreas.vue";
import ByArea from "./pages/ByArea.vue";
import RecipeDetails from "./pages/RecipeDetails.vue";
import UserSaved from "./pages/UserSaved.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/saved",
    },
    {
      path: "/by-name",
      name: "by-name",
      component: ByName,
    },
    {
      path: "/by-letter/:letter?",
      name: "by-letter",
      component: ByLetter,
    },
    {
      path: "/areas",
      name: "areas",
      component: AllAreas,
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
    {
      path: "/saved",
      name: "saved",
      component: UserSaved,
    },
  ],
});
export default router;
