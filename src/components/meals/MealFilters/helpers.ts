import { SelectItemType } from '../../common/Inputs/Selects/types';

export type FilterState = {
  daytime: SelectItemType | null;
  course: SelectItemType | null;
  mainCourse: SelectItemType | null;
  meat: SelectItemType | null;
  meatOnly: SelectItemType | null;
  dessert: SelectItemType | null;
  temp: SelectItemType | null;
  temps: SelectItemType[] | null;
};

export const defaultState = {
  daytime: null,
  course: null,
  mainCourse: null,
  meat: null,
  meatOnly: null,
  dessert: null,
  temp: null,
  temps: null,
};

export enum FilterNames {
  DAYTIME = 'daytime',
  COURSE = 'course',
  MAIN_COURSE = 'mainCourse',
  MEAT = 'meat',
  MEAT_ONLY = 'meatOnly',
  DESSERT = 'dessert',
  TEMP = 'temp',
  TEMPS = 'temps',
}

export type ClearFiltersMap = {
  [key in FilterNames]: Partial<keyof FilterState>[];
};

const createFilters = <T extends ClearFiltersMap>(filters: T) => filters;

export const clearFiltersMap = createFilters({
  daytime: ['daytime', 'course', 'mainCourse', 'meat', 'meatOnly', 'dessert'],
  course: ['course', 'mainCourse', 'meat', 'meatOnly', 'dessert'],
  mainCourse: ['mainCourse', 'meat', 'meatOnly', 'dessert'],
  meat: ['meat'],
  meatOnly: ['meatOnly'],
  dessert: ['dessert'],
  temp: ['temp'],
  temps: ['temps'],
});

export const countFilters = (filters: FilterState) =>
  Object.values(filters).reduce((count, filterValue) => (filterValue ? count + 1 : count), 0);

export const clearFilters = (clearFilterName: FilterNames) =>
  Array.from(clearFiltersMap[clearFilterName]).reduce((clearIds, id) => ({ ...clearIds, [id]: null }), {});
