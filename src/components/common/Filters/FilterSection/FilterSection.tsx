import React from 'react';
import classnames from 'classnames';

import {} from '@blueprintjs/core';

import './FilterSection.scss';
import Clear from '../../Clear/Clear';

type Props = {
  title: string;
  onClear: () => void;
  className?: string;
};

const FilterSection: React.FC<Props> = ({ title, onClear, className, children }) => {
  return (
    <div className={classnames('filter-section', className)}>
      <div className="filter-section__header">
        <h4 className="filter-section__header-title">{title}</h4>
        <Clear onClick={onClear} displayIcon={false} className="filter-section__clear" bold />
      </div>
      <div className="filter-section__content">{children}</div>
    </div>
  );
};

export default FilterSection;
