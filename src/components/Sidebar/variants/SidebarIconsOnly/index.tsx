import React from 'react';
import { Stack, Box, BoxProps } from '@mui/material';
import { Menu } from '../../entities/menu';
import { MenuGroup } from './components/MenuGroup';
import * as Styles from './styles';

type Props = BoxProps & {
  menu: Menu[];
};

export function SidebarIconsOnly({ menu, ...props }: Props) {
  return (
    <Box {...Styles.container} {...props}>
      <Stack alignItems="center" spacing={2}>
        {menu.map((m) => (
          <MenuGroup key={m.id} menu={m} />
        ))}
      </Stack>
    </Box>
  );
}
