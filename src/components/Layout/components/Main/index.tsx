//material-ui
import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
//styles
import * as styles from './styles';

type Props = {
  sx?: SxProps<Theme>;
  children: JSX.Element | JSX.Element[];
};

export function Main({ sx, children }: Props) {
  return (
    <Box component="main" sx={{ ...styles.container, ...sx }}>
      {children}
    </Box>
  );
}
