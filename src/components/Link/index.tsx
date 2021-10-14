import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

type Props = MuiLinkProps & {
  to: string;
};

export function Link({ to, children, ...props }: Props) {
  return (
    <RouterLink
      to={to}
      style={{ textDecoration: 'none', width: 'fit-content' }}
    >
      <MuiLink {...props}>{children}</MuiLink>
    </RouterLink>
  );
}
