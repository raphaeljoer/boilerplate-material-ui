import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuItem as Item } from '../../../../types/menu';
import * as styles from './styles';
import { Link } from 'react-router-dom';

type Props = {
  item: Item;
};

export function MenuItem({ item }: Props) {
  const { label, path, icon: Icon } = item;
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <ListItemButton sx={styles.listItem}>
        <ListItemIcon sx={styles.listItemIcon}>
          <Icon size={24} />
        </ListItemIcon>
        <ListItemText primary={label} sx={styles.listItemText} />
      </ListItemButton>
    </Link>
  );
}
