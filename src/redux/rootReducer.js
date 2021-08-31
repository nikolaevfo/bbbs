/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { mainPageReducer } from './mainPageReducer';
import { profileReducer } from './profileReducer';
import { calendarReducer } from './calendarReducer';
import { placeReducer } from './placeReducer';
import { questionsReducer } from './questionsReducer';
import { readAndWatchReducer } from './readAndWatchReducer';
import { dictionaryReducer } from './dictionaryReducer';
import { videoReducer } from './videoReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  mainPage: mainPageReducer,
  profile: profileReducer,
  calendar: calendarReducer,
  place: placeReducer,
  questions: questionsReducer,
  readAndWatch: readAndWatchReducer,
  dictionary: dictionaryReducer,
  video: videoReducer,
});
