import { SelectItem } from '../components/common/Inputs/Select/Select';
import { Time } from './types';

export const timeOptions: SelectItem[] = Object.values(Time).map((time, index) => ({
  text: time,
  id: index,
  value: time,
}));
