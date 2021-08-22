let meals;

export default class MealsDAO {
  static async injectDB(conn) {
    // inital connection
    if (meals) {
      return;
    }
    try {
      meals = await conn.db(process.env.GOURMET_NS).collection('restaurants'); // TODO
    } catch (error) {
      console.error(`Unable to establish a collection handle in mealsDAO: ${error}`);
    }
  }

  static async getMeals({ filters = null, page = 0, mealsPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ('name' in filters) {
        query = { $text: { $search: filters['name'] } };
      } else if ('cousine' in filters) {
        query = { cousine: { $eq: filters['cousine'] } };
      } else if ('zipcode' in filters) {
        query = { 'address.zipcode': { $eq: filters['zipcode'] } };
      }
    }

    let cursor;
    try {
      cursor = await meals.find(query);
    } catch (error) {
      console.error(`Unable to issue find command, ${error}`);
      return { mealsList: [], totalNumMeals: 0 };
    }

    const displayCursor = cursor.limit(mealsPerPage).skip(mealsPerPage * page);

    try {
      const mealsList = await displayCursor.toArray();
      const totalNumMeals = await meals.countDocuments(query);

      return { mealsList, totalNumMeals };
    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents,  ${error}`);
      return { mealsList: [], totalNumMeals: 0 };
    }
  }
}
