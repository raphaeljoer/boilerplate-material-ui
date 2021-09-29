//material-ui
import { Box, BoxProps, Stack } from '@mui/material';
//core-components
import { MenuItem } from '../MenuItem';
//resources
import React from 'react';
//Entities
import { Menu } from '../../../../entities/menu';

type Props = BoxProps & {
  menu: Menu;
};

export function MenuGroup({ menu, ...props }: Props) {
  const { menuItems } = menu;
  return (
    <Box {...props}>
      <Stack alignItems="center" spacing={1}>
        {menuItems.map((mi) => (
          <MenuItem key={mi.id} item={mi} />
        ))}
      </Stack>
    </Box>
  );
}
