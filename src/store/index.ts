import { configureStore } from '@reduxjs/toolkit';
import { wizardCreateReducers } from './slices/WizardCreate/reducers';

export const store = configureStore({
  reducer: {
    wizardCreate: wizardCreateReducers
  }
});
