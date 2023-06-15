export default {
  getSearchedMeals: (state) => {
    return state.searchedMeals.data;
  },
  hasSearchedMeals: (state) => {
    return state.searchedMeals.data && state.searchedMeals.data.length > 0;
  },
  getAllAreas: (state) => {
    return state.allAreas.data;
  },
  getAreaMeals: (state) => {
    return state.areaMeals.data;
  },
  getLetterMeals: (state) => {
    return state.letterMeals.data;
  },
  hasLetterMeals: (state) => {
    return state.letterMeals.data && state.letterMeals.data.length > 0;
  },
  getSavedMeals: (state) => {
    return state.savedMeals;
  },
  hasSavedMeals: (state) => {
    return state.savedMeals && state.savedMeals.length > 0;
  },
  getSavedCounter: (state) => {
    return state.savedCounter;
  },
};
