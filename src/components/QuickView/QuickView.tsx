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
      <span className="quick-view__detail-text">{content}</span>
    </div>
  );
};

// ---------- Blank QuickView ---------- //

type QBlankQuickViewProps = {
  onClose: () => void;
};

const BlankQuickView: React.FC<QBlankQuickViewProps> = ({ onClose }) => {
  return (
    <>
      <div className="quick-view__card_header">
        <CornerIcon icon="cross" onClick={onClose} />
      </div>
      <div className="quick-view__card_content">
        <h4 className="quick-view__card_title">Sorry, couldn't find meal...</h4>
      </div>
    </>
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
        {!meal ? (
          <BlankQuickView onClose={() => onClose(null)} />
        ) : (
          <>
            <div
              className="quick-view__card_header"
              style={{
                backgroundImage: `linear-gradient(transparent 0%, #ffffff7d 65%, white 95%), url(${image})`,
              }}
            >
              <CornerIcon icon="cross" onClick={() => onClose(meal.id)} />
            </div>
            <div className="quick-view__card_content">
              <h4 className="quick-view__card_title">{meal.name}</h4>
              <hr />
              <div className="quick-view__details-container">
                <div className="quick-view__details">
                  <QuickViewDetailIcon icon="time" content={meal.details.minutes} />
                  <QuickViewDetailIcon icon="learning" content={meal.prep.difficulty} />
                  <QuickViewDetailIcon icon="dollar" content={meal.prep.cost} />
                </div>
                <hr />
                <div className="quick-view__details">
                  <QuickViewDetailIcon
                    icon={meal.temperature === 0 ? 'snowflake' : meal.temperature === 1 ? 'home' : 'flame'}
                    content="Hömérséklet"
                  />
                  <QuickViewDetailIcon icon={meal.prep.pre_cookable ? 'tick' : 'cross'} content="Előfőzhető" />
                  <QuickViewDetailIcon icon={meal.prep.freezable ? 'tick' : 'cross'} content="Fagyasztható" />
                </div>
                <hr />
                <div className="quick-view__ingredients">
                  <h5 className="quick-view__ingredients-title">Hozzávalók:</h5>
                  <ul className="quick-view__ingredients-list">
                    {meal.details.ingredients.map((ingredient) => (
                      <li>{ingredient.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </Card>
    </Overlay>
  );
};

export default QuickView;
