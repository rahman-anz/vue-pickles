export default {
  async searchByName(name) {
    const res = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const data = await res.json();
    this.searchedMeals = data.meals;
  },
};
