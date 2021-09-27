//material-ui
import {
  Grid,
  GridProps,
  BoxProps,
  useMediaQuery,
  useTheme
} from '@mui/material';
//core-components
import { Main } from '../Main';
import { Sidebar } from '../Sidebar';
//resources
import React from 'react';
//data
import { menu } from '../Sidebar/data';

type Props = GridProps & {
  headerProps?: BoxProps;
  children: JSX.Element | JSX.Element[];
};

export function Layout({ headerProps, children }: Props) {
  const isTablet = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <Grid
      id="layout"
      display="grid"
      height="100vh"
      width="100%"
      minWidth={(theme) => theme.breakpoints.values.sm}
      bgcolor="background.paper"
      gridTemplateRows="1fr"
      gridTemplateColumns="auto 1fr"
      gridTemplateAreas="'sidebar main'"
    >
      <Sidebar
        gridArea="sidebar"
        menu={menu}
        variant={isTablet ? 'iconsOnly' : 'default'}
      />
      <Main gridArea="main" headerProps={headerProps}>
        {children}
      </Main>
    </Grid>
  );
}
