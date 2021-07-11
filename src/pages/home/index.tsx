import { Card, Elevation } from '@blueprintjs/core';

import './Home.scss';

const colors = [
  { name: 'raspberry', color: '#bc5173', text: 'white', usage: 'desszert', display: true },
  { name: 'raspberry_light', color: '#e2b6c4', text: 'black', usage: 'torta' },
  { name: 'purple_pink', color: '#BAABC5', text: 'black', usage: 'sütemény' },
  { name: 'yellow', color: '#FCD581', text: 'black', usage: 'tészta' },
  { name: 'yellow_dark', color: '#EC8932', text: 'white', usage: 'leves' },
  { name: 'steel_blue', color: '#2274A5', text: 'white', usage: 'hal' },
  { name: 'turquoise', color: '#00CECB', text: 'white', usage: 'főétel' },
  { name: 'pacific_blue', color: '#42A2B5', text: 'white', usage: 'egytál' },
  { name: 'turquoise_dark', color: '#69C9B6', text: 'black', usage: 'reggeli' },
  { name: 'green', color: '#43aa8b', text: 'white', usage: 'street' },
  { name: 'grass_green', color: '#96C25B', text: 'black', usage: 'főzelék' },
  { name: 'mint', color: '#C6DEA6', text: 'black', usage: 'vega' },
  { name: 'salmon', color: '#ffa686', text: 'black', usage: 'sertés' },
  { name: 'mandarin', color: '#FF7847', text: 'white', usage: 'szárnyas' },
  { name: 'red', color: '#DA2F49', text: 'white', usage: 'marha' },
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
