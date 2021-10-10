//material-ui
import { Typography, Box, BoxProps, Stack } from '@mui/material';
//core-components
import { MenuItem } from '../MenuItem';
//resources
import React from 'react';
//entities
import { Menu } from '../../../../types/menu';

type Props = BoxProps & {
  menu: Menu;
};

export function MenuGroup({ menu, ...props }: Props) {
  const { label, menuItems } = menu;
  return (
    <Box {...props}>
      <Typography variant="overline">{label}</Typography>
      <Stack spacing={0.5}>
        {menuItems.map((mi) => (
          <MenuItem key={mi.id} item={mi} />
        ))}
      </Stack>
    </Box>
  );
}
