import React from 'react';
import { Box, BoxProps } from '@mui/material';
import * as Styles from './styles';

type Props = BoxProps;

export function Header({ ...props }: Props) {
  return (
    <Box component="header" sx={Styles.container} {...props}>
      Header
    </Box>
  );
}
