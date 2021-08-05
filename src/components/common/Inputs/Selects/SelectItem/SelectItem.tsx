import classnames from 'classnames';

import { MenuItem } from '@blueprintjs/core';
import { IItemRendererProps } from '@blueprintjs/select';

import { SelectItemType } from '../types';

import './SelectItem.scss';

type Props = {
  item: SelectItemType;
  rendererProps: IItemRendererProps;
  active: boolean;
  disabled?: boolean;
  className?: string;
};

const SelectItem: React.FC<Props> = ({ item, rendererProps, active, disabled, className }) => {
  const { id, text } = item;
  const { modifiers, handleClick } = rendererProps;
  return modifiers.matchesPredicate ? (
    <MenuItem
      key={id}
      icon={Number.isSafeInteger(id) ? 'dot' : null}
      text={text}
      active={active}
      disabled={disabled}
      onClick={handleClick}
      className={classnames('selectItem', className)}
    />
  ) : null;
};

export default SelectItem;
