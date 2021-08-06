import React, { useState } from 'react';

import MealCard from '../../components/meals/MealCard/MealCard';
import Page from '../../components/common/Page/Page';
import QuickView from '../../components/meals/MealQuickView/MealQuickView';

import { mock_data } from '../../helpers/meals_mock';
import { Meal } from '../../data/types';
import MealFilters from '../../components/meals/MealFilters/MealFilters';

const Meals: React.FC = () => {
  const [isMealCardOpen, setIsMealCardOpen] = useState<Meal['id'] | null>(null);

  const handleIsOpen = (id: Meal['id'] | null) => {
    const newOpen = id === isMealCardOpen ? null : id;
    setIsMealCardOpen(newOpen);
  };

  const getMeal = () => mock_data.find((meal) => meal.id === isMealCardOpen) || null;

  return (
    <Page title="Fogások" className="meals-page">
      <MealFilters />
      <div>
        {mock_data.map((meal) => (
          <MealCard key={meal.id} meal={meal} onQuickView={handleIsOpen} />
        ))}
      </div>
      <QuickView isOpen={!!isMealCardOpen} onClose={handleIsOpen} meal={getMeal()} />
    </Page>
  );
};

export default Meals;
