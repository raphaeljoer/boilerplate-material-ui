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
import * as Styles from './styles';

type Props = GridProps & {
  headerProps?: BoxProps;
  children: JSX.Element | JSX.Element[];
};

export function Layout({ headerProps, children }: Props) {
  const isTablet = useMediaQuery(useTheme().breakpoints.down('md'));
  return (
    <Grid id="layout" sx={Styles.container}>
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
