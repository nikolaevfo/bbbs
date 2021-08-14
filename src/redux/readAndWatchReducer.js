import { SET_READ_AND_WATCH_DATA } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  readAndWatchData: {},
};

export const readAndWatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_READ_AND_WATCH_DATA:
      return { ...state, readAndWatchData: action.payload };
    default:
      return state;
  }
};
