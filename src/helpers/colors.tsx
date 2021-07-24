import { colorUsage, colors, defaultColor } from '../data/colors';
import { Tag, TagColor } from '../data/types';

export const tagColors = colorUsage.map((tagColor): TagColor => {
  const color = colors.find(({ name }) => name === tagColor.name);
  return { ...(color || defaultColor), ...tagColor };
});

export const getTagColor = (tag: Tag) => tagColors.find(({ usage }) => usage === tag) || defaultColor;
