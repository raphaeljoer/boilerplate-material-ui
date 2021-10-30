//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateControlCreationWizard } from 'store/slices/CreationWizard/protocols/ControlCreationWizardInitialState';
//types
import { JobReqControlCreationWizardInitialState } from './types';

const initialState: JobReqControlCreationWizardInitialState = {
  state: 'pending',
  activeStep: 0,
  isNextStepAvailable: false,
  isPrevStepAvailable: false,
  steps: ['details', 'reason', 'posting', 'submit']
};

export const jobReqControlCreationWizardSlice = createSlice({
  name: '@JobReqControlCreationWizard',
  initialState,
  reducers: {
    jobReqControlSetState: (
      draft,
      action: PayloadAction<StateControlCreationWizard>
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
} = jobReqControlCreationWizardSlice.actions;

export const jobReqControlReducer = jobReqControlCreationWizardSlice.reducer;
