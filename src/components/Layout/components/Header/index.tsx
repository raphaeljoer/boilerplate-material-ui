import React, { useCallback } from 'react';
import { Box, IconButton, Theme } from '@mui/material';
import { SxProps } from '@material-ui/system';
import * as styles from './styles';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Logo } from 'components/Logo';
import { useAppDispatch } from 'hooks';
import { SidebarSetIsOpen } from 'store/slices/Sidebar';

type Props = {
  sx?: SxProps<Theme>;
};

export function Header({ sx }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(SidebarSetIsOpen());
  }, [dispatch]);

  return (
    <Box component="header" sx={{ ...styles.container, ...sx }}>
      <Box sx={styles.logo}>
        <IconButton color="inherit" aria-label="Menu" onClick={handleClick}>
          <MenuOutlinedIcon />
        </IconButton>
        <Logo />
      </Box>
    </Box>
  );
}
