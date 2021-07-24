import React, { useState } from 'react';

import { Card, Elevation, Icon } from '@blueprintjs/core';

import MealCard from '../../components/MealCard/MealCard';
import MealFilters from '../../components/MealFilters/MealFilters';
import Page from '../../components/common/Page/Page';
import QuickView from '../../components/QuickView/QuickView';

import './mealsPage.scss';

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
      <Card
        className="meals-page__filters-card"
        interactive={true}
        elevation={Elevation.THREE}
        onClick={() => setIsFiltersOpen(true)}
      >
        <div className="meals-page__filters-container">
          <Icon icon="filter" iconSize={16} />
          <span className="meals-page__filters-text">
            Filters <span className="meals-page__filters-counter">(0)</span>
          </span>
        </div>
      </Card>
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
