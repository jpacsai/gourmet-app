import React, { useState } from 'react';

import FilterBar from '../../common/Filters/FilterBar/FilterBar';
import MealFilterPopup from '../MealFilterPopup/MealFilterPopup';

import { SelectItemType } from '../../common/Inputs/Selects/types';

import { FilterState, defaultState, FilterNames, clearFilters, countFilters } from './helpers';

const MealFilters: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterState>(defaultState);
  const [filterCount, setFilterCount] = useState<number>(0);

  const handleClear = (clearFilterName: FilterNames) => {
    const clearedFilters = clearFilters(clearFilterName);
    const newFilters = {
      ...filters,
      ...clearedFilters,
    };
    handleFilters(newFilters);
  };

  const handleClearAll = () => {
    setFilters(defaultState);
    setFilterCount(0);
  };

  const handleChange = (item: SelectItemType | SelectItemType[] | null, id: FilterNames) => {
    const clearedFilters = clearFilters(id);
    const newFilters = {
      ...filters,
      ...clearedFilters,
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
