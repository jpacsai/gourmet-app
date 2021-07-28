import { SelectItem } from '../components/common/Inputs/Select/Select';
import { DayTime } from './types';

export const timeOptions: SelectItem[] = Object.values(DayTime).map((time, index) => ({
  text: time,
  id: index,
  value: time,
}));
