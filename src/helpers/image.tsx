import { Meal } from '../data/types';

export const placeholderMealImage = 'https://freeiconshop.com/wp-content/uploads/edd/food-flat.png';

export const displayImage = (images: Meal['details']['images']) => {
  if (!images) return placeholderMealImage;
  return images.main || (images.parts ? images.parts[0] : placeholderMealImage);
};
