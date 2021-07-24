import React, { useMemo } from 'react';
import classnames from 'classnames';

import './Tag.scss';

import { getTagColor } from '../../../helpers/colors';
import { Tag as TagType } from '../../../data/types';

type Props = {
  tag: TagType;
  className?: string;
};

const Tag: React.FC<Props> = ({ tag, className }) => {
  const { color, text } = useMemo(() => getTagColor(tag), [tag]);
  return (
    <div className={classnames('tag', className)} style={{ backgroundColor: color, color: text }}>
      {tag}
    </div>
  );
};

export default Tag;
