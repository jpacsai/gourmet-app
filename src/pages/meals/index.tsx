import React, { useState } from 'react';

import MealCard from '../../components/MealCard/MealCard';
import FilterCard from '../../components/FilterCard/FilterCard';
import MealFilters from '../../components/MealFilters/MealFilters';
import Page from '../../components/common/Page/Page';
import QuickView from '../../components/QuickView/QuickView';

import { mock_data } from '../../helpers/meals_mock';
import { Meal } from '../../data/types';

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
      <MealFilters isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </Page>
  );
};

export default Meals;
