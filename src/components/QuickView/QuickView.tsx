import React, { useMemo } from 'react';

import { Card, Elevation, Icon, IconName, MaybeElement, Overlay } from '@blueprintjs/core';

import CornerIcon from '../CornerIcon/CornerIcon';

import './QuickView.scss';

import { displayImage } from '../../helpers/image';
import { Meal } from '../../data/types';

// ---------- QuickViewDetailIcon ---------- //

type QuickViewDetailIconProps = {
  content?: string;
  icon: IconName | MaybeElement;
};

const QuickViewDetailIcon: React.FC<QuickViewDetailIconProps> = ({ content = 'N/A', icon }) => {
  return (
    <div className="quick-view__detail">
      <Icon icon={icon} className="quick-view__detail-icon" />
      <span>{content}</span>
    </div>
  );
};

// ---------- QuickView ---------- //

type QuickViewProps = {
  meal: Meal | null;
  isOpen: boolean;
  onClose: (id: Meal['id'] | null) => void;
};

const QuickView: React.FC<QuickViewProps> = ({ meal, isOpen, onClose }) => {
  const image = useMemo(() => (meal ? displayImage(meal.details.images) : null), [meal]);

  // add blank quick view card
  return (
    <Overlay isOpen={isOpen} onClose={() => onClose(meal?.id || null)} className="quick-view">
      <Card className="quick-view__card" elevation={Elevation.TWO}>
        <div
          className="quick-view__card_header"
          style={{
            backgroundImage: `linear-gradient(transparent, white 98%), url(${image})`,
          }}
        >
          <CornerIcon icon="cross" onClick={() => onClose(meal?.id || null)} />
        </div>
        <div className="quick-view__card_content">
          <h4 className="quick-view__card_title">{meal?.name}</h4>
          <hr />
          <div className="quick-view__details-container">
            <div className="quick-view__details">
              <QuickViewDetailIcon icon="time" content={meal?.details.minutes} />
              <QuickViewDetailIcon icon="learning" content={meal?.prep.difficulty} />
              <QuickViewDetailIcon icon="dollar" content={meal?.prep.cost} />
            </div>
            <hr />
            {/* 
            - cost
            - hot/cold
            - pre-cook
            - freezable
            */}

            {/* 
            Ingredients
            */}
          </div>
        </div>
      </Card>
    </Overlay>
  );
};

export default QuickView;
