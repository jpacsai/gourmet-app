import React, { MouseEvent } from 'react';

import { Card, Elevation, Icon } from '@blueprintjs/core';

import './FilterBar.scss';

type Props = {
  filterCounter: number;
  onClick: () => void;
  onClear: () => void;
};

const FilterBar: React.FC<Props> = ({ filterCounter, onClick, onClear }) => {
  const handleClear = (evt: MouseEvent) => {
    evt.stopPropagation();
    onClear();
  };

  return (
    <Card className="filter-bar" interactive={true} elevation={Elevation.THREE} onClick={onClick}>
      <div className="filter-bar__counter">
        <Icon icon="filter" iconSize={16} />
        <span className="filter-bar__counter-text">
          Filters <span className="filter-bar__counter-value">({filterCounter})</span>
        </span>
      </div>
      <div className="filter-bar__clear" onClick={handleClear}>
        <span className="filter-bar__clear-text">Clear</span>
        <Icon icon="cross" iconSize={16} />
      </div>
    </Card>
  );
};

export default FilterBar;
