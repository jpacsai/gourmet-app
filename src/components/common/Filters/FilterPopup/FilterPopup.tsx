import React from 'react';
import classnames from 'classnames';

import Popup from '../../Popup/Popup';

import './FilterPopup.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const FilterPopup: React.FC<Props> = ({ isOpen, onClose, className, children }) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      className={classnames('filter-popup', className)}
      header={<h2 className="filter-popup__title">Filters</h2>}
    >
      {children}
    </Popup>
  );
};

export default FilterPopup;
