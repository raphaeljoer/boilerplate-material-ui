import { configureStore } from '@reduxjs/toolkit';
import { creationWizardReducers } from './slices/CreationWizard/reducers';

export const store = configureStore({
  reducer: {
    creationWizard: creationWizardReducers
  }
});
