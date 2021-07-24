import { IngredientType, Ingredient } from './types';

const csirkemell: Ingredient = {
  id: 1,
  name: 'csirkemell',
  ingredient_type: IngredientType.HÚS,
  diet: {
    vegan: false,
    vegetarian: false,
    ibd_friendly: true,
  },
};

export { csirkemell };
