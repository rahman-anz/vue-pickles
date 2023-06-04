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
      `https:themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const data = await res.json();
    this.allAreas = data.meals;
  },
};
