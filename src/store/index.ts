import { configureStore } from '@reduxjs/toolkit';
import { jobReqWizardCreateReducer } from './slices/WizardCreate/useCases/jobReqWizardCreate';

export const store = configureStore({
  reducer: {
    jobReqWizardCreate: jobReqWizardCreateReducer
  }
});
