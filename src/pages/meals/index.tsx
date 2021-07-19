import React, { useState } from 'react';

import MealCard from '../../components/MealCard/MealCard';
import Page from '../../components/Page/Page';
import QuickView from '../../components/QuickView/QuickView';

import { mock_data } from '../../data/mock_data';
import { Meal } from '../../data/types';

const Meals: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Meal['id'] | null>(null);
  const handleIsOpen = (id: Meal['id'] | null) => {
    const newOpen = id === isOpen ? null : id;
    setIsOpen(newOpen);
  };

  const getMeal = () => mock_data.find((meal) => meal.id === isOpen) || null;

  return (
    <Page title="Fogások">
      <div>
        {mock_data.map((meal, index) => (
          <MealCard key={meal.id} meal={meal} onQuickView={handleIsOpen} />
        ))}
      </div>
      <QuickView isOpen={!!isOpen} onClose={handleIsOpen} meal={getMeal()} />
    </Page>
  );
};

export default Meals;
