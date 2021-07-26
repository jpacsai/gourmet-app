import React, { MouseEvent } from 'react';
import classnames from 'classnames';

import { Icon } from '@blueprintjs/core';

import './Clear.scss';

type Props = {
  onClick: () => void;
  fontSize?: number;
  className?: string;
  displayIcon?: boolean;
  bold?: boolean;
};

const Clear: React.FC<Props> = ({ onClick, fontSize = 14, displayIcon = true, bold, className }) => {
  const handleClear = (evt: MouseEvent) => {
    evt.stopPropagation();
    onClick();
  };

  return (
    <div onClick={handleClear} className={classnames('clear', className)}>
      <span
        className={classnames('clear__text', displayIcon && 'marginRight', bold && 'bold')}
        style={{ fontSize: fontSize }}
      >
        Clear
      </span>
      {displayIcon && <Icon icon="cross" iconSize={fontSize + 2} />}
    </div>
  );
};

export default Clear;
