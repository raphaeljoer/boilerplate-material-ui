//material-ui
import { Stack, Box, BoxProps } from '@mui/material';
//core-components
import { MenuGroup } from './components';
//resources
import React from 'react';
import * as styles from './styles';
//entities
import { Menu } from '../../types/menu';

type Props = BoxProps & {
  menu: Menu[];
};

export function SidebarDefault({ menu, ...props }: Props) {
  return (
    <Box component="aside" sx={{ ...styles.container, ...props }}>
      <Stack spacing={2}>
        {menu.map((m) => (
          <MenuGroup key={m.id} menu={m} />
        ))}
      </Stack>
    </Box>
  );
}
