import './CategoryTag.scss';

import { Meal } from '../../data/types';

type Props = {
  meal: Meal;
};

const CategoryTag: React.FC<Props> = ({ meal }) => {
  return <div className="category-tag">Desszert</div>;
};

export default CategoryTag;
