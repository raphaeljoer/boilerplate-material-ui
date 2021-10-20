import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { Logo } from 'components';
import React from 'react';
import * as styles from './styles';

type Props = {
  sx?: SxProps<Theme>;
};

export function LogoContainer({ sx }: Props) {
  return (
    <Box id="logo-container" sx={{ ...styles.container, ...sx }}>
      <Logo />
    </Box>
  );
}
