//material-ui
import { Stack, Box, BoxProps } from '@mui/material';
//core-components
import { Logo } from '../../../Logo';
import { MenuGroup } from './components';
//resources
import React from 'react';
import * as Styles from './styles';
//entities
import { Menu } from '../../entities/menu';

type Props = BoxProps & {
  menu: Menu[];
};

export function SidebarDefault({ menu, ...props }: Props) {
  return (
    <Box {...Styles.container} {...props}>
      <Logo mb={3} mt={1} />
      <Stack spacing={2}>
        {menu.map((m) => (
          <MenuGroup key={m.id} menu={m} />
        ))}
      </Stack>
    </Box>
  );
}
