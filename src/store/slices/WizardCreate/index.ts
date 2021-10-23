import { createSlice } from '@reduxjs/toolkit';

type JobRequisition = {
  activeStep: number;
  steps: string[];
};

const initialState: JobRequisition = {
  activeStep: 0,
  steps: ['details', 'reason', 'posting', 'submit']
};

export const jobReqWizardCreateSlice = createSlice({
  name: '@JobReqWizardCreate',
  initialState,
  reducers: {
    jobReqSetNextStep: (draft) => {
      if (draft.activeStep < draft.steps.length - 1) {
        draft.activeStep += 1;
      }
    },
    jobReqSetPrevStep: (draft) => {
      if (draft.activeStep > 0) draft.activeStep -= 1;
    }
  }
});

export const { jobReqSetNextStep, jobReqSetPrevStep } =
  jobReqWizardCreateSlice.actions;

export const jobReqWizardCreateReducer = jobReqWizardCreateSlice.reducer;
