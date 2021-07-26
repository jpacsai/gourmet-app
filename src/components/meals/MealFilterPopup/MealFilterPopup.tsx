import React from 'react';

import FilterPopup from '../../common/Filters/FilterPopup/FilterPopup';
import FilterSection from '../../common/Filters/FilterSection/FilterSection';

import './MealFilterPopup.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClearAll: () => void;
  className?: string;
};

const MealFilterPopup: React.FC<Props> = ({ isOpen, onClose, onClearAll }) => {
  return (
    <FilterPopup isOpen={isOpen} onClose={onClose} onClearAll={onClearAll} className="meal-filters">
      <FilterSection title="Time">Filter section</FilterSection>
    </FilterPopup>
  );
};

export default MealFilterPopup;
