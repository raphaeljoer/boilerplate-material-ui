//material-ui
import { Box, Stack } from '@mui/material';
//core-components
import { MenuItem } from '../MenuItem';
//resources
import React from 'react';
//entities
import { Menu } from '../../../../types/menu';

type Props = {
  menu: Menu;
};

export function MenuGroup({ menu, ...props }: Props) {
  const { menuItems } = menu;
  return (
    <Box {...props}>
      <Stack spacing={0.5}>
        {menuItems.map((mi) => (
          <MenuItem key={mi.id} item={mi} />
        ))}
      </Stack>
    </Box>
  );
}
