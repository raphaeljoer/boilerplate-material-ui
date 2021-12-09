import React, { useCallback } from 'react';
import { Button, Tooltip } from '@mui/material';
import { RiSendPlaneFill } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from 'hooks';
import { jobReqControlSetState } from 'store/slices/CreationWizard/useCases/jobReqCreationWizard/control';

const getTip = (isAvailable: boolean): string => {
  return isAvailable ? 'Submit' : 'You already submitted';
};

export function SubmitButton() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.creationWizard.jobReq.control.state);
  const isAvailable = state !== 'success';

  //TODO: Implements submit logic
  const handleSubmit = useCallback(() => {
    dispatch(jobReqControlSetState('success'));
  }, [dispatch]);

  return (
    <Tooltip title={getTip(isAvailable)}>
      <div>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          disabled={!isAvailable}
          endIcon={<RiSendPlaneFill />}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Tooltip>
  );
}
