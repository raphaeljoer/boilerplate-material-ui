//material-ui
import { Grid, GridProps, useMediaQuery, useTheme, Box } from '@mui/material';
//core-components
import { Sidebar } from '../Sidebar';
//resources
import React from 'react';
//data
import { menu } from '../Sidebar/data';
import * as Styles from './styles';

type Props = GridProps & {
  children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: Props) {
  const isTablet = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <Grid id="layout" sx={Styles.container}>
      <Sidebar
        gridArea="sidebar"
        menu={menu}
        variant={isTablet ? 'iconsOnly' : 'default'}
      />
      <Box gridArea="main">{children}</Box>
    </Grid>
  );
}
