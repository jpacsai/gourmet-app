import React from 'react';
import classnames from 'classnames';

import { Card, Elevation, Overlay } from '@blueprintjs/core';

import CornerIcon from '../CornerIcon/CornerIcon';

import './Popup.scss';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  className?: string;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, header, children, className }) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose} className={classnames('popup', className)}>
      <Card className="popup__card" elevation={Elevation.TWO}>
        <div className={classnames('popup__header', header && 'content')}>
          {header && <div className="popup__header-content">{header}</div>}
          <CornerIcon className="popup__close-icon" icon="chevron-left" onClick={onClose} position="left" />
        </div>
        <div className="popup__card_content">{children}</div>
      </Card>
    </Overlay>
  );
};

export default Popup;
