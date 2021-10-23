//material-ui
import { Box, Button, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
//styles
import * as styles from './styles';

type Props = {
  sx?: SxProps<Theme>;
  onNext?: () => void;
  onPrev?: () => void;
};

export function Footer({ onNext, onPrev, sx }: Props) {
  return (
    <Box sx={{ ...styles.container, ...sx }}>
      <Box sx={styles.content}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={onNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
