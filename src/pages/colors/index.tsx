import { Card, Elevation } from '@blueprintjs/core';

import './Colors.scss';

import { tagColors } from '../../data/colors';

const Home: React.FC = () => {
  return (
    <div className="color-board">
      {tagColors.map(({ name, color, text, usage }) => (
        <Card key={name} className="color-card" elevation={Elevation.ONE}>
          <div className="color-card__content" style={{ backgroundColor: color, color: text }}>
            <div>
              <span className="color-card__name">{name}</span>
              <span className="color-card__hex">{color}</span>
            </div>
            <span className="color-card__usage">{usage}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Home;
