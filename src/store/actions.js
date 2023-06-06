export default {
  async searchByName(name) {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await res.json();
    this.searchedMeals = data.meals;
  },
  async searchAllAreas() {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const data = await res.json();
    this.allAreas = data.meals;
  },
  async filterByArea(area) {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await res.json();
    this.areaMeals = data.meals;
  },
  async filterByLetter(letter) {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await res.json();
    console.log(data);
    this.letterMeals = data.meals;
  },
  saveMeal(title, image, youtube, id) {
    const recipe = {
      idMeal: id,
      strMeal: title,
      strMealThumb: image,
      strYoutube: youtube,
    };
    this.savedMeals.unshift(recipe);
  },
};
