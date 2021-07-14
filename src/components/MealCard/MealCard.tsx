import { Card, Elevation } from '@blueprintjs/core';

import CategoryTags from '../CategoryTags/CategoryTags';
import './MealCard.scss';

import { Meal } from '../../data/types';

type Props = {
  meal: Meal;
};

const Page: React.FC<Props> = ({ meal }) => {
  const image = meal.details.images
    ? meal.details.images.main || (meal.details.images.parts ? meal.details.images.parts[0] : '')
    : '';
  const mock_image = 'https://freeiconshop.com/wp-content/uploads/edd/food-flat.png';
  console.log('meal :>> ', meal.details.tags);
  return (
    <Card className="meal-card" interactive={true} elevation={Elevation.TWO}>
      <div className="meal-card__image-container" style={{ backgroundImage: `url(${image || mock_image})` }} />
      <div className="meal-card__content">
        <div className="meal-card__details">
          <CategoryTags meal={meal} />
        </div>
        <h4 className="ellipsis-2 meal-card__title">{meal.name}</h4>
      </div>
    </Card>
  );
};

export default Page;
