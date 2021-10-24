import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Details = {
  jobPosition: number | null;
};

type JobRequisition = {
  activeStep: number;
  isNextStepAvailable: boolean;
  isPrevStepAvailable: boolean;
  steps: string[];
  details: Details;
};

const initialState: JobRequisition = {
  activeStep: 0,
  isNextStepAvailable: true,
  isPrevStepAvailable: true,
  steps: ['details', 'reason', 'posting', 'submit'],
  details: {
    jobPosition: null
  }
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
    },
    jobReqToggleNextStepAvailable: (draft) => {
      !draft.isNextStepAvailable;
    },
    jobReqTogglePrevStepAvailable: (draft) => {
      !draft.isPrevStepAvailable;
    },
    jobReqSetDetails: (draft, action: PayloadAction<Details>) => {
      console.log(action);
      !draft.isPrevStepAvailable;
    }
  }
});

export const {
  jobReqSetNextStep,
  jobReqSetPrevStep,
  jobReqToggleNextStepAvailable,
  jobReqTogglePrevStepAvailable,
  jobReqSetDetails
} = jobReqWizardCreateSlice.actions;

export const jobReqWizardCreateReducer = jobReqWizardCreateSlice.reducer;
