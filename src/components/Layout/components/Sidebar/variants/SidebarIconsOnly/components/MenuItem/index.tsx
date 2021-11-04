import React from 'react';
import { ListItemButton, ListItemIcon, Slide } from '@mui/material';
import { MenuItem as Item } from '../../../../types/menu';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import * as styles from './styles';

type Props = {
  item: Item;
};

export function MenuItem({ item }: Props) {
  const { label, path, icon: Icon } = item;
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Tooltip title={label}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <ListItemButton sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <Icon size={24} />
            </ListItemIcon>
          </ListItemButton>
        </Slide>
      </Tooltip>
    </Link>
  );
}
