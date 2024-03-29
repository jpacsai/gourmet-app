import {
  MealWithoutDetails,
  Meal,
  DishPart,
  Ingredient,
  Diet,
  Tag,
  Daytime,
  CategoryName,
  DessertSubCat,
  MainSubCat,
  MeatCategory,
} from '../data/types';

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
} from '../data/meals';

const meals = [
  bbq_marha_gersli_rizotto,
  mandulas_flodni,
  tojasos_nokedli,
  carpaccio_burg_kel,
  medvehagyma_spenot_fozelek,
  sutotok_leves_kacsa,
  kacsamaj_jerce_sutotok,
  jerce_lecsos_burg,
  rantotthus_burg_pure,
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

const getLinks = (meal: MealWithoutDetails): Meal['details']['links'] => {
  const main_link = meal.link ? { main: meal.link } : undefined;

  const dish_part_links: string[] = meal.dish_parts.reduce(
    (links, part) => (part.link ? [...links, part.link] : links),
    [] as string[]
  );

  const part_links = dish_part_links.length > 0 ? { parts: dish_part_links } : undefined;

  return main_link || part_links
    ? {
        ...(main_link || {}),
        ...(part_links || {}),
      }
    : undefined;
};

const getTime = (meal: MealWithoutDetails) => {
  const { speed } = meal.prep;
  const hrs = Math.floor(speed / 60);
  const mins = speed % 60;
  const time = `${hrs ? `${hrs} hr ` : ''}${mins ? `${mins} min` : ''}`;
  return time;
};

const getMealDetails = (meal: MealWithoutDetails) => {
  const allImages = getAllImages(meal);
  return {
    ingredients: getAllIngredients(meal.dish_parts),
    diet: getAllDietDetails(meal.dish_parts),
    ...(allImages ? { images: allImages } : {}),
    tags: getTags(meal),
    links: getLinks(meal),
    minutes: getTime(meal),
  };
};

const getTags = (meal: MealWithoutDetails): Tag[] => {
  const { time, category } = meal;
  const tags = [];
  if (time.includes(Daytime.REGGELI)) tags.push(Tag.REGGELI);
  if (time.includes(Daytime.BRUNCH_UZSONNA)) tags.push(Tag.KÖNNYŰ);
  if (category) {
    const { name } = category;
    if (name === CategoryName.SOUP) tags.push(Tag.LEVES);
    else if (category.name === CategoryName.DESSERT) {
      if (category.sub_category.name === DessertSubCat.DESSZERT) tags.push(Tag.DESSZERT);
      else if (category.sub_category.name === DessertSubCat.SÜTEMÉNY) tags.push(Tag.SÜTEMÉNY);
      else tags.push(Tag.TORTA);
    } else if (category.name === CategoryName.MAIN) {
      tags.push(Tag.FŐÉTEL);
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
