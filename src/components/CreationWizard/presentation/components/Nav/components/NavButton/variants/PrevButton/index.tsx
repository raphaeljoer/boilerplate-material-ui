import React, { useCallback } from 'react';
import { ArrowBackOutlined } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import { jobReqControlSetPrevStep } from 'store/slices/CreationWizard/useCases/jobReqCreationWizard/control';

export function PrevButton() {
  const dispatch = useAppDispatch();

  const activeStep = useAppSelector(
    (s) => s.creationWizard.jobReq.control.activeStep
  );
  const state = useAppSelector((s) => s.creationWizard.jobReq.control.state);

  const isAvailable = activeStep > 0 && state !== 'success';

  const handlePrev = useCallback(() => {
    dispatch(jobReqControlSetPrevStep());
  }, [dispatch]);

  return (
    <Tooltip title="Go back">
      <div>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          disabled={!isAvailable}
          startIcon={<ArrowBackOutlined />}
          onClick={handlePrev}
        >
          Previous
        </Button>
      </div>
    </Tooltip>
  );
}
