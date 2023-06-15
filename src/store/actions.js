export default {
  async searchByName(name) {
    this.searchedMeals.isLoading = true;
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await res.json();
    this.searchedMeals.data = data.meals;
    this.searchedMeals.isLoading = false;
  },
  async searchAllAreas() {
    this.allAreas.isLoading = true;
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const data = await res.json();
    this.allAreas.data = data.meals;
    this.allAreas.isLoading = false;
  },
  async filterByArea(area) {
    this.areaMeals.isLoading = true;
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await res.json();
    this.areaMeals.data = data.meals;
    this.areaMeals.isLoading = false;
  },
  async filterByLetter(letter) {
    this.letterMeals.isLoading = true;
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await res.json();
    this.letterMeals.data = data.meals;
    this.letterMeals.isLoading = false;
  },
  saveMeal(title, image, youtube, id) {
    const alreadySaved = this.savedMeals.find((meal) => meal.idMeal === id);
    if (alreadySaved) return;
    const meals = {
      idMeal: id,
      strMeal: title,
      strMealThumb: image,
      strYoutube: youtube,
    };
    this.savedMeals.unshift(meals);
    this.setLocalStorage();
  },
  removeSaved(id) {
    const selectedMealIndex = this.savedMeals.findIndex(
      (meal) => meal.idMeal == id
    );
    this.savedMeals.splice(selectedMealIndex, 1);
    this.setLocalStorage();
  },
  addCounter() {
    this.savedCounter++;
  },
  minusCounter() {
    this.savedCounter--;
  },
  setZeroCounter() {
    this.savedCounter = 0;
  },
  getLocalStorage() {
    if (localStorage.meals) {
      const localMeals = localStorage.getItem("meals");
      this.savedMeals = JSON.parse(localMeals);
    } else return;
  },
  setLocalStorage() {
    localStorage.setItem("meals", JSON.stringify(this.savedMeals));
  },
};
