import React from 'react';

import FilterPopup from '../../common/Filters/FilterPopup/FilterPopup';
import FilterSection from '../../common/Filters/FilterSection/FilterSection';
import Select from '../../common/Inputs/Selects/Select/Select';

import MultiSelect from '../../common/Inputs/Selects/MultiSelect/MultiSelect';

import './MealFilterPopup.scss';

import { mealFilterOptions } from '../../../data/filters';
import { CategoryName, Daytime, MainSubCat } from '../../../data/types';
import { FilterState, FilterNames } from '../MealFilters/MealFilters';
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
          <Select
            id={FilterNames.MAIN_COURSE}
            items={[{ text: 'Válassz főételt...', value: null, id: '' }, ...mealFilterOptions.mainCourseOptions]}
            selectedItem={filters['mainCourse']}
            onChange={(item) => onChange(item, FilterNames.MAIN_COURSE)}
            placeholder="Válassz főételt..."
          />
        </FilterSection>
      )}

      {mainCourse?.value === MainSubCat.HÚS && (
        <FilterSection title="Hús étel" onClear={() => onClear(FilterNames.MEAT_ONLY)}>
          <Select
            id={FilterNames.MEAT_ONLY}
            items={[{ text: 'Válassz húst...', value: null, id: '' }, ...mealFilterOptions.meatOnlyOptions]}
            selectedItem={filters['meatOnly']}
            onChange={(item) => onChange(item, FilterNames.MEAT_ONLY)}
            placeholder="Válassz húst..."
          />
        </FilterSection>
      )}

      {(mainCourse?.value === MainSubCat.EGYTÁL || mainCourse?.value === MainSubCat.TÉSZTA) && (
        <FilterSection title="Hús típus" onClear={() => onClear(FilterNames.MEAT)}>
          <Select
            id={FilterNames.MEAT}
            items={[{ text: 'Válassz hús típust...', value: null, id: '' }, ...mealFilterOptions.meatOptions]}
            selectedItem={filters['meat']}
            onChange={(item) => onChange(item, FilterNames.MEAT)}
            placeholder="Válassz hús típust..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.DESSERT && (
        <FilterSection title="Desszert" onClear={() => onClear(FilterNames.DESSERT)}>
          <Select
            id={FilterNames.DESSERT}
            items={[{ text: 'Válassz desszertet...', value: null, id: '' }, ...mealFilterOptions.dessertOptions]}
            selectedItem={filters['dessert']}
            onChange={(item) => onChange(item, FilterNames.DESSERT)}
            placeholder="Válassz desszertet..."
          />
        </FilterSection>
      )}

      {daytime?.value === Daytime.EBÉD_VACSORA && <hr />}

      <FilterSection title="Hőmérséklet" onClear={() => onClear(FilterNames.TEMP)}>
        <Select
          id={FilterNames.TEMP}
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItem={filters['temp']}
          onChange={(item) => onChange(item, FilterNames.TEMP)}
          placeholder="Válassz hőmérsékletet..."
        />
      </FilterSection>

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
