import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import { createPinia } from "pinia";
import useUserStore from "./store/index.js";
import MealContainer from "./components/meals/MealContainer.vue";
import LoadSpinner from "./components/ui/LoadSpinner.vue";

const app = createApp(App);
const store = createPinia(useUserStore);
app.use(store);
app.component("meal-container", MealContainer);
app.component("load-spinner", LoadSpinner);
app.use(router);
app.mount("#app");
