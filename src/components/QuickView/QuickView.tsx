import React from 'react';

import { Card, Elevation, Icon, Overlay, IconName, MaybeElement } from '@blueprintjs/core';

import './QuickView.scss';

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
  // add blank quick view card
  return (
    <Overlay isOpen={isOpen} onClose={() => onClose(meal?.id || null)} className="quick-view">
      <Card className="quick-view__card" elevation={Elevation.TWO}>
        <div className="quick-view__card_header">
          <Icon icon="cross" iconSize={20} onClick={() => onClose(meal?.id || null)} />
        </div>
        <div className="quick-view__card_content">
          <h4 className="quick-view__card_title">{meal?.name}</h4>
          <div className="quick-view__details-container">
            <div className="quick-view__details">
              <QuickViewDetailIcon icon="time" content={meal?.details.minutes} />
              <QuickViewDetailIcon icon="learning" content={meal?.prep.difficulty} />
              <QuickViewDetailIcon icon="globe" content={meal?.couisine} />
            </div>
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
