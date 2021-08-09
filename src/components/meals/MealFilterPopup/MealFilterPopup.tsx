import React from 'react';

import FilterPopup from '../../common/Filters/FilterPopup/FilterPopup';
import FilterSection from '../../common/Filters/FilterSection/FilterSection';
import Select from '../../common/Inputs/Selects/Select/Select';

import MultiSelect from '../../common/Inputs/Selects/MultiSelect/MultiSelect';

import './MealFilterPopup.scss';

import { mealFilterOptions } from '../../../data/filters';
import { CategoryName, Daytime, MainSubCat } from '../../../data/types';
import { FilterState, FilterNames, hasFilter } from '../MealFilters/helpers';
import { SelectItemType } from '../../common/Inputs/Selects/types';

type Props = {
  filters: FilterState;
  isOpen: boolean;
  onChange: (item: SelectItemType | SelectItemType[] | null, id: FilterNames) => void;
  onClear: (clearFilterName: FilterNames) => void;
  onClearAll: () => void;
  onClose: () => void;
  className?: string;
};

const MealFilterPopup: React.FC<Props> = ({ filters, isOpen, onClear, onChange, onClearAll, onClose }) => {
  const { daytime, course, mainCourse } = filters;

  return (
    <FilterPopup isOpen={isOpen} onClose={onClose} onClearAll={onClearAll} className="meal-filters">
      <FilterSection title="Napszak" onClear={() => onClear(FilterNames.DAYTIME)}>
        <Select
          id={FilterNames.DAYTIME}
          items={[{ text: 'Válassz napszakot...', value: null, id: '' }, ...mealFilterOptions.daytimeOptions]}
          selectedItem={filters['daytime']}
          onChange={(item) => onChange(item, FilterNames.DAYTIME)}
          placeholder="Válassz napszakot..."
        />
      </FilterSection>

      {daytime?.value === Daytime.EBÉD_VACSORA && (
        <FilterSection title="Fogás" onClear={() => onClear(FilterNames.COURSE)}>
          <Select
            id={FilterNames.COURSE}
            items={[{ text: 'Válassz fogást...', value: null, id: '' }, ...mealFilterOptions.courseOptions]}
            selectedItem={filters['course']}
            onChange={(item) => onChange(item, FilterNames.COURSE)}
            placeholder="Válassz fogást..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.MAIN && (
        <FilterSection title="Főétel" onClear={() => onClear(FilterNames.MAIN_COURSE)}>
          <MultiSelect
            id={FilterNames.MAIN_COURSE}
            items={[{ text: 'Válassz főételt...', value: null, id: '' }, ...mealFilterOptions.mainCourseOptions]}
            selectedItems={filters['mainCourse']}
            onChange={(item) => onChange(item, FilterNames.MAIN_COURSE)}
            placeholder="Válassz főételt..."
          />
        </FilterSection>
      )}

      {hasFilter(mainCourse, [MainSubCat.HÚS, MainSubCat.EGYTÁL, MainSubCat.TÉSZTA]) && (
        <FilterSection title="Hús" onClear={() => onClear(FilterNames.MEATS)}>
          <MultiSelect
            id={FilterNames.MEATS}
            items={[
              { text: 'Válassz húst...', value: null, id: '' },
              ...(hasFilter(mainCourse, [MainSubCat.EGYTÁL, MainSubCat.TÉSZTA])
                ? mealFilterOptions.meatOptions
                : mealFilterOptions.meatOnlyOptions),
            ]}
            selectedItems={filters['meats']}
            onChange={(item) => onChange(item, FilterNames.MEATS)}
            placeholder="Válassz húst..."
            filterByTyping={false}
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.DESSERT && (
        <FilterSection title="Desszert" onClear={() => onClear(FilterNames.DESSERTS)}>
          <MultiSelect
            id={FilterNames.DESSERTS}
            items={[{ text: 'Válassz desszert típust...', value: null, id: '' }, ...mealFilterOptions.dessertOptions]}
            selectedItems={filters['desserts']}
            onChange={(item) => onChange(item, FilterNames.DESSERTS)}
            placeholder="Válassz desszert típust..."
            filterByTyping={false}
          />
        </FilterSection>
      )}

      {daytime?.value === Daytime.EBÉD_VACSORA && <hr />}

      <FilterSection title="Hőmérséklet" onClear={() => onClear(FilterNames.TEMPS)}>
        <MultiSelect
          id={FilterNames.TEMPS}
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItems={filters['temps']}
          onChange={(item) => onChange(item, FilterNames.TEMPS)}
          placeholder="Válassz hőmérsékletet..."
          filterByTyping={false}
        />
      </FilterSection>
    </FilterPopup>
  );
};

export default MealFilterPopup;
