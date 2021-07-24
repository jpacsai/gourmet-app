import React, { useMemo } from 'react';
import { v4 } from 'uuid';

import './CategoryTags.scss';

import { getTagColor } from '../../helpers/colors';
import { Meal, Tag as TagType } from '../../data/types';

// ---------- Tag ---------- //

type TagProps = {
  tag: TagType;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  const { color, text } = useMemo(() => getTagColor(tag), [tag]);
  return (
    <div className="category-tag" style={{ backgroundColor: color, color: text }}>
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
      <Tag key={`tag-${v4()}`} tag={tag} />
    ))}
  </div>
);

export default CategoryTags;
