//material-ui
import { Stack, Box, BoxProps } from '@mui/material';
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
      <Stack component="main" spacing={2}>
        {children}
      </Stack>
    </Box>
  );
}
