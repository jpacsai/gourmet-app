import { csirkemell } from './ingredients';
import { Difficulty, Cost, Temperature, DishPart } from './types';

const jercemell_roston: DishPart = {
  name: 'jercemell',
  ingredients: [csirkemell],
  diet: {
    vegan: false,
    vegetarian: false,
    ibd_friendly: true,
  },
  temp: Temperature.MELEG,
  image_link: 'https://www.mindmegette.hu/images/235/O/csirkemell-roston-2.jpg',
  prep: {
    speed: 20,
    difficulty: Difficulty.KÖNNYŰ,
    cost: Cost.KÖZEPES,
    pre_cookable: true,
    freezable: true,
  },
};

const mock_dishPart: DishPart = {
  name: 'mock',
  ingredients: [csirkemell],
  diet: {
    vegan: false,
    vegetarian: false,
    ibd_friendly: true,
  },
  temp: Temperature.MELEG,
  prep: {
    speed: 10,
    difficulty: Difficulty.KÖNNYŰ,
    cost: Cost.KÖZEPES,
    pre_cookable: true,
    freezable: true,
  },
};

export { jercemell_roston, mock_dishPart };
