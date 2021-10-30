//redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//types
import { Detail, Posting, InitialState } from './types';

const initialState: InitialState = {
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

export const jobReqDataCreationWizardSlice = createSlice({
  name: '@JobReqCreationWizard',
  initialState,
  reducers: {
    jobReqDataSetDetails: (draft, action: PayloadAction<Detail>) => {
      draft.detail = action.payload;
    },
    jobReqDataSetReason: (draft, action: PayloadAction<string>) => {
      draft.reason = action.payload;
    },
    jobReqDataSetPosting: (draft, action: PayloadAction<Posting>) => {
      draft.posting = action.payload;
    }
  }
});

export const {
  jobReqDataSetDetails,
  jobReqDataSetReason,
  jobReqDataSetPosting
} = jobReqDataCreationWizardSlice.actions;

export const jobReqDataReducer = jobReqDataCreationWizardSlice.reducer;
