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
  onClose: () => void;
  onClearAll: () => void;
  className?: string;
};

const MealFilterPopup: React.FC<Props> = ({ isOpen, onClose, onClearAll }) => {
  const [daytime, setDaytime] = useState<SelectItemType | null>(null);
  const [course, setCourse] = useState<SelectItemType | null>(null);
  const [mainCourse, setMainCourse] = useState<SelectItemType | null>(null);
  const [meat, setMeat] = useState<SelectItemType | null>(null);
  const [meatOnly, setMeatOnly] = useState<SelectItemType | null>(null);
  const [dessert, setDessert] = useState<SelectItemType | null>(null);
  const [temp, setTemp] = useState<SelectItemType | null>(null);
  const [temps, setTemps] = useState<SelectItemType[] | null>(null);

  const handleClearAll = () => {
    setDaytime(null);
    setCourse(null);
    setMainCourse(null);
    setMeat(null);
    setMeatOnly(null);
    setDessert(null);
    setTemp(null);
    setTemps(null);
    onClearAll();
  };

  const handleDaytimeClear = () => {
    setDaytime(null);
    setCourse(null);
    setMainCourse(null);
    setMeat(null);
    setMeatOnly(null);
    setDessert(null);
  };

  const handleCourseClear = () => {
    setCourse(null);
    setMainCourse(null);
    setMeat(null);
    setMeatOnly(null);
    setDessert(null);
  };

  const handleMainCourseClear = () => {
    setMainCourse(null);
    setMeat(null);
    setMeatOnly(null);
    setDessert(null);
  };

  return (
    <FilterPopup isOpen={isOpen} onClose={onClose} onClearAll={handleClearAll} className="meal-filters">
      <FilterSection title="Napszak" onClear={handleDaytimeClear}>
        <Select
          items={[{ text: 'Válassz napszakot...', value: null, id: '' }, ...mealFilterOptions.daytimeOptions]}
          selectedItem={daytime}
          onChange={setDaytime}
          placeholder="Válassz napszakot..."
        />
      </FilterSection>

      {daytime?.value === Daytime.EBÉD_VACSORA && (
        <FilterSection title="Fogás" onClear={handleCourseClear}>
          <Select
            items={[{ text: 'Válassz fogást...', value: null, id: '' }, ...mealFilterOptions.courseOptions]}
            selectedItem={course}
            onChange={setCourse}
            placeholder="Válassz fogást..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.MAIN && (
        <FilterSection title="Főfogás" onClear={handleMainCourseClear}>
          <Select
            items={[{ text: 'Válassz főfogás...', value: null, id: '' }, ...mealFilterOptions.mainCourseOptions]}
            selectedItem={mainCourse}
            onChange={setMainCourse}
            placeholder="Válassz főfogás..."
          />
        </FilterSection>
      )}

      {mainCourse?.value === MainSubCat.HÚS && (
        <FilterSection title="Hús étel" onClear={() => setMeatOnly(null)}>
          <Select
            items={[{ text: 'Válassz húst...', value: null, id: '' }, ...mealFilterOptions.meatOnlyOptions]}
            selectedItem={meatOnly}
            onChange={setMeatOnly}
            placeholder="Válassz húst..."
          />
        </FilterSection>
      )}

      {(mainCourse?.value === MainSubCat.EGYTÁL || mainCourse?.value === MainSubCat.TÉSZTA) && (
        <FilterSection title="Hús típus" onClear={() => setMeat(null)}>
          <Select
            items={[{ text: 'Válassz hús típust...', value: null, id: '' }, ...mealFilterOptions.meatOptions]}
            selectedItem={meat}
            onChange={setMeat}
            placeholder="Válassz hús típust..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.DESSERT && (
        <FilterSection title="Desszert" onClear={() => setDessert(null)}>
          <Select
            items={[{ text: 'Válassz desszertet...', value: null, id: '' }, ...mealFilterOptions.dessertOptions]}
            selectedItem={dessert}
            onChange={setDessert}
            placeholder="Válassz desszertet..."
          />
        </FilterSection>
      )}

      <FilterSection title="Hőmérséklet" onClear={() => setTemp(null)}>
        <Select
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItem={temp}
          onChange={setTemp}
          placeholder="Válassz hőmérsékletet..."
        />
      </FilterSection>

      <FilterSection title="Hőmérséklet" onClear={() => setTemps(null)}>
        <MultiSelect
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItems={temps}
          onChange={setTemps}
          placeholder="Válassz hőmérsékletet..."
          filterByTyping={false}
        />
      </FilterSection>
    </FilterPopup>
  );
};

export default MealFilterPopup;
