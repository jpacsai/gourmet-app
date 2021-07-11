import { csirkemell } from './ingredients';
import { Speed, Difficulty, Cost, Temperature, DishPart } from './types';

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
    speed: Speed.GYORS,
    difficulty: Difficulty.KÖNNYŰ,
    cost: Cost.KÖZEPES,
    pre_cookable: true,
    freezable: true,
  },
};

export { jercemell_roston };
