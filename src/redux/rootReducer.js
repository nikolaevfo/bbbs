/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { mainPageReducer } from './mainPageReducer';

export const rootReducer = combineReducers({
  mainPage: mainPageReducer,
});
