//material-ui
import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';

type Props = {
  sx?: SxProps<Theme>;
  children: JSX.Element | JSX.Element[];
};

export function Main({ sx, children }: Props) {
  return (
    <Box component="main" position="relative" overflow="scroll" sx={sx}>
      {children}
    </Box>
  );
}
