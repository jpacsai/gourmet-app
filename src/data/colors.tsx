import { Tag } from '../data/types';

export const colors = [
  { name: 'raspberry', color: '#bc5173', text: 'white' },
  { name: 'raspberry_light', color: '#E4779D', text: 'white' },
  { name: 'purple', color: '#C87DB0', text: 'white' },
  { name: 'lavender', color: '#A781D8', text: 'white' },
  { name: 'green', color: '#6154d2', text: 'white' },
  { name: 'turquoise_light', color: '#3abfc5', text: 'white' },
  { name: 'yellow_dark', color: '#EC8932', text: 'white' },
  { name: 'purple_dark', color: '#7D5BA6', text: 'white' },
  { name: 'grass_green', color: '#82B342', text: 'white' },
  { name: 'turquoise_dark', color: '#1282A2', text: 'white' },
  { name: 'yellow', color: '#FCD581', text: 'black' },
  { name: 'red', color: '#DA2F49', text: 'white' },
  { name: 'salmon', color: '#ffa686', text: 'black' },
  { name: 'mandarin', color: '#ED6B68', text: 'white' },
  { name: 'deep_red', color: '#830B33', text: 'white' },
  { name: 'blue', color: '#40A1DD', text: 'white' },
  { name: 'mint', color: '#C6DEA6', text: 'black' },
];

export const defaultColor = { name: 'default', color: 'lightsteelblue', text: 'black' };

export const colorUsage = [
  { name: 'raspberry', usage: Tag.DESSZERT },
  { name: 'raspberry_light', usage: Tag.TORTA },
  { name: 'purple', usage: Tag.SÜTEMÉNY },
  { name: 'lavender', usage: Tag.REGGELI },
  { name: 'green', usage: Tag.STREET },
  { name: 'turquoise_light', usage: Tag.KÖNNYŰ },
  { name: 'yellow_dark', usage: Tag.LEVES },
  { name: 'purple_dark', usage: Tag.FŐÉTEL },
  { name: 'grass_green', usage: Tag.FŐZELÉK },
  { name: 'turquoise_dark', usage: Tag.EGYTÁL },
  { name: 'yellow', usage: Tag.TÉSZTA },
  { name: 'red', usage: Tag.HÚS },
  { name: 'salmon', usage: Tag.SZÁRNYAS },
  { name: 'mandarin', usage: Tag.SERTÉS },
  { name: 'deep_red', usage: Tag.MARHA },
  { name: 'blue', usage: Tag.HAL },
  { name: 'mint', usage: Tag.VEGA },
];
