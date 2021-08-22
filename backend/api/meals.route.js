import express from 'express';
import MealsCtrl from './meals.controller.js ';

const router = express.Router();

router.route('/').get(MealsCtrl.apiGetMeals);

export default router;
