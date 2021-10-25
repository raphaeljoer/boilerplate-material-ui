//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { Detail, Posting, InitialState } from './types';

const initialState: InitialState = {
  activeStep: 0,
  isNextStepAvailable: false,
  isPrevStepAvailable: false,
  steps: ['details', 'reason', 'posting', 'submit'],
  detail: {
    jobPosition: null,
    team: null,
    currency: null,
    minSalary: null,
    maxSalary: null,
    minExperience: null,
    maxExperience: null
  },
  reason: null,
  posting: {
    jobTitle: null,
    jobDescription: null
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
    jobReqToggleNextStepAvailable: (draft, action: PayloadAction<boolean>) => {
      draft.isNextStepAvailable = action.payload;
    },
    jobReqTogglePrevStepAvailable: (draft, action: PayloadAction<boolean>) => {
      draft.isPrevStepAvailable = action.payload;
    },
    jobReqSetDetails: (draft, action: PayloadAction<Detail>) => {
      draft.detail = action.payload;
    },
    jobReqSetReason: (draft, action: PayloadAction<string>) => {
      draft.reason = action.payload;
    },
    jobReqSetPosting: (draft, action: PayloadAction<Posting>) => {
      draft.posting = action.payload;
    }
  }
});

export const {
  jobReqSetNextStep,
  jobReqSetPrevStep,
  jobReqToggleNextStepAvailable,
  jobReqTogglePrevStepAvailable,
  jobReqSetDetails,
  jobReqSetReason,
  jobReqSetPosting
} = jobReqWizardCreateSlice.actions;

export const jobReqWizardCreateReducer = jobReqWizardCreateSlice.reducer;
