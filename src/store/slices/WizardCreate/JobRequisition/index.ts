import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  activeStep: number;
  selectedJobPosition: any;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: any;
};

const initialState: InitialState = {
  activeStep: 0,
  selectedJobPosition: null,
  status: 'idle',
  error: null
};

const jobRequisitionWizardCreate = createSlice({
  name: 'jobRequisitionWizardCreate',
  initialState: initialState,
  reducers: {
    setJobRequisitionWizardCreate: (state, action) => {}
  }
});
