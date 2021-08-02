import React, { useState } from 'react';

import FilterPopup from '../../common/Filters/FilterPopup/FilterPopup';
import FilterSection from '../../common/Filters/FilterSection/FilterSection';
import Select, { SelectItem } from '../../common/Inputs/Select/Select';

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
  const [daytime, setDaytime] = useState<SelectItem | null>(null);
  const [course, setCourse] = useState<SelectItem | null>(null);
  const [mainCourse, setMainCourse] = useState<SelectItem | null>(null);
  const [meat, setMeat] = useState<SelectItem | null>(null);
  const [meatOnly, setMeatOnly] = useState<SelectItem | null>(null);
  const [dessert, setDessert] = useState<SelectItem | null>(null);
  const [temp, setTemp] = useState<SelectItem | null>(null);

  const handleClearAll = () => {
    setDaytime(null);
    setCourse(null);
    setMainCourse(null);
    setMeat(null);
    setMeatOnly(null);
    setDessert(null);
    setTemp(null);
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
          blankText="Válassz napszakot..."
        />
      </FilterSection>

      {daytime?.value === Daytime.EBÉD_VACSORA && (
        <FilterSection title="Fogás" onClear={handleCourseClear}>
          <Select
            items={[{ text: 'Válassz fogást...', value: null, id: '' }, ...mealFilterOptions.courseOptions]}
            selectedItem={course}
            onChange={setCourse}
            blankText="Válassz fogást..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.MAIN && (
        <FilterSection title="Főfogás" onClear={handleMainCourseClear}>
          <Select
            items={[{ text: 'Válassz főfogás...', value: null, id: '' }, ...mealFilterOptions.mainCourseOptions]}
            selectedItem={mainCourse}
            onChange={setMainCourse}
            blankText="Válassz főfogás..."
          />
        </FilterSection>
      )}

      {mainCourse?.value === MainSubCat.HÚS && (
        <FilterSection title="Hús étel" onClear={() => setMeatOnly(null)}>
          <Select
            items={[{ text: 'Válassz húst...', value: null, id: '' }, ...mealFilterOptions.meatOnlyOptions]}
            selectedItem={meatOnly}
            onChange={setMeatOnly}
            blankText="Válassz húst..."
          />
        </FilterSection>
      )}

      {(mainCourse?.value === MainSubCat.EGYTÁL || mainCourse?.value === MainSubCat.TÉSZTA) && (
        <FilterSection title="Hús típus" onClear={() => setMeat(null)}>
          <Select
            items={[{ text: 'Válassz hús típust...', value: null, id: '' }, ...mealFilterOptions.meatOptions]}
            selectedItem={meat}
            onChange={setMeat}
            blankText="Válassz hús típust..."
          />
        </FilterSection>
      )}

      {course?.value === CategoryName.DESSERT && (
        <FilterSection title="Desszert" onClear={() => setDessert(null)}>
          <Select
            items={[{ text: 'Válassz desszertet...', value: null, id: '' }, ...mealFilterOptions.dessertOptions]}
            selectedItem={dessert}
            onChange={setDessert}
            blankText="Válassz desszertet..."
          />
        </FilterSection>
      )}

      <FilterSection title="Hőmérséklet" onClear={() => setTemp(null)}>
        <Select
          items={[{ text: 'Válassz hőmérsékletet...', value: null, id: '' }, ...mealFilterOptions.tempOptions]}
          selectedItem={temp}
          onChange={setTemp}
          blankText="Válassz hőmérsékletet..."
        />
      </FilterSection>
    </FilterPopup>
  );
};

export default MealFilterPopup;
