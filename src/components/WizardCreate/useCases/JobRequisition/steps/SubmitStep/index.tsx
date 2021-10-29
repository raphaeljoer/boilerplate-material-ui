//resources
import React from 'react';
//data
//redux
import { useAppSelector } from 'hooks';
//core-components
import { Overview, Success } from './views';

export function SubmitStep() {
  const state = useAppSelector((s) => s.wizardCreate.jobReq.control.state);

  const display = {
    pending: <Overview />,
    submitting: <Overview />,
    error: <Overview />,
    success: <Success />
  };

  return display[state];
}
