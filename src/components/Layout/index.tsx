//material-ui
import { Grid, GridProps } from '@mui/material';
//core-Components
import { Sidebar, Main } from './components';
//resources
import React from 'react';
import * as styles from './styles';

type Props = GridProps & {
  children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: Props) {
  return (
    <Grid id="layout" sx={styles.container}>
      <Sidebar />
      <Main>{children}</Main>
    </Grid>
  );
}
