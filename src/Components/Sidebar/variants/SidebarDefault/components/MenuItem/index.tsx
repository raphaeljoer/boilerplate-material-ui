import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { MenuItem as Item } from '../../../../entities/menu';
import * as Styles from './styles';
import { Link } from 'react-router-dom';

type Props = ButtonProps & {
  item: Item;
};

export function MenuItem({ item, ...props }: Props) {
  const { label, path, icon: Icon } = item;
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Button
        variant="text"
        color="primary"
        size="medium"
        fullWidth
        startIcon={<Icon />}
        sx={Styles.button}
        {...props}
      >
        {label}
      </Button>
    </Link>
  );
}
