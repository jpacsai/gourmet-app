import React, { MouseEvent } from 'react';

import { Card, Elevation, Icon } from '@blueprintjs/core';

import './FilterCard.scss';

type Props = {
  filterCounter: number;
  onClick: () => void;
  onClear: () => void;
};

const MealFilterCard: React.FC<Props> = ({ filterCounter, onClick, onClear }) => {
  const handleClear = (evt: MouseEvent) => {
    evt.stopPropagation();
    onClear();
  };

  return (
    <Card className="filter-card" interactive={true} elevation={Elevation.THREE} onClick={onClick}>
      <div className="filter-card__counter">
        <Icon icon="filter" iconSize={16} />
        <span className="filter-card__counter-text">
          Filters <span className="filter-card__counter-value">({filterCounter})</span>
        </span>
      </div>
      <div className="filter-card__clear" onClick={handleClear}>
        <span className="filter-card__clear-text">Clear</span>
        <Icon icon="cross" iconSize={16} />
      </div>
    </Card>
  );
};

export default MealFilterCard;
