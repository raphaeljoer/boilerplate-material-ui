//material-ui
import { Box, Typography } from '@mui/material';
//resources
import React from 'react';
//styles
import * as styles from './styles';

type Props = {
  title: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
};

export function Section({ title, description, children }: Props) {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Box sx={styles.body}>{children}</Box>
    </Box>
  );
}
