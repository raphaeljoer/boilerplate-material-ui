import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import * as styles from './styles';

type Props = {
  to: string;
  children: string | JSX.Element | JSX.Element[];
};

export function Link({ to, children }: Props) {
  return (
    <RouterLink to={to} style={styles.router}>
      <MuiLink component="span">{children}</MuiLink>
    </RouterLink>
  );
}
