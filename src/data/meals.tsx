import { jercemell_roston } from './dishParts';
import {
  MealWithoutDetails,
  Meal,
  Time,
  CategoryName,
  MainSubCat,
  Speed,
  Difficulty,
  Cost,
  DishPart,
  Ingredient,
  Diet,
} from './types';

const jerce_lecsos_burg: MealWithoutDetails = {
  name: 'Jércemell, lecsós burgonya',
  time: [Time.EBÉD_VACSORA],
  category: {
    category_name: CategoryName.MAIN,
    sub_category: MainSubCat.HÚS,
  },
  dish_parts: [jercemell_roston],
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

export const getAllIngredients = (dish_parts: DishPart[]): Ingredient[] => {
  return dish_parts.reduce((all, { ingredients }): Ingredient[] => {
    return [...all, ...ingredients];
  }, [] as any);
};

export const getAllDietDetails = (dish_parts: DishPart[]): Diet => {
  const allIngredients = getAllIngredients(dish_parts);
  return {
    vegan: allIngredients.every((ingredient) => ingredient.diet.vegan),
    vegetarian: allIngredients.every((ingredient) => ingredient.diet.vegetarian),
    ibd_friendly: allIngredients.every((ingredient) => ingredient.diet.ibd_friendly),
  };
};

export const getAllImages = (meal: MealWithoutDetails): Meal['details']['images'] => {
  const main_image = meal.image ? { main: meal.image } : undefined;

  const dish_part_images: string[] = meal.dish_parts.reduce(
    (images, part) => (part.image_link ? [...images, part.image_link] : images),
    [] as string[]
  );

  const part_images = dish_part_images.length > 0 ? { parts: dish_part_images } : undefined;

  return main_image || part_images
    ? {
        ...(main_image || {}),
        ...(part_images || {}),
      }
    : undefined;
};

const getMealDetails = (meal: MealWithoutDetails) => {
  const allImages = getAllImages(meal);
  return {
    ingredients: getAllIngredients(meal.dish_parts),
    diet: getAllDietDetails(meal.dish_parts),
    ...(allImages ? { images: allImages } : {}),
  };
};

const mock_parsed_data = (meals: MealWithoutDetails[]): Meal[] => {
  return meals.map((meal) => ({
    ...meal,
    details: getMealDetails(meal),
  }));
};

export const mock_data: Meal[] = mock_parsed_data([jerce_lecsos_burg]);
