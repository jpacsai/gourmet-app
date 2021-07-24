import React from 'react';
import classnames from 'classnames';

import Popup from '../common/Popup/Popup';

import './MealFilters.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const MealFilters: React.FC<Props> = ({ isOpen, onClose, className }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} className={classnames('meal-filters', className)}>
      MealFilters
    </Popup>
  );
};

export default MealFilters;
