export enum Temperature {
  HIDEG = 'HIDEG',
  SZOBA = 'SZOBA',
  MELEG = 'MELEG',
}

export enum Speed {
  GYORS = 'GYORS',
  ORA_1 = 'ORA_1',
  ORA_2 = 'ORA_2',
  ORA_3 = 'ORA_3',
  LASSU = 'LASSU',
}

export enum Difficulty {
  NAGYON_KÖNNYŰ,
  KÖNNYŰ,
  KÖZEPES,
  NEHÉZ,
  NAGYON_NEHÉZ,
}

export enum Cost {
  NAGYON_OLCSÓ,
  OLCSÓ,
  KÖZEPES,
  DRÁGA,
  NAGYON_DRÁGA,
}

export enum Cousisine {
  MAGYAR,
  OLASZ,
  SPANYOL,
  MEXIKOI,
  KELETI,
  FRANCIA,
  ANGOL,
  AMERIKAI,
}

export type Diet = {
  vegan: boolean;
  vegetarian: boolean;
  ibd_friendly: boolean;
};

export type Preparation = {
  speed: Speed;
  difficulty: Difficulty;
  cost: Cost;
  pre_cookable: boolean;
  freezable: boolean;
};

export type MealWithoutDetails = {
  name: string;
  image?: string;
  link?: string;
  time: Time[];
  category?: Category;
  dish_parts: DishPart[];
  prep: Preparation;
  couisine?: Cousisine[];
  likes?: Likes[];
  wine?: string[];
};

export interface Meal extends MealWithoutDetails {
  details: {
    ingredients: Ingredient[];
    diet: Diet;
    images?: {
      main?: string;
      parts?: string[];
    };
    links?: string[];
  };
}

export type Likes = {
  name: string;
  like: boolean;
};

export type DishPart = {
  name: string;
  recipe_link?: string;
  ingredients: Ingredient[];
  diet: Diet; // func
  image_link?: string;
  temp: Temperature;
  prep: Preparation;
};

export type Ingredient = {
  name: string;
  ingredient_type: IngredientType;
  diet: Diet;
};

export enum IngredientType {
  HÚS = 'HÚS',
  ZÖLDSÉG = 'ZÖLDSÉG',
  GABONA = 'GABONA',
  GYÜMÖLCS = 'GYÜMÖLCS',
  SAJT = 'SAJT',
  TEJTERMÉK = 'TEJTERMÉK',
  TÉSZTA = 'TÉSZTA',
  PÉKÁRU = 'PÉKÁRU',
  TOJÁS = 'TOJÁS',
  ZSIRADÉK = 'ZSIRADÉK',
  MAG = 'MAG',
  FŰSZER = 'FŰSZER',
  ITAL = 'ITAL',
  CONDIMENT = 'CONDIMENT',
  EGYÉB = 'EGYÉB',
}

export enum Time {
  REGGELI = 'REGGELI',
  EBÉD_VACSORA = 'EBÉD_VACSORA',
  BRUNCH_UZSONNA = 'BRUNCH_UZSONNA',
  STREET = 'STREET',
}

/* --- CATEGORIES --- */

export type Category = Soup | Main | Dessert;

export enum CategoryName {
  SOUP = 'SOUP',
  MAIN = 'MAIN',
  DESSERT = 'DESSERT',
}

export type Soup = {
  category_name: CategoryName.SOUP;
};

export type Main = {
  category_name: CategoryName.MAIN;
  sub_category: MainSubCat;
};

export type Dessert = {
  category_name: CategoryName.DESSERT;
  sub_category: DessertSubCat;
  temp: Temperature;
};

export enum MainSubCat {
  HÚS = 'HÚS',
  TÉSZTA = 'TÉSZTA',
  FŐZELÉK = 'FŐZELÉK',
  EGYTÁL = 'EGYTÁL',
}

export enum DessertSubCat {
  TORTA = 'TORTA',
  SÜTEMÉNY = 'SÜTEMÉNY',
  DESSZERT = 'DESSZERT',
}
