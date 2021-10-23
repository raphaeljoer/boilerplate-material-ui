import { configureStore } from '@reduxjs/toolkit';
import { jobReqWizardCreateReducer } from './slices/WizardCreate/useCases/JobRequisition';

export const store = configureStore({
  reducer: {
    jobReqWizardCreate: jobReqWizardCreateReducer
  }
});
