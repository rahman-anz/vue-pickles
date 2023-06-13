export default {
  getSearchedMeals: (state) => {
    return state.searchedMeals;
  },
  getAllAreas: (state) => {
    return state.allAreas;
  },
  getAreaMeals: (state) => {
    return state.areaMeals;
  },
  getLetterMeals: (state) => {
    return state.letterMeals;
  },
  hasLetterMeals: (state) => {
    return state.letterMeals && state.letterMeals.length > 0;
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
