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
    sub_category: {
      name: MainSubCat.HÚS,
      meat: MeatOnlyCategory.MARHA,
    },
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
  image:
    'https://scontent.fqpj1-1.fna.fbcdn.net/v/t1.6435-9/85112008_2520952498118189_3258763649375797248_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=9267fe&_nc_ohc=4RbyPIf57vMAX_AkpTm&_nc_ht=scontent.fqpj1-1.fna&oh=31b3e63c8d3d5ced096171b387a74d95&oe=60F408D1',
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
    sub_category: {
      name: DessertSubCat.SÜTEMÉNY,
      temp: Temperature.SZOBA,
    },
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
  image:
    'https://scontent.fqpj1-1.fna.fbcdn.net/v/t1.6435-9/211006731_3037540726532664_6919555948596754026_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=fGCEtvDHk_sAX9BdcIs&tn=tFS7D9R8WDmSq-Xu&_nc_ht=scontent.fqpj1-1.fna&oh=9f8121bec38065cc21bd6d0e564ab0e1&oe=60F2681C',
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
