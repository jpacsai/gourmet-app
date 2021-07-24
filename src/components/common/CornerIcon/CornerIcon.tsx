import React, { MouseEvent } from 'react';
import classnames from 'classnames';

import { Icon, IconName } from '@blueprintjs/core';

import './CornerIcon.scss';

type Props = {
  icon: IconName;
  onClick: () => void;
  className?: string;
};

const CornerIcon: React.FC<Props> = ({ icon, onClick, className }) => {
  const handleClick = (e: MouseEvent) => {
    // TODO stop click through
    onClick();
  };

  return (
    <div className={classnames('corner-icon', className)} onClick={handleClick}>
      <Icon icon={icon} iconSize={20} />
    </div>
  );
};

export default CornerIcon;
