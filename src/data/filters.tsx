import { SelectItem } from '../components/common/Inputs/Select/Select';
import { Daytime, Temperature, CategoryName, DessertSubCat, MainSubCat, MeatOnlyCategory, MeatCategory } from './types';

export const selectOptions = (enumOptions: string[]): SelectItem[] =>
  Object.values(enumOptions).map((options, index) => ({
    text: options,
    id: index,
    value: options,
  }));

export const mealFilterOptions = {
  daytimeOptions: selectOptions(Object.values(Daytime)),
  courseOptions: selectOptions(Object.values(CategoryName)),
  mainCourseOptions: selectOptions(Object.values(MainSubCat)),
  meatOnlyOptions: selectOptions(Object.values(MeatOnlyCategory)),
  meatOptions: selectOptions(Object.values(MeatCategory)),
  dessertOptions: selectOptions(Object.values(DessertSubCat)),
  mainOptions: selectOptions(Object.values(MainSubCat)),
  tempOptions: selectOptions(Object.values(Temperature)),
};
