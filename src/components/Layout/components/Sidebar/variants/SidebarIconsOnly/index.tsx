//material-ui
import { Stack, Box, Theme } from '@mui/material';
//core-components
import { MenuGroup } from './components/MenuGroup';
//resources
import React from 'react';
//entities
import { Menu } from '../../types/menu';
//styles
import * as styles from './styles';
import { SxProps } from '@mui/system';

type Props = {
  sx?: SxProps<Theme>;
  menu: Menu[];
};

export function SidebarIconsOnly({ menu, sx }: Props) {
  return (
    <Box sx={{ ...styles.container, ...sx }}>
      <Stack alignItems="center" spacing={2}>
        {menu.map((m) => (
          <MenuGroup key={m.id} menu={m} />
        ))}
      </Stack>
    </Box>
  );
}
