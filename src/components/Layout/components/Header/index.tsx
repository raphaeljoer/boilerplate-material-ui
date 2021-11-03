import React from 'react';
import { Box, IconButton, Theme } from '@mui/material';
import { SxProps } from '@material-ui/system';
import * as styles from './styles';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Logo } from 'components/Logo';

type Props = {
  sx?: SxProps<Theme>;
};

export function Header({ sx }: Props) {
  return (
    <Box component="header" sx={{ ...styles.container, ...sx }}>
      <Box sx={styles.logo}>
        <IconButton color="inherit" aria-label="Menu">
          <MenuOutlinedIcon />
        </IconButton>
        <Logo />
      </Box>
    </Box>
  );
}
