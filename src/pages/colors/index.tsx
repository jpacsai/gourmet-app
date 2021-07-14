import { Card, Elevation } from '@blueprintjs/core';

import './Colors.scss';

import { Tag } from '../../data/types';

const colors = [
  { name: 'raspberry', color: '#bc5173', text: 'white', usage: Tag.DESSZERT, display: true },
  { name: 'raspberry_light', color: '#E4779D', text: 'white', usage: Tag.TORTA },
  { name: 'purple', color: '#C87DB0', text: 'white', usage: Tag.SÜTEMÉNY },
  { name: 'turquoise_dark', color: '#A781D8', text: 'white', usage: Tag.REGGELI },
  { name: 'green', color: '#547DD2', text: 'white', usage: Tag.STREET },
  { name: 'steel_blue', color: '#2274A5', text: 'white', usage: Tag.HAL },
  { name: 'pacific_blue', color: '#42A2B5', text: 'white', usage: Tag.EGYTÁL },
  { name: 'grass_green', color: '#82B342', text: 'white', usage: Tag.FŐZELÉK },
  { name: 'mint', color: '#C6DEA6', text: 'black', usage: Tag.VEGA },
  { name: 'yellow', color: '#FCD581', text: 'black', usage: Tag.TÉSZTA },
  { name: 'yellow_dark', color: '#EC8932', text: 'white', usage: Tag.LEVES },
  { name: 'red', color: '#DA2F49', text: 'white', usage: Tag.HÚS },
  { name: 'salmon', color: '#ffa686', text: 'black', usage: Tag.SZÁRNYAS },
  { name: 'mandarin', color: '#FF7847', text: 'white', usage: Tag.SERTÉS },
  { name: 'deep_red', color: '#830B33', text: 'white', usage: Tag.MARHA },
];

const Home: React.FC = () => {
  return (
    <div className="color-board">
      {colors.map(({ name, color, text, usage }) => (
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
