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

export enum Cousine {
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
  couisine?: Cousine[];
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
  diet: Diet;
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
  name: CategoryName.SOUP;
};

export type Main = Fozelek | Meat | Pasta | Onepot;

export type Dessert = {
  name: CategoryName.DESSERT;
  sub_category_name: DessertSubCat;
  temp: Temperature;
};

export interface Fozelek extends MainCategory {
  sub_category_name: MainSubCat.FŐZELÉK;
}

export type MainCategory = {
  name: CategoryName.MAIN;
};

export interface Meat extends MainCategory {
  sub_category_name: MainSubCat.HÚS;
  meat_category: MeatCategory;
}

export interface Pasta extends MainCategory {
  sub_category_name: MainSubCat.TÉSZTA;
  meat_category: MeatCategory;
}

export interface Onepot extends MainCategory {
  sub_category_name: MainSubCat.EGYTÁL;
  meat_category: MeatCategory;
}

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

export enum MeatCategory {
  MARHA = 'MARHA',
  SERTÉS = 'SERTÉS',
  SZÁRNYAS = 'SZÁRNYAS',
  HAL = 'HAL',
  VEGA = 'VEGA',
}
