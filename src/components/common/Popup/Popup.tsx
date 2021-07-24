import React from 'react';
import classnames from 'classnames';

import { Card, Elevation, Overlay } from '@blueprintjs/core';

import CornerIcon from '../CornerIcon/CornerIcon';

import './Popup.scss';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, className }) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose} className={classnames('popup', className)}>
      <Card className="popup__card" elevation={Elevation.TWO}>
        <CornerIcon className="popup__close-icon" icon="cross" onClick={onClose} />
        <div className="popup__card_content">{children}</div>
      </Card>
    </Overlay>
  );
};

export default Popup;
