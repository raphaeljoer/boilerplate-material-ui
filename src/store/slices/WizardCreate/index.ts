//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { InputType } from 'components/WizardCreate/useCases/JobRequisition/types/Details/InputType';
import { JobPositionInputType } from 'components/WizardCreate/useCases/JobRequisition/types/Details/JobPositionInputType';

type Detail = {
  jobPosition: JobPositionInputType | null;
  team: JobPositionInputType | null;
  currency: InputType | null;
  minSalary: number | null;
  maxSalary: number | null;
};

type JobRequisition = {
  activeStep: number;
  isNextStepAvailable: boolean;
  isPrevStepAvailable: boolean;
  steps: string[];
  detail: Detail;
};

const initialState: JobRequisition = {
  activeStep: 0,
  isNextStepAvailable: false,
  isPrevStepAvailable: false,
  steps: ['details', 'reason', 'posting', 'submit'],
  detail: {
    jobPosition: null,
    team: null,
    currency: null,
    minSalary: null,
    maxSalary: null
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
      // console.log('ACTION', action);
      draft.isNextStepAvailable = action.payload;
    },
    jobReqTogglePrevStepAvailable: (draft, action: PayloadAction<boolean>) => {
      // console.log('ACTION', action);
      draft.isNextStepAvailable = action.payload;
    },
    jobReqSetDetails: (draft, action: PayloadAction<Detail>) => {
      draft.detail = action.payload;
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
