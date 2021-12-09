import React from 'react';
import { ArrowForwardOutlined } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { jobReqControlSetNextStep } from 'store/slices/CreationWizard/useCases/jobReqCreationWizard/control';

const getTip = (isAvailable: boolean): string => {
  return isAvailable ? 'continue' : 'You must fill all the required fields';
};

export function NextButton() {
  const dispatch = useAppDispatch();
  const isAvailable = useAppSelector(
    (s) => s.creationWizard.jobReq.control.isNextStepAvailable
  );

  const handleNext = useCallback(() => {
    dispatch(jobReqControlSetNextStep());
  }, [dispatch]);

  return (
    <Tooltip title={getTip(isAvailable)}>
      <div>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          disabled={!isAvailable}
          endIcon={<ArrowForwardOutlined />}
          onClick={handleNext}
        >
          Continue
        </Button>
      </div>
    </Tooltip>
  );
}
