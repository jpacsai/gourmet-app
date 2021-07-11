import { Card, Elevation } from '@blueprintjs/core';

import CategoryTag from '../CategoryTag/CategoryTag';
import './MealCard.scss';

import { Meal } from '../../data/types';

type Props = {
  meal: Meal;
};

const Page: React.FC<Props> = ({ meal }) => {
  return (
    <Card className="meal-card" interactive={true} elevation={Elevation.TWO}>
      <div className="meal-card__image-container"></div>
      <div className="meal-card__content">
        <div className="meal-card__details">
          <CategoryTag meal={meal} />
        </div>
        <h4 className="ellipsis-2 meal-card__title">{meal.name}</h4>
      </div>
    </Card>
  );
};

export default Page;
