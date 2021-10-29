//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateControlWizardCreate } from 'store/slices/WizardCreate/protocols/ControlWizardCreateInitialState';
//types
import { JobReqControlWizardCreateInitialState } from './types';

const initialState: JobReqControlWizardCreateInitialState = {
  state: 'pending',
  activeStep: 0,
  isNextStepAvailable: false,
  isPrevStepAvailable: false,
  steps: ['details', 'reason', 'posting', 'submit']
};

export const jobReqControlWizardCreateSlice = createSlice({
  name: '@JobReqControlWizardCreate',
  initialState,
  reducers: {
    jobReqControlSetState: (
      draft,
      action: PayloadAction<StateControlWizardCreate>
    ) => {
      draft.state = action.payload;
    },
    jobReqControlSetNextStep: (draft) => {
      if (draft.activeStep < draft.steps.length - 1) {
        draft.activeStep += 1;
      }
    },
    jobReqControlSetPrevStep: (draft) => {
      if (draft.activeStep > 0) draft.activeStep -= 1;
    },
    jobReqControlSetNextStepAvailable: (
      draft,
      action: PayloadAction<boolean>
    ) => {
      draft.isNextStepAvailable = action.payload;
    },
    jobReqControlSetPrevStepAvailable: (
      draft,
      action: PayloadAction<boolean>
    ) => {
      draft.isPrevStepAvailable = action.payload;
    }
  }
});

export const {
  jobReqControlSetState,
  jobReqControlSetNextStep,
  jobReqControlSetPrevStep,
  jobReqControlSetNextStepAvailable,
  jobReqControlSetPrevStepAvailable
} = jobReqControlWizardCreateSlice.actions;

export const jobReqControlReducer = jobReqControlWizardCreateSlice.reducer;
