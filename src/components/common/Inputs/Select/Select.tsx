import React, { MouseEventHandler } from 'react';
import classnames from 'classnames';

import { Button, MenuItem } from '@blueprintjs/core';
import { Select as BPSelect, IItemModifiers } from '@blueprintjs/select';

import './Select.scss';

export type SelectItem = {
  id: string | number;
  text: string;
  value: string | null;
};

type Props = {
  items: SelectItem[];
  onChange: (item: SelectItem) => void;
  selectedItem: SelectItem | null;
  filterable?: boolean;
  blankText?: string;
  className?: string;
};

const Select: React.FC<Props> = ({ items, selectedItem, onChange, filterable = false, blankText, className }) => {
  const renderItems = (
    item: SelectItem,
    { modifiers, handleClick }: { modifiers: IItemModifiers; handleClick: MouseEventHandler }
  ) =>
    modifiers.matchesPredicate ? (
      <MenuItem key={item.id} text={item.text} active={selectedItem?.id === item.id} onClick={handleClick} />
    ) : null;

  return (
    <BPSelect
      className={classnames('select', className)}
      items={items}
      itemRenderer={renderItems}
      onItemSelect={onChange}
      filterable={filterable}
      popoverProps={{ minimal: true, usePortal: false }}
    >
      <Button rightIcon="caret-down" className="select__button">
        <div>{selectedItem?.text || blankText}</div>
      </Button>
    </BPSelect>
  );
};

export default Select;
