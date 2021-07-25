import React, { MouseEvent } from 'react';
import classnames from 'classnames';

import { Icon } from '@blueprintjs/core';

import './Clear.scss';

type Props = {
  onClick: () => void;
  fontSize?: number;
  className?: string;
  icon?: boolean;
};

const Clear: React.FC<Props> = ({ onClick, fontSize = 14, icon = true, className }) => {
  const handleClear = (evt: MouseEvent) => {
    evt.stopPropagation();
    onClick();
  };

  return (
    <div onClick={handleClear} className={classnames('clear', className)}>
      <span className="clear__text" style={{ fontSize: fontSize }}>
        Clear
      </span>
      {icon && <Icon icon="cross" iconSize={fontSize + 2} />}
    </div>
  );
};

export default Clear;
