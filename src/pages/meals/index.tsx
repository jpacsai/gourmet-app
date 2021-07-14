import React from 'react';
import { useComponentId } from '../../hooks/useComponentId';

import MealCard from '../../components/MealCard/MealCard';
import Page from '../../components/Page/Page';

import { mock_data } from '../../data/mock_data';

const Meals: React.FC = () => {
  const componentId = useComponentId();
  return (
    <Page title="Fogások">
      <div>
        {mock_data.map((meal, index) => (
          <MealCard key={`${componentId}-${index}`} meal={meal} />
        ))}
      </div>
    </Page>
  );
};

export default Meals;
