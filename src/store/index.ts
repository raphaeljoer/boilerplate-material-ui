import { configureStore } from '@reduxjs/toolkit';
import { jobReqWizardCreateReducer } from './slices/WizardCreate';

export const store = configureStore({
  reducer: {
    jobReqWizardCreate: jobReqWizardCreateReducer
  }
});
