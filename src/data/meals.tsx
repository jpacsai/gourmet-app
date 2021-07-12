import { jercemell_roston, mock_dishPart } from './dishParts';
import {
  MealWithoutDetails,
  Meal,
  Time,
  CategoryName,
  MainSubCat,
  DessertSubCat,
  Speed,
  Difficulty,
  Cost,
  DishPart,
  Ingredient,
  Diet,
  Temperature,
  MeatCategory,
} from './types';

const jerce_lecsos_burg: MealWithoutDetails = {
  name: 'Jércemell, lecsós burgonya',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category_name: MainSubCat.HÚS,
    meat_category: MeatCategory.SZÁRNYAS,
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

const kacsamaj_jerce_sutotok: MealWithoutDetails = {
  name: 'Kacsamájjal töltött jércemell, sütőtökös rizottó, spenót',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category_name: MainSubCat.HÚS,
    meat_category: MeatCategory.SZÁRNYAS,
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1603505859862862/2407602172786556',
  image:
    'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/77056692_2407602179453222_252947756685983744_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=9267fe&_nc_ohc=FEORFgUpIFUAX8fdpMf&_nc_ht=scontent-vie1-1.xx&oh=8c89af2bcefae9712103a996f6609a2e&oe=60EF7599',
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const bbq_marha_gersli_rizotto: MealWithoutDetails = {
  name: 'BBQ marhaoldalas, zöldséges gersli rizottó',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category_name: MainSubCat.HÚS,
    meat_category: MeatCategory.MARHA,
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1603505859862862/2407602172786556',
  image:
    'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/75642463_2416636965216410_2037822756292132864_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=9267fe&_nc_ohc=asWsQorzBV4AX90XrnS&_nc_ht=scontent-vie1-1.xx&oh=dc70f42318261165d04040a070cd7a3c&oe=60EF4F78',
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const rantotthus_burg_pure: MealWithoutDetails = {
  name: 'Rántott hús, petrezselymes burgonyapüré, tejfölös uborkasaláta',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category_name: MainSubCat.HÚS,
    meat_category: MeatCategory.SERTÉS,
  },
  dish_parts: [mock_dishPart],
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const sutotok_leves_kacsa: MealWithoutDetails = {
  name: 'Sütőtök krémleves, füstölt libamell, zsendice gombóc',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.SOUP,
  },
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1582942508585864/2164053320474777/',
  image:
    'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/46024618_2164053323808110_1364536570505330688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=kTlyqevUt2wAX8RzM0s&tn=tFS7D9R8WDmSq-Xu&_nc_ht=scontent-vie1-1.xx&oh=e652652315d6bb7bc47a8759a2437506&oe=60F13D9B',
  dish_parts: [jercemell_roston],
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const carpaccio_burg_kel: MealWithoutDetails = {
  name: 'Carpaccio, parázsburgonya, kel, sült paprika, füstölt halas majonéz, jus, olíva, lime',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category_name: MainSubCat.HÚS,
    meat_category: MeatCategory.MARHA,
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/LaposaBirtok/photos/a.273670136050395/4038830336201004/',
  image:
    'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/s1080x2048/199727680_4038830342867670_7133641887175335954_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=jWGAqPVeS-0AX-snVOs&_nc_ht=scontent-vie1-1.xx&oh=379eadd41cd0016f5af5b71f5ee7ecfa&oe=60F015A0',
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const mandulas_flodni: MealWithoutDetails = {
  name: 'Mandulás flódni, forralt bor sorbet, édes morzsa',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.DESSERT,
    sub_category_name: DessertSubCat.SÜTEMÉNY,
    temp: Temperature.SZOBA,
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1603505859862862/2445726032307503/',
  image:
    'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/79762396_2445726035640836_4080435530695704576_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=9267fe&_nc_ohc=5CDnd5Oc0ckAX-XfIyJ&_nc_ht=scontent-vie1-1.xx&oh=80f6cee367db18a8972bdeba6da6c4ef&oe=60F0F116',
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

export const mock_data: Meal[] = mock_parsed_data([
  sutotok_leves_kacsa,
  carpaccio_burg_kel,
  mandulas_flodni,
  kacsamaj_jerce_sutotok,
  jerce_lecsos_burg,
  rantotthus_burg_pure,
  bbq_marha_gersli_rizotto,
]);
