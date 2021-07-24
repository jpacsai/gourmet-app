import React, { useMemo } from 'react';

import { Card, Elevation } from '@blueprintjs/core';

import CategoryTags from '../CategoryTags/CategoryTags';
import CornerIcon from '../common/CornerIcon/CornerIcon';

import './MealCard.scss';

import { displayImage } from '../../helpers/image';
import { Meal } from '../../data/types';

type Props = {
  meal: Meal;
  onQuickView: (id: Meal['id']) => void;
};

const MealCard: React.FC<Props> = ({ meal, onQuickView }) => {
  const image = useMemo(() => displayImage(meal.details.images), [meal.details.images]);
  return (
    <Card className="meal-card" interactive={true} elevation={Elevation.TWO}>
      <div className="meal-card__image-container" style={{ backgroundImage: `url(${image})` }}>
        <CornerIcon icon="eye-open" onClick={() => onQuickView(meal.id)} />
      </div>
      <div className="meal-card__content">
        <div className="meal-card__details">
          <CategoryTags meal={meal} />
        </div>
        <h4 className="ellipsis-2 meal-card__title">{meal.name}</h4>
      </div>
    </Card>
  );
};

export default MealCard;
