import React, { useMemo } from 'react';

import './CategoryTags.scss';

import { Meal, Tag as TagType } from '../../data/types';

const colors = [
  { name: 'raspberry', color: '#bc5173', text: 'white', usage: TagType.DESSZERT },
  { name: 'raspberry_light', color: '#E4779D', text: 'white', usage: TagType.TORTA },
  { name: 'purple', color: '#C87DB0', text: 'white', usage: TagType.SÜTEMÉNY },
  { name: 'turquoise_dark', color: '#A781D8', text: 'white', usage: TagType.REGGELI },
  { name: 'green', color: '#547DD2', text: 'white', usage: TagType.STREET },
  { name: 'steel_blue', color: '#2274A5', text: 'white', usage: TagType.HAL },
  { name: 'pacific_blue', color: '#42A2B5', text: 'white', usage: TagType.EGYTÁL },
  { name: 'grass_green', color: '#82B342', text: 'white', usage: TagType.FŐZELÉK },
  { name: 'mint', color: '#C6DEA6', text: 'black', usage: TagType.VEGA },
  { name: 'yellow', color: '#FCD581', text: 'black', usage: TagType.TÉSZTA },
  { name: 'yellow_dark', color: '#EC8932', text: 'white', usage: TagType.LEVES },
  { name: 'red', color: '#DA2F49', text: 'white', usage: TagType.HÚS },
  { name: 'salmon', color: '#ffa686', text: 'black', usage: TagType.SZÁRNYAS },
  { name: 'mandarin', color: '#FF7847', text: 'white', usage: TagType.SERTÉS },
  { name: 'deep_red', color: '#830B33', text: 'white', usage: TagType.MARHA },
];

const getTagColor = (tag: TagType) => {
  const color = colors.find(({ usage }) => usage === tag);
  return {
    background: color?.color || 'lightsteelblue',
    text: color?.text || 'black',
  };
};

// ---------- Tag ---------- //

type TagProps = {
  tag: TagType;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  const { background, text } = useMemo(() => getTagColor(tag), [tag]);
  return (
    <div className="category-tag" style={{ backgroundColor: background, color: text }}>
      {tag}
    </div>
  );
};

// ---------- CategoryTags ---------- //

type CategoryTagsProps = {
  meal: Meal;
};

const CategoryTags: React.FC<CategoryTagsProps> = ({ meal }) => (
  <div className="category-tags">
    {meal.details.tags.map((tag, index) => (
      <Tag key={`tag-${index}`} tag={tag} />
    ))}
  </div>
);

export default CategoryTags;
