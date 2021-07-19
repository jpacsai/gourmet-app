import {
  MealWithoutDetails,
  Time,
  CategoryName,
  MainSubCat,
  DessertSubCat,
  Speed,
  Difficulty,
  Cost,
  Temperature,
  MeatCategory,
  MeatOnlyCategory,
} from './types';

import { jercemell_roston, mock_dishPart } from './dishParts';

const jerce_lecsos_burg: MealWithoutDetails = {
  name: 'Jércemell, lecsós burgonya',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category: {
      name: MainSubCat.HÚS,
      meat: MeatOnlyCategory.SZÁRNYAS,
    },
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
    sub_category: {
      name: MainSubCat.HÚS,
      meat: MeatOnlyCategory.SZÁRNYAS,
    },
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1603505859862862/2407602172786556',
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694392/gourmet-app/kacsamaj_jerce_sutotok.jpg',
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
    sub_category: {
      name: MainSubCat.HÚS,
      meat: MeatOnlyCategory.MARHA,
    },
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/szentdonatborkuria/photos/basw.AbqknLYCTfXOKVmVtDTyne4oQ3EBkkRXvEE9cQMevLgKCU55UEhTD0rs6jM89ElHzFjuxIKf8zlTvPNf6Aqx49B2wE7xWFTOffhuIzAab26kTKXa8o2K_kAAjEG-9zoqNNI7A8GXboxbD6_4cJkLv7ghCh-4Z0js61_9TbLPzSbTyxi924d1PtaLOANVmb1nnEzXR7YpEv6QkU5p5CFlS6cp/2416636955216411/?opaqueCursor=AbrX380XnM6_pTBzzjzDedqxwJEfGsJjBhp76N1wico4_C-kGJgPIXbD6sutpT0ixp_WuQESM-o6jcjkT7csdbbZOGQUJN7g2aX-BJeaLMuwBx2U75dhthjnfa8zGvRJY4-92mhakbVymtE8Ryyy71R86VQiB7YmjJDRa9wpRQ-wl8Qp--Jt2c3aYFHTNEBM_pIr_pDrf0dwSBHwnkVBRtKYdxE1CBr1cmZuzEoytKH8HlhLEeFGnmgNJSTXUgGzoICPgyrhIpe06F-8JnoqRefnMTRTY7HINM5drkTz8P7AXnQBbd6PKGeELDiojG-fKvihNpaUXgizso5xZYyWZPbepNkNKa861vRPAU2a8f0RLEWciyJPRZ5QBIyEhwG2X2AGsuFN1kvb0K6BVJaf9rdXF7qzhJY43WfnubBTTW3QYjPd-FZRZoS94z46umqv8WHdKRjI4tTHEXey5tmUl2qIbFrwTRT9P__mgxeCwGNM_QhG7SGEc_STwdMhpuJ_81X7hqFpCbrGS7Og9yi_D1FlIBqwTkbrEVpHCPce8dXnheKIiU-CWAdhgbyByLCCGdXfMaZtc7fMxFSMiBaPDl8S',
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694677/gourmet-app/bbq_marha_gersli_rizotto.jpg',
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
    sub_category: {
      name: MainSubCat.HÚS,
      meat: MeatOnlyCategory.SERTÉS,
    },
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
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694154/gourmet-app/sutotok_leves_kacsa.jpg',
  dish_parts: [jercemell_roston],
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const medvehagyma_spenot_fozelek: MealWithoutDetails = {
  name: 'Medvehagymás parajfőzelék, borjú ropogós, lágytojás, parázsburgonya',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category: {
      name: MainSubCat.FŐZELÉK,
    },
  },
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1603505859862862/2520952494784856',
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694154/gourmet-app/medvehagyma_spenot_fozelek.jpg',
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
    sub_category: {
      name: MainSubCat.HÚS,
      meat: MeatOnlyCategory.MARHA,
    },
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/LaposaBirtok/photos/a.273670136050395/4038830336201004/',
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694154/gourmet-app/carpaccio_burg_kel.jpg',
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
    sub_category: {
      name: DessertSubCat.SÜTEMÉNY,
      temp: Temperature.SZOBA,
    },
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/szentdonatborkuria/photos/a.1603505859862862/2445726032307503/',
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694154/gourmet-app/mandulas_flodni.jpg',
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

const tojasos_nokedli: MealWithoutDetails = {
  name: 'Tojásos nokedli, saláta',
  time: [Time.EBÉD_VACSORA],
  category: {
    name: CategoryName.MAIN,
    sub_category: {
      name: MainSubCat.TÉSZTA,
      meat: MeatCategory.VEGA,
    },
  },
  dish_parts: [jercemell_roston],
  link: 'https://www.facebook.com/kaligourmetbistro/photos/pcb.3037545039865566/3037540719865998/',
  image: 'https://res.cloudinary.com/jutzee/image/upload/v1626694154/gourmet-app/tojasos_nokedli.jpg',
  prep: {
    speed: Speed.ORA_1,
    difficulty: Difficulty.KÖZEPES,
    cost: Cost.KÖZEPES,
    pre_cookable: false,
    freezable: false,
  },
};

export {
  sutotok_leves_kacsa,
  carpaccio_burg_kel,
  medvehagyma_spenot_fozelek,
  mandulas_flodni,
  kacsamaj_jerce_sutotok,
  jerce_lecsos_burg,
  rantotthus_burg_pure,
  bbq_marha_gersli_rizotto,
  tojasos_nokedli,
};
