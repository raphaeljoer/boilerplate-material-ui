import { combineReducers } from '@reduxjs/toolkit';
import { jobReqReducer } from '../useCases/jobReqCreationWizard/reducers';

export const creationWizardReducers = combineReducers({
  jobReq: jobReqReducer
});
