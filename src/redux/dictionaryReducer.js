import { SET_DICTIONARY_DATA } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  dictionaryData: [],
};

export const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DICTIONARY_DATA:
      return { ...state, dictionaryData: action.payload };
    default:
      return state;
  }
};
