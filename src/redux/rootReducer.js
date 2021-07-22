/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { mainPageReducer } from './mainPageReducer';
import { profileReducer } from './profileReducer';
import { calendarReducer } from './calendarReducer';
import { placeReducer } from './placeReducer';
import { questionsReducer } from './questionsReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  mainPage: mainPageReducer,
  profile: profileReducer,
  calendar: calendarReducer,
  place: placeReducer,
  questions: questionsReducer,
});
