import React, { useState } from 'react';

import FilterBar from '../../components/common/Filters/FilterBar/FilterBar';
import MealCard from '../../components/meals/MealCard/MealCard';
import MealFilterPopup from '../../components/meals/MealFilterPopup/MealFilterPopup';
import Page from '../../components/common/Page/Page';
import QuickView from '../../components/meals/MealQuickView/MealQuickView';

import { mock_data } from '../../helpers/meals_mock';
import { Meal } from '../../data/types';

const Meals: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [isMealCardOpen, setIsMealCardOpen] = useState<Meal['id'] | null>(null);
  const [filterCount, setFilterCount] = useState<number>(0);

  const handleIsOpen = (id: Meal['id'] | null) => {
    const newOpen = id === isMealCardOpen ? null : id;
    setIsMealCardOpen(newOpen);
  };

  const getMeal = () => mock_data.find((meal) => meal.id === isMealCardOpen) || null;

  return (
    <Page title="Fogások" className="meals-page">
      <FilterBar
        onClick={() => setIsFiltersOpen(true)}
        filterCounter={filterCount}
        onClear={() => console.log('clear')}
      />
      <div>
        {mock_data.map((meal) => (
          <MealCard key={meal.id} meal={meal} onQuickView={handleIsOpen} />
        ))}
      </div>
      <QuickView isOpen={!!isMealCardOpen} onClose={handleIsOpen} meal={getMeal()} />
      <MealFilterPopup
        isOpen={isFiltersOpen}
        onChange={setFilterCount}
        onClose={() => setIsFiltersOpen(false)}
        onClearAll={() => {
          // TODO
          console.log('clear all');
          setFilterCount(0);
        }}
      />
    </Page>
  );
};

export default Meals;
