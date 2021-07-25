import React from 'react';
import classnames from 'classnames';

import Clear from '../../Clear/Clear';
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
      header={
        <div className="filter-popup__header">
          <h2 className="filter-popup__title">Filters</h2>
          <Clear
            onClick={() => console.log('clear from popup')}
            fontSize={18}
            icon={false}
            className="filter-popup__clear"
          />
        </div>
      }
    >
      {children}
    </Popup>
  );
};

export default FilterPopup;
