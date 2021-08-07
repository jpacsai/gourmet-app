import React from 'react';

import { Card, Elevation, Icon } from '@blueprintjs/core';

import './FilterBar.scss';
import Clear from '../../Clear/Clear';

type Props = {
  filterCounter: number;
  onClick: () => void;
  onClear: () => void;
};

const FilterBar: React.FC<Props> = ({ filterCounter, onClick, onClear }) => {
  return (
    <Card className="filter-bar" interactive={true} elevation={Elevation.THREE} onClick={onClick}>
      <div className="filter-bar__counter">
        <Icon icon="filter" size={16} />
        <span className="filter-bar__counter-text">
          Filters <span className="filter-bar__counter-value">({filterCounter})</span>
        </span>
      </div>
      <Clear onClick={onClear} fontSize={14} className="filter-bar__clear" />
    </Card>
  );
};

export default FilterBar;
