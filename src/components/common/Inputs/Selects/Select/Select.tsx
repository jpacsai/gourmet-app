import React from 'react';
import classnames from 'classnames';

import { Button } from '@blueprintjs/core';
import { Select as BPSelect, IItemRendererProps } from '@blueprintjs/select';

import SelectItem from '../SelectItem/SelectItem';

import './Select.scss';

import { SelectItemType } from '../types';

type Props = {
  items: SelectItemType[];
  onChange: (item: SelectItemType) => void;
  selectedItem: SelectItemType | null;
  filterable?: boolean;
  blankText?: string;
  className?: string;
};

const Select: React.FC<Props> = ({ items, selectedItem, onChange, filterable = false, blankText, className }) => {
  const handleItemRender = (item: SelectItemType, props: IItemRendererProps) => (
    <SelectItem item={item} rendererProps={props} active={selectedItem?.id === item.id} />
  );

  return (
    <BPSelect
      className={classnames('select', className)}
      items={items}
      itemRenderer={handleItemRender}
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
