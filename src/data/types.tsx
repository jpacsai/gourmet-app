export enum Temperature {
  MELEG = 'Meleg',
  SZOBA = 'Szoba hőmérséklet',
  HIDEG = 'Hideg',
}

export enum Difficulty {
  NAGYON_KÖNNYŰ = 'Nagyon könnyű',
  KÖNNYŰ = 'Könnyű',
  KÖZEPES = 'Közepes',
  NEHÉZ = 'Nehéz',
  NAGYON_NEHÉZ = 'Nagyon nehéz',
}

export enum Cost {
  NAGYON_OLCSÓ = 'Nagyon olcsó',
  OLCSÓ = 'Olcsó',
  KÖZEPES = 'Közepes',
  DRÁGA = 'Drága',
  NAGYON_DRÁGA = 'Nagyon drága',
}

export enum Cuisine {
  MAGYAR = 'Magyar',
  OLASZ = 'Olasz',
  SPANYOL = 'Spanyol',
  MEXIKOI = 'Mexikói',
  KELETI = 'Keleti',
  FRANCIA = 'Francia',
  ANGOL = 'Angol',
  AMERIKAI = 'Amerikai',
  ZSIDÓ = 'Zsidó',
}

export type Diet = {
  vegan: boolean;
  vegetarian: boolean;
  ibd_friendly: boolean;
};

export type Preparation = {
  speed: number;
  difficulty: Difficulty;
  cost: Cost;
  pre_cookable: boolean;
  freezable: boolean;
};

export type MealWithoutDetails = {
  id: number;
  name: string;
  temperature: Temperature;
  image?: string;
  link?: string;
  time: Daytime[];
  category?: Category;
  dish_parts: DishPart[];
  prep: Preparation;
  cuisine?: Cuisine;
  likes?: Likes[];
  wine?: string[];
};

export interface Meal extends MealWithoutDetails {
  details: {
    ingredients: Ingredient[];
    diet: Diet;
    minutes: string;
    images?: {
      main?: string;
      parts?: string[];
    };
    links?: {
      main?: string;
      parts?: string[];
    };
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
  link?: string;
  ingredients: Ingredient[];
  diet: Diet;
  image_link?: string;
  temp: Temperature;
  prep: Preparation;
};

export type Ingredient = {
  id: number;
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

export enum Daytime {
  REGGELI = 'Reggeli',
  BRUNCH_UZSONNA = 'Tízórai / Uzsonna',
  EBÉD_VACSORA = 'Ebéd / Vacsora',
  STREET = 'Street',
  SNACK = 'Snack',
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
  SOUP = 'Előétel',
  MAIN = 'Főétel',
  DESSERT = 'Desszert',
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
  HÚS = 'Hús',
  TÉSZTA = 'Tészta',
  FŐZELÉK = 'Főzelék',
  EGYTÁL = 'Egytál',
}

export enum DessertSubCat {
  DESSZERT = 'Desszert',
  SÜTEMÉNY = 'Sütemény',
  TORTA = 'Torta',
}

export enum MeatOnlyCategory {
  SZÁRNYAS = 'Szárnyas',
  SERTÉS = 'Sertés',
  MARHA = 'Marha',
  HAL = 'Hal',
}

export enum MeatCategory {
  SZÁRNYAS = 'Szárnyas',
  SERTÉS = 'Sertés',
  MARHA = 'Marha',
  HAL = 'Hal',
  VEGA = 'Vegetáriánus',
}
