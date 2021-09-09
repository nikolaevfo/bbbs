import { SET_ARTICLES_DATA } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  articlesData: [],
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES_DATA:
      return { ...state, articlesData: action.payload };
    default:
      return state;
  }
};
