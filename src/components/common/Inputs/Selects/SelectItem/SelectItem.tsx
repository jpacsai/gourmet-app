import classnames from 'classnames';

import { Icon, MenuItem } from '@blueprintjs/core';
import { IItemRendererProps } from '@blueprintjs/select';

import { SelectItemType } from '../types';

import './SelectItem.scss';

// ---------- SelectItem Text---------- //

type TextProps = {
  text: string;
  active: boolean;
  multiSelect?: boolean;
};

const SelectItemText: React.FC<TextProps> = ({ text, active, multiSelect }) => {
  return multiSelect ? (
    <div className="selectItem__text">
      {text}
      {active && <Icon icon="small-tick" className="quick-view__detail-icon" color="#af5b76" />}
    </div>
  ) : (
    <span>{text}</span>
  );
};

// ---------- SelectItem ---------- //

type Props = {
  item: SelectItemType;
  rendererProps: IItemRendererProps;
  active: boolean;
  disabled?: boolean;
  blank?: boolean;
  multiSelect?: boolean;
  className?: string;
};

const SelectItem: React.FC<Props> = ({ item, rendererProps, active, disabled, blank, multiSelect, className }) => {
  const { id, text } = item;
  const { modifiers, handleClick } = rendererProps;

  return modifiers.matchesPredicate ? (
    <MenuItem
      key={id}
      icon={Number.isSafeInteger(id) ? <Icon icon="dot" iconSize={12} color="#adadad" /> : null}
      text={<SelectItemText text={text} active={active} multiSelect={multiSelect} />}
      active={active}
      disabled={disabled}
      onClick={handleClick}
      className={classnames(
        'selectItem',
        multiSelect && 'selectItem__multiSelect',
        active && 'selectItem__active',
        blank && 'selectItem__blank',
        className
      )}
    />
  ) : null;
};

export default SelectItem;
