import React, { useState } from 'react';

import FilterPopup from '../../common/Filters/FilterPopup/FilterPopup';
import FilterSection from '../../common/Filters/FilterSection/FilterSection';
import Select from '../../common/Inputs/Selects/Select/Select';

import { SelectItemType } from '../../common/Inputs/Selects/types';
import MultiSelect from '../../common/Inputs/Selects/MultiSelect/MultiSelect';

import './MealFilterPopup.scss';

import { mealFilterOptions } from '../../../data/filters';
import { CategoryName, Daytime, MainSubCat } from '../../../data/types';

type Props = {
  isOpen: boolean;
  onChange: (count: number) => void;
  onClose: () => void;
  onClearAll: () => void;
  className?: string;
};

type State = {
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

const daytimeClear: Partial<keyof State>[] = ['daytime', 'course', 'mainCourse', 'meat', 'meatOnly', 'dessert'];
const courseClear: Partial<keyof State>[] = ['course', 'mainCourse', 'meat', 'meatOnly', 'dessert'];
const mainCourseClear: Partial<keyof State>[] = ['mainCourse', 'meat', 'meatOnly', 'dessert'];
const meatClear: Partial<keyof State>[] = ['meat'];
const meatOnlyClear: Partial<keyof State>[] = ['meatOnly'];
const dessertClear: Partial<keyof State>[] = ['dessert'];
const tempClear: Partial<keyof State>[] = ['temp'];
const tempsClear: Partial<keyof State>[] = ['temps'];

const countFilters = (filters: State) =>
  Object.values(filters).reduce((count, filterValue) => (filterValue ? count + 1 : count), 0);

const MealFilterPopup: React.FC<Props> = ({ isOpen, onChange, onClose, onClearAll }) => {
  const [filters, setFilters] = useState<State>(defaultState);

  const handleClear = (clearFilterIds: Partial<keyof State>[]) => {
    const clearFilters = clearFilterIds.reduce((clearIds, id) => ({ ...clearIds, [id]: null }), {});
    const newFilters = {
      ...filters,
      ...clearFilters,
    };
    handleFilters(newFilters);
  };

  const handleClearAll = () => {
    setFilters(defaultState);
    onClearAll();
  };

  const handleChange = (item: SelectItemType | SelectItemType[] | null, id: string) => {
    const newFilters = {
      ...filters,
      [id]: item,
    };
    handleFilters(newFilters);
  };

  const handleFilters = (newFilters: State) => {
    setFilters(newFilters);
    const filterCount = countFilters(newFilters);
    onChange(filterCount); // TODO
  };

  const { daytime, course, mainCourse } = filters;

  return (
    <FilterPopup isOpen={isOpen} onClose={onClose} onClearAll={handleClearAll} className="meal-filters">
      <FilterSection title="Napszak" onClear={() => handleClear(daytimeClear)}>
        <Select
          id="daytime"
          items={[{ text: 'Válassz napszakot...', value: null, id: '' }, ...mealFilterOptions.daytimeOptions]}
          selectedItem={filters['daytime']}
          onChange={handleChange}
          placeholder="Válassz napszakot..."
        />
      </FilterSection>

      {daytime?.value === Daytime.EBÉD_VACSORA && (
        <FilterSection title="Fogás" onClear={() => handleClear(courseClear)}>
          <Select
            id="course"
            items={[{ text: 'Válassz fogást...', value: null, id: '' }, ...mealFilterOptions.courseOptions]}
            selectedItem={filters['course']}
            onChange={handleChange}
            placeholder="Válassz fogást..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.MAIN && (
        <FilterSection title="Főétel" onClear={() => handleClear(mainCourseClear)}>
          <Select
            id="mainCourse"
            items={[{ text: 'Válassz főételt...', value: null, id: '' }, ...mealFilterOptions.mainCourseOptions]}
            selectedItem={filters['mainCourse']}
            onChange={handleChange}
            placeholder="Válassz főételt..."
          />
        </FilterSection>
      )}

      {mainCourse?.value === MainSubCat.HÚS && (
        <FilterSection title="Hús étel" onClear={() => handleClear(meatOnlyClear)}>
          <Select
            id="meatOnly"
            items={[{ text: 'Válassz húst...', value: null, id: '' }, ...mealFilterOptions.meatOnlyOptions]}
            selectedItem={filters['meatOnly']}
            onChange={handleChange}
            placeholder="Válassz húst..."
          />
        </FilterSection>
      )}

      {(mainCourse?.value === MainSubCat.EGYTÁL || mainCourse?.value === MainSubCat.TÉSZTA) && (
        <FilterSection title="Hús típus" onClear={() => handleClear(meatClear)}>
          <Select
            id="meat"
            items={[{ text: 'Válassz hús típust...', value: null, id: '' }, ...mealFilterOptions.meatOptions]}
            selectedItem={filters['meat']}
            onChange={handleChange}
            placeholder="Válassz hús típust..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.DESSERT && (
        <FilterSection title="Desszert" onClear={() => handleClear(dessertClear)}>
          <Select
            id="dessert"
            items={[{ text: 'Válassz desszertet...', value: null, id: '' }, ...mealFilterOptions.dessertOptions]}
            selectedItem={filters['dessert']}
            onChange={handleChange}
            placeholder="Válassz desszertet..."
          />
        </FilterSection>
      )}

      {daytime?.value === Daytime.EBÉD_VACSORA && <hr />}

      <FilterSection title="Hőmérséklet" onClear={() => handleClear(tempClear)}>
        <Select
          id="temp"
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItem={filters['temp']}
          onChange={handleChange}
          placeholder="Válassz hőmérsékletet..."
        />
      </FilterSection>

      <FilterSection title="Hőmérséklet" onClear={() => handleClear(tempsClear)}>
        <MultiSelect
          id="temps"
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItems={filters['temps']}
          onChange={handleChange}
          placeholder="Válassz hőmérsékletet..."
          filterByTyping={false}
        />
      </FilterSection>
    </FilterPopup>
  );
};

export default MealFilterPopup;
