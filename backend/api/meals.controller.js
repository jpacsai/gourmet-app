import MealsDAO from '../dao/mealsDAO.js';

export default class MealsController {
  static async apiGetMeals(req, res, next) {
    const mealsPerPage = req.query.mealsPerPage ? parseInt(req.query.mealsPerPage, 10) : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine;
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { mealsList, totalNumMeals } = await MealsDAO.getMeals({
      filters,
      page,
      mealsPerPage,
    });

    let response = {
      meals: mealsList,
      page,
      filters,
      entries_per_page: mealsPerPage,
      total_results: totalNumMeals,
    };

    res.json(response);
  }
}
