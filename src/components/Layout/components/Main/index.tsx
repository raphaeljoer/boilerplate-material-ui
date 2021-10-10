//material-ui
import { Box, BoxProps } from '@mui/material';
//core-components
import { Header } from '../Header';
//resources
import React from 'react';

type Props = BoxProps & {
  headerProps?: BoxProps;
  children: JSX.Element | JSX.Element[];
};

export function Main({ headerProps, children, ...props }: Props) {
  return (
    <Box {...props}>
      <Header {...headerProps} />
      <Box component="main" overflow="hidden">
        {children}
      </Box>
    </Box>
  );
}
