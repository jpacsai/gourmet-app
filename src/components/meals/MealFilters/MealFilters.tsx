import React, { useState } from 'react';

import FilterBar from '../../common/Filters/FilterBar/FilterBar';
import MealFilterPopup from '../MealFilterPopup/MealFilterPopup';

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

const defaultState = {
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

const countFilters = (filters: FilterState) =>
  Object.values(filters).reduce((count, filterValue) => (filterValue ? count + 1 : count), 0);

const MealFilters: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterState>(defaultState);
  const [filterCount, setFilterCount] = useState<number>(0);

  const handleClear = (clearFilterName: FilterNames) => {
    const clearFilters = Array.from(clearFiltersMap[clearFilterName]).reduce(
      (clearIds, id) => ({ ...clearIds, [id]: null }),
      {}
    );
    const newFilters = {
      ...filters,
      ...clearFilters,
    };
    handleFilters(newFilters);
  };

  const handleClearAll = () => {
    setFilters(defaultState);
    setFilterCount(0);
  };

  const handleChange = (item: SelectItemType | SelectItemType[] | null, id: FilterNames) => {
    const newFilters = {
      ...filters,
      [id]: item,
    };
    handleFilters(newFilters);
  };

  const handleFilters = (newFilters: FilterState) => {
    setFilters(newFilters);
    const filterCount = countFilters(newFilters);
    setFilterCount(filterCount);
  };

  return (
    <>
      <FilterBar onClick={() => setIsFiltersOpen(true)} filterCounter={filterCount} onClear={handleClearAll} />
      <MealFilterPopup
        filters={filters}
        isOpen={isFiltersOpen}
        onChange={handleChange}
        onClear={handleClear}
        onClearAll={handleClearAll}
        onClose={() => setIsFiltersOpen(false)}
      />
    </>
  );
};

export default MealFilters;
