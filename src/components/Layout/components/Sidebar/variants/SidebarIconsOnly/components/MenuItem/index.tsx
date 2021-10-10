import React from 'react';
import { IconButton, IconButtonProps, Tooltip } from '@mui/material';
import { MenuItem as Item } from '../../../../types/menu';
import * as Styles from './styles';

type Props = IconButtonProps & {
  item: Item;
};

export function MenuItem({ item, ...props }: Props) {
  const { label, icon: Icon } = item;
  return (
    <Tooltip title={label} placement="right">
      <IconButton
        id="SidebarIconsOnly-MenuItem"
        aria-label={label}
        {...Styles.iconButton}
        {...props}
      >
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
