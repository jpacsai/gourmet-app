import React from 'react';
import classnames from 'classnames';

import { Card, Elevation, Overlay } from '@blueprintjs/core';

import './MealFilter.scss';

type Props = {
  title: string;
  className?: string;
};

const FilterSection: React.FC<Props> = ({ title, className }) => {
  return (
    <Card className={classnames('filter-section', className)}>
      <div className="filter-section__content">{title}</div>
    </Card>
  );
};

export default FilterSection;
