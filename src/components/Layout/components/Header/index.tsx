import React from 'react';
import { Box, BoxProps } from '@mui/material';
import * as styles from './styles';
import { Head } from './components/Head';

type Props = BoxProps;

export function Header({ ...props }: Props) {
  return (
    <Box component="header" sx={{ ...styles.container, ...props }}>
      <Head />
    </Box>
  );
}
