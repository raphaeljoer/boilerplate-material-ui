//material-ui
import { Grid } from '@mui/material';
//core-Components
import { Sidebar, Main, Header } from './components';
//resources
import React from 'react';
import * as styles from './styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: Props) {
  return (
    <Grid id="layout" sx={styles.grid}>
      <Header sx={{ gridArea: 'header' }} />
      <Sidebar sx={{ gridArea: 'aside' }} />
      <Main sx={{ gridArea: 'main' }}>{children}</Main>
    </Grid>
  );
}
