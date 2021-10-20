import React from 'react';
import { Box, Theme } from '@mui/material';
import { SxProps } from '@material-ui/system';
import * as styles from './styles';
import { Head } from './components/Head';

type Props = {
  sx?: SxProps<Theme>;
};

export function Header({ sx }: Props) {
  return (
    <Box component="header" sx={{ ...styles.container, ...sx }}>
      <Head />
    </Box>
  );
}
