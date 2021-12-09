//material-ui
import { Stack, Box, Theme } from '@mui/material';
//core-components
import { MenuGroup } from './components';
//resources
import React from 'react';
import * as styles from './styles';
//entities
import { Menu } from '../../types/menu';
import { SxProps } from '@mui/system';
import { useAppSelector } from 'hooks';

type Props = {
  sx?: SxProps<Theme>;
  menu: Menu[];
};

export function SidebarDefault({ menu, ...sx }: Props) {
  const isOpen = useAppSelector((s) => s.sidebar.isOpen);

  return (
    <Box
      component="aside"
      sx={{ ...styles.container, ...sx, display: isOpen ? 'block' : 'none' }}
    >
      <Stack spacing={2}>
        {menu.map((m) => (
          <MenuGroup key={m.id} menu={m} />
        ))}
      </Stack>
    </Box>
  );
}
