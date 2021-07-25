import React from 'react';
import classnames from 'classnames';

import Clear from '../../Clear/Clear';
import Popup from '../../Popup/Popup';

import './FilterPopup.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClearAll: () => void;
  className?: string;
};

const FilterPopup: React.FC<Props> = ({ isOpen, onClose, onClearAll, className, children }) => {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      className={classnames('filter-popup', className)}
      header={
        <div className="filter-popup__header">
          <h2 className="filter-popup__title">Filters</h2>
          <Clear onClick={onClearAll} fontSize={18} icon={false} className="filter-popup__clear" />
        </div>
      }
    >
      <div className="filter-popup__content">{children}</div>
    </Popup>
  );
};

export default FilterPopup;
