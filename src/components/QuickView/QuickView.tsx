import React, { useMemo } from 'react';

import { Icon, IconName, MaybeElement } from '@blueprintjs/core';

import Popup from '../common/Popup/Popup';

import './QuickView.scss';

import { displayImage } from '../../helpers/image';
import { Meal } from '../../data/types';

// ---------- Blank QuickView ---------- //

type BlankQuickViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BlankQuickView: React.FC<BlankQuickViewProps> = ({ isOpen, onClose }) => (
  <Popup isOpen={isOpen} onClose={onClose} className="quick-view">
    <div className="quick-view__blank-card-content">
      <h4 className="quick-view__card_title">Sorry, couldn't find meal...</h4>
    </div>
  </Popup>
);

// ---------- QuickViewDetailIcon ---------- //

type QuickViewDetailIconProps = {
  content?: string;
  icon: IconName | MaybeElement;
};

const QuickViewDetailIcon: React.FC<QuickViewDetailIconProps> = ({ content = 'N/A', icon }) => (
  <div className="quick-view__detail">
    <Icon icon={icon} className="quick-view__detail-icon" />
    <span className="quick-view__detail-text">{content}</span>
  </div>
);

// ---------- QuickView ---------- //

type QuickViewProps = {
  meal: Meal | null;
  isOpen: boolean;
  onClose: (id: Meal['id'] | null) => void;
};

const QuickView: React.FC<QuickViewProps> = ({ meal, isOpen, onClose }) => {
  const image = useMemo(() => (meal ? displayImage(meal.details.images) : null), [meal]);
  if (!meal) return <BlankQuickView isOpen={isOpen} onClose={() => onClose(null)} />;
  return (
    <Popup isOpen={isOpen} onClose={() => onClose(meal.id)} className="quick-view">
      <div
        className="quick-view__card_header"
        style={{
          backgroundImage: `linear-gradient(transparent 0%, #ffffff7d 65%, white 95%), url(${image})`,
        }}
      />
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
              {meal.details.ingredients.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default QuickView;
