import React, { useState } from 'react';

import FilterPopup from '../../common/Filters/FilterPopup/FilterPopup';
import FilterSection from '../../common/Filters/FilterSection/FilterSection';
import Select, { SelectItem } from '../../common/Inputs/Select/Select';

import './MealFilterPopup.scss';

import { timeOptions } from '../../../data/filters';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClearAll: () => void;
  className?: string;
};

const MealFilterPopup: React.FC<Props> = ({ isOpen, onClose, onClearAll }) => {
  const [time, setTime] = useState<SelectItem | null>(null);
  return (
    <FilterPopup isOpen={isOpen} onClose={onClose} onClearAll={onClearAll} className="meal-filters">
      <FilterSection title="Napszak">
        <Select
          items={[{ text: 'Válassz napszakot...', value: null, id: '' }, ...timeOptions]}
          selectedItem={time}
          onChange={setTime}
          blankText="Válassz napszakot..."
        />
      </FilterSection>
    </FilterPopup>
  );
};

export default MealFilterPopup;
