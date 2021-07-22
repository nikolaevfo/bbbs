import { SET_MAIN_PAGE_DATA, SET_MAIN_PAGE_CALENDAR_CARD } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  mainPageData: {},
  mainPageCalendarCard: {},
};

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_PAGE_DATA:
      return { ...state, mainPageData: action.payload };
    case SET_MAIN_PAGE_CALENDAR_CARD:
      return { ...state, mainPageCalendarCard: action.payload };
    default:
      return state;
  }
};
