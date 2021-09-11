import { SET_FILMS_DATA } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  filmsData: [],
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS_DATA:
      return { ...state, filmsData: action.payload };
    default:
      return state;
  }
};
