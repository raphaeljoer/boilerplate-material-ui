//material-ui
import { Box, Button, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useAppSelector } from 'hooks';
//resources
import React from 'react';
//styles
import * as styles from './styles';

type Props = {
  sx?: SxProps<Theme>;
  onNext?: () => void;
  onPrev?: () => void;
};

export function Nav({ onNext, onPrev, sx }: Props) {
  const isNextStepAvailable = useAppSelector(
    (s) => s.jobReqWizardCreate.isNextStepAvailable
  );
  const isPrevStepAvailable = useAppSelector(
    (s) => s.jobReqWizardCreate.isPrevStepAvailable
  );
  return (
    <Box sx={{ ...styles.content, ...sx }}>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={!isPrevStepAvailable}
        onClick={onPrev}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={!isNextStepAvailable}
        onClick={onNext}
      >
        Continue
      </Button>
    </Box>
  );
}