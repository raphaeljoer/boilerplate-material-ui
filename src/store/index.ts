import { configureStore } from '@reduxjs/toolkit';
import { creationWizardReducers } from './slices/CreationWizard/reducers';
import { sidebarReducer } from './slices/Sidebar';

export const store = configureStore({
  reducer: {
    creationWizard: creationWizardReducers,
    sidebar: sidebarReducer
  }
});
