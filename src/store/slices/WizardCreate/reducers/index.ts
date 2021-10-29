import { combineReducers } from '@reduxjs/toolkit';
import { jobReqReducer } from '../useCases/jobReqWizardCreate/reducers';

export const wizardCreateReducers = combineReducers({
  jobReq: jobReqReducer
});
