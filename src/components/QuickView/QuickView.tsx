import React from 'react';

import { Card, Elevation, Icon, Overlay } from '@blueprintjs/core';

import './QuickView.scss';

import { Meal } from '../../data/types';

type Props = {
  meal: Meal | null;
  isOpen: boolean;
  onClose: (id: Meal['id'] | null) => void;
};

const QuickView: React.FC<Props> = ({ meal, isOpen, onClose }) => {
  // add blank quick view card
  return (
    <Overlay isOpen={isOpen} onClose={() => onClose(meal?.id || null)} className="quick-view">
      <Card className="quick-view__card" elevation={Elevation.TWO}>
        <div className="quick-view__card_header">
          <Icon icon="cross" iconSize={20} onClick={() => onClose(meal?.id || null)} />
        </div>
        <div className="quick-view__card_content">
          <h4 className="quick-view__card_title">{meal?.name}</h4>
        </div>
      </Card>
    </Overlay>
  );
};

export default QuickView;
