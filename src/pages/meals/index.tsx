import React, { useState } from 'react';

import FilterCard from '../../components/common/Filters/FilterBar/FilterBar';
import MealCard from '../../components/meals/MealCard/MealCard';
import Page from '../../components/common/Page/Page';
import QuickView from '../../components/meals/MealQuickView/MealQuickView';

import { mock_data } from '../../helpers/meals_mock';
import { Meal } from '../../data/types';
import MealFilterPopup from '../../components/meals/MealFilterPopup/MealFilterPopup';

const Meals: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [isMealCardOpen, setIsMealCardOpen] = useState<Meal['id'] | null>(null);
  const handleIsOpen = (id: Meal['id'] | null) => {
    const newOpen = id === isMealCardOpen ? null : id;
    setIsMealCardOpen(newOpen);
  };

  const getMeal = () => mock_data.find((meal) => meal.id === isMealCardOpen) || null;

  return (
    <Page title="Fogások" className="meals-page">
      <FilterCard onClick={() => setIsFiltersOpen(true)} filterCounter={0} onClear={() => console.log('clear')} />
      <div>
        {mock_data.map((meal) => (
          <MealCard key={meal.id} meal={meal} onQuickView={handleIsOpen} />
        ))}
      </div>
      <QuickView isOpen={!!isMealCardOpen} onClose={handleIsOpen} meal={getMeal()} />
      <MealFilterPopup
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onClearAll={() => console.log('clear all')}
      />
    </Page>
  );
};

export default Meals;
