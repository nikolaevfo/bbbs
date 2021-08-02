import {
  SET_CALENDAR_DATA,
  SET_CALENDAR_MONTH_LIST,
  SET_CLICKED_CALENDAR_CARD,
  SET_IS_POPUP_CALENDAR_CONFIRM_OPEN,
  SET_IS_POPUP_CALENDAR_DESCRIPTION_OPEN,
  SET_IS_POPUP_CALENDAR_DONE_OPEN,
  // SET_POPUP_CALENDAR_ERROR_TEXT,
  // SET_POPUP_CALENDAR_WICH_WAS_OPEN,
} from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  calendarData: undefined,
  monthList: [],
  isPopupCalendarDescriptionOpen: false,
  clickedCalendarCard: [],
  isPopupCalendarConfirmOpen: false,
  isPopupCalendarDoneOpen: false,
  // isPopupErrorOpen: false,
  // popupErrorText: '',
  // popupCalendarWichWasOpen: undefined,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALENDAR_DATA:
      return { ...state, calendarData: action.payload };
    case SET_CALENDAR_MONTH_LIST:
      return { ...state, monthList: action.payload };
    case SET_IS_POPUP_CALENDAR_DESCRIPTION_OPEN:
      return { ...state, isPopupCalendarDescriptionOpen: action.payload };
    case SET_CLICKED_CALENDAR_CARD:
      return { ...state, clickedCalendarCard: action.payload };
    case SET_IS_POPUP_CALENDAR_CONFIRM_OPEN:
      return { ...state, isPopupCalendarConfirmOpen: action.payload };
    case SET_IS_POPUP_CALENDAR_DONE_OPEN:
      return { ...state, isPopupCalendarDoneOpen: action.payload };
    // case SET_POPUP_CALENDAR_ERROR_TEXT:
    //   return { ...state, popupErrorText: action.payload };
    // case SET_POPUP_CALENDAR_WICH_WAS_OPEN:
    //   return { ...state, popupCalendarWichWasOpen: action.payload };
    default:
      return state;
  }
};
