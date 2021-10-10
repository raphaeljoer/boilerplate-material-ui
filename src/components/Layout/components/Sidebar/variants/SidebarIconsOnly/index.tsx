//material-ui
import { Stack, Box, BoxProps } from '@mui/material';
//core-components
import { MenuGroup } from './components/MenuGroup';
//resources
import React from 'react';
//entities
import { Menu } from '../../types/menu';
//styles
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
