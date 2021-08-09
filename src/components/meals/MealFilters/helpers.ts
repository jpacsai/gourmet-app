import { SelectItemType } from '../../common/Inputs/Selects/types';

export type FilterState = {
  daytime: SelectItemType | null;
  course: SelectItemType | null;
  mainCourse: SelectItemType[] | null;
  meats: SelectItemType[] | null;
  desserts: SelectItemType[] | null;
  temps: SelectItemType[] | null;
};

export const defaultState = {
  daytime: null,
  course: null,
  mainCourse: null,
  meats: null,
  desserts: null,
  temps: null,
};

export enum FilterNames {
  DAYTIME = 'daytime',
  COURSE = 'course',
  MAIN_COURSE = 'mainCourse',
  MEATS = 'meats',
  DESSERTS = 'desserts',
  TEMPS = 'temps',
}

export type ClearFiltersMap = {
  [key in FilterNames]: Partial<keyof FilterState>[];
};

const createFilters = <T extends ClearFiltersMap>(filters: T) => filters;

export const clearFiltersMap = createFilters({
  daytime: ['daytime', 'course', 'mainCourse', 'meats', 'desserts'],
  course: ['course', 'mainCourse', 'meats', 'desserts'],
  mainCourse: ['mainCourse', 'meats', 'desserts'],
  meats: ['meats'],
  desserts: ['desserts'],
  temps: ['temps'],
});

export const countFilters = (filters: FilterState) =>
  Object.values(filters).reduce((count, filterValue) => (filterValue ? count + 1 : count), 0);

export const clearFilters = (clearFilterName: FilterNames) =>
  Array.from(clearFiltersMap[clearFilterName]).reduce((clearIds, id) => ({ ...clearIds, [id]: null }), {});

export const hasFilter = (filters: SelectItemType[] | null, filterType: string | string[]): boolean => {
  if (!filters) return false;
  const filterValues = filters.reduce((acc: string[], filter) => (filter.value ? [...acc, filter.value] : acc), []);
  const filterTypeArr = Array.isArray(filterType) ? filterType : [filterType];
  return filterValues.some((item) => filterTypeArr.includes(item));
};
