//material-ui
import { Box, Theme, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
//styles
import * as styles from './styles';

type Props = {
  title: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
  sxBody?: SxProps<Theme>;
};

export function Section({ title, description, sxBody, children }: Props) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Box sx={{ ...styles.body, ...sxBody }}>{children}</Box>
    </Box>
  );
}
