import React from 'react';
import classnames from 'classnames';

import { IItemRendererProps, MultiSelect as BPMultiSelect } from '@blueprintjs/select';

import SelectItem from '../SelectItem/SelectItem';

import './MultiSelect.scss';

import { SelectItemType } from '../types';

type Props = {
  items: SelectItemType[];
  selectedItems: SelectItemType[] | null;
  onChange: (items: SelectItemType[]) => void;
  blankText?: string;
  className?: string;
};

const MultiSelect: React.FC<Props> = ({ items, selectedItems, onChange, className }) => {
  const handleItemRender = (item: SelectItemType, props: IItemRendererProps) => {
    const isActive = selectedItems?.find((sel) => sel.id === item.id);
    return <SelectItem item={item} rendererProps={props} active={!!isActive} disabled={item.id === ''} />;
  };

  const handleChange = (newItem: SelectItemType) => {
    const isSelected = selectedItems?.find((selectedItem) => selectedItem.id === newItem.id);
    const newSelectedItems =
      isSelected && selectedItems
        ? selectedItems.filter((selectedItem) => selectedItem.id !== newItem.id)
        : [...(selectedItems || []), newItem];
    onChange(newSelectedItems);
  };

  return (
    <BPMultiSelect
      items={items}
      itemRenderer={handleItemRender}
      tagRenderer={(item) => item.text}
      onItemSelect={handleChange}
      popoverProps={{ minimal: true, usePortal: false }}
      className={classnames('multiSelect', className)}
    />
  );
};

export default MultiSelect;
