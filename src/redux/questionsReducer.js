import { SET_QUESTIONS_DATA, SET_QUESTIONS_TAGS_DATA } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  questionsData: [],
  questionsTagsData: [],
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS_DATA:
      return { ...state, questionsData: action.payload };
    case SET_QUESTIONS_TAGS_DATA:
      return { ...state, questionsTagsData: action.payload };
    default:
      return state;
  }
};
