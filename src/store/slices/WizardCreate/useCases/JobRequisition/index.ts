import { createSlice } from '@reduxjs/toolkit';

export const jobReqWizardCreateSlice = createSlice({
  name: '@JobReqWizardCreate',
  initialState: null,
  reducers: {
    next: (draft) => {
      console.log(draft);
    }
  }
});

export const { next } = jobReqWizardCreateSlice.actions;

export const jobReqWizardCreateReducer = jobReqWizardCreateSlice.reducer;
