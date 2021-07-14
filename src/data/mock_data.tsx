import {
  MealWithoutDetails,
  Meal,
  DishPart,
  Ingredient,
  Diet,
  Tag,
  Time,
  CategoryName,
  DessertSubCat,
  MainSubCat,
  MeatCategory,
} from './types';

import {
  sutotok_leves_kacsa,
  carpaccio_burg_kel,
  mandulas_flodni,
  medvehagyma_spenot_fozelek,
  kacsamaj_jerce_sutotok,
  tojasos_nokedli,
  jerce_lecsos_burg,
  rantotthus_burg_pure,
  bbq_marha_gersli_rizotto,
} from './meals';

const meals = [
  sutotok_leves_kacsa,
  tojasos_nokedli,
  carpaccio_burg_kel,
  mandulas_flodni,
  medvehagyma_spenot_fozelek,
  kacsamaj_jerce_sutotok,
  jerce_lecsos_burg,
  rantotthus_burg_pure,
  bbq_marha_gersli_rizotto,
];

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
    tags: getTags(meal),
  };
};

const getTags = (meal: MealWithoutDetails): Tag[] => {
  const { time, category } = meal;
  const tags = [];
  if (time.includes(Time.REGGELI)) tags.push(Tag.REGGELI);
  if (time.includes(Time.BRUNCH_UZSONNA)) tags.push(Tag.KÖNNYŰ);
  if (category) {
    const { name } = category;
    if (name === CategoryName.SOUP) tags.push(Tag.LEVES);
    else if (category.name === CategoryName.DESSERT) {
      if (category.sub_category.name === DessertSubCat.DESSZERT) tags.push(Tag.DESSZERT);
      else if (category.sub_category.name === DessertSubCat.SÜTEMÉNY) tags.push(Tag.SÜTEMÉNY);
      else tags.push(Tag.TORTA);
    } else if (category.name === CategoryName.MAIN) {
      const { sub_category } = category;
      if (sub_category.name === MainSubCat.FŐZELÉK) tags.push(Tag.FŐZELÉK);
      else {
        if (sub_category.name === MainSubCat.EGYTÁL) tags.push(Tag.EGYTÁL);
        else if (sub_category.name === MainSubCat.HÚS) tags.push(Tag.HÚS);
        else tags.push(Tag.TÉSZTA);

        if (sub_category.meat === MeatCategory.HAL) tags.push(Tag.HAL);
        else if (sub_category.meat === MeatCategory.MARHA) tags.push(Tag.MARHA);
        else if (sub_category.meat === MeatCategory.SERTÉS) tags.push(Tag.SERTÉS);
        else if (sub_category.meat === MeatCategory.SZÁRNYAS) tags.push(Tag.SZÁRNYAS);
        else if (sub_category.name !== MainSubCat.HÚS) tags.push(Tag.VEGA);
      }
    }
  }
  return tags;
};

const mock_parsed_data = (meals: MealWithoutDetails[]): Meal[] => {
  return meals.map((meal) => ({
    ...meal,
    details: getMealDetails(meal),
  }));
};

export const mock_data: Meal[] = mock_parsed_data(meals);
