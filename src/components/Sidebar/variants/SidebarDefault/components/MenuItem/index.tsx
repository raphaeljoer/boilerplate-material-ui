import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { MenuItem as Item } from '../../../../entities/menu';
import * as Styles from './styles';

type Props = ButtonProps & {
  item: Item;
};

export function MenuItem({ item, ...props }: Props) {
  const { label, icon: Icon } = item;
  return (
    <Button startIcon={<Icon />} {...Styles.button} {...props}>
      {label}
    </Button>
  );
}
