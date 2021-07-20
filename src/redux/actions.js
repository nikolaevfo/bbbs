/* eslint-disable import/prefer-default-export */
import { SET_MAIN_PAGE_CALENDAR_CARD, SET_MAIN_PAGE_DATA } from './types';

export function setMainPageDataRedux(data) {
  return {
    type: SET_MAIN_PAGE_DATA,
    payload: data,
  };
}

export function setMainPageCalendarCardRedux(data) {
  return {
    type: SET_MAIN_PAGE_CALENDAR_CARD,
    payload: data,
  };
}
