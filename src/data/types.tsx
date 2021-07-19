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
    tags: Tag[];
  };
}

export enum Tag {
  REGGELI = 'REGGELI',
  STREET = 'STREET',
  KÖNNYŰ = 'KÖNNYŰ',
  LEVES = 'LEVES',
  FŐÉTEL = 'FŐÉTEL',
  FŐZELÉK = 'FŐZELÉK',
  EGYTÁL = 'EGYTÁL',
  HÚS = 'HÚS',
  TÉSZTA = 'TÉSZTA',
  MARHA = 'MARHA',
  SZÁRNYAS = 'SZÁRNYAS',
  SERTÉS = 'SERTÉS',
  HAL = 'HAL',
  VEGA = 'VEGA',
  DESSZERT = 'DESSZERT',
  TORTA = 'TORTA',
  SÜTEMÉNY = 'SÜTEMÉNY',
}

export type TagColor = {
  name: string;
  color: string;
  text: string;
  usage: Tag;
};

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

export type Soup = {
  name: CategoryName.SOUP;
};

export type CategoryType = {
  name: CategoryName;
  sub_category?: Main | Dessert;
};

export enum CategoryName {
  SOUP = 'SOUP',
  MAIN = 'MAIN',
  DESSERT = 'DESSERT',
}

export type Dessert = {
  name: CategoryName.DESSERT;
  sub_category: {
    name: DessertSubCat;
    temp: Temperature;
  };
};

export type Main = {
  name: CategoryName.MAIN;
  sub_category: Fozelek | Meat | Pasta | Onepot;
};

// export type Main = Fozelek | Meat | Pasta | Onepot;

export type Fozelek = {
  name: MainSubCat.FŐZELÉK;
};

export type Meat = {
  name: MainSubCat.HÚS;
  meat: MeatOnlyCategory;
};

export type Pasta = {
  name: MainSubCat.TÉSZTA;
  meat: MeatCategory;
};

export type Onepot = {
  name: MainSubCat.EGYTÁL;
  meat: MeatCategory;
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

export enum MeatOnlyCategory {
  MARHA = 'MARHA',
  SERTÉS = 'SERTÉS',
  SZÁRNYAS = 'SZÁRNYAS',
  HAL = 'HAL',
}

export enum MeatCategory {
  MARHA = 'MARHA',
  SERTÉS = 'SERTÉS',
  SZÁRNYAS = 'SZÁRNYAS',
  HAL = 'HAL',
  VEGA = 'VEGA',
}
