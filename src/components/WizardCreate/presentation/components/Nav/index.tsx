//material-ui
import { Box, Button, Theme, Tooltip } from '@mui/material';
import { SxProps } from '@mui/system';
import { useAppSelector } from 'hooks';
import { ArrowForwardOutlined, ArrowBackOutlined } from '@mui/icons-material';
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
  const nextTip = isNextStepAvailable
    ? 'continue'
    : 'You must fill all the required fields';
  return (
    <Box sx={{ ...styles.content, ...sx }}>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        disabled={!isPrevStepAvailable}
        startIcon={<ArrowBackOutlined />}
        onClick={onPrev}
      >
        Previous
      </Button>
      <Tooltip title={nextTip}>
        <div>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            disabled={!isNextStepAvailable}
            endIcon={<ArrowForwardOutlined />}
            onClick={onNext}
          >
            Continue
          </Button>
        </div>
      </Tooltip>
    </Box>
  );
}
