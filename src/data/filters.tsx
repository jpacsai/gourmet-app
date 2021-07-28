import { SelectItem } from '../components/common/Inputs/Select/Select';
import { DayTime, Temperature } from './types';

export const selectOptions = (enumOptions: string[]): SelectItem[] =>
  Object.values(enumOptions).map((options, index) => ({
    text: options,
    id: index,
    value: options,
  }));

export const mealFilterOptions = {
  dayTimeOptions: selectOptions(Object.values(DayTime)),
  tempOptions: selectOptions(Object.values(Temperature)),
};
