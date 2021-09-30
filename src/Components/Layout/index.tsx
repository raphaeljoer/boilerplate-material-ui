//material-ui
import { Grid, GridProps, Box } from '@mui/material';
//core-Components
import { Sidebar } from '../../Components';
//resources
import React from 'react';
import * as Styles from './styles';

type Props = GridProps & {
  children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: Props) {
  return (
    <Grid id="layout" sx={Styles.container}>
      <Sidebar gridArea="sidebar" />
      <Box gridArea="main">{children}</Box>
    </Grid>
  );
}
