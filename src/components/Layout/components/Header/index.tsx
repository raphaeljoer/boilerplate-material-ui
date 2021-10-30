import React from 'react';
import { Box, Theme } from '@mui/material';
import { SxProps } from '@material-ui/system';
import * as styles from './styles';
import { LogoContainer } from 'components/Logo/components/LogoContainer';

type Props = {
  sx?: SxProps<Theme>;
};

export function Header({ sx }: Props) {
  return (
    <Box component="header" sx={{ ...styles.container, ...sx }}>
      <LogoContainer />
    </Box>
  );
}
