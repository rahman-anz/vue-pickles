import { defineStore } from "pinia";
import state from "./state.js";
import getters from "./getters.js";
import actions from "./actions.js";
const useUserStore = defineStore("user", {
  state: () => state,
  getters: getters,
  actions: actions,
});
export default useUserStore;
