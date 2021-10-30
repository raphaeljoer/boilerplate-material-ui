import { combineReducers } from '@reduxjs/toolkit';
import { jobReqControlReducer } from '../control';
import { jobReqDataReducer } from '../data';

export const jobReqReducer = combineReducers({
  control: jobReqControlReducer,
  data: jobReqDataReducer
});
