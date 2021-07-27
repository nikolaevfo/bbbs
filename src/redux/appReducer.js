/* eslint-disable import/named */
import {
  SET_CITY_CHOICE_POPUP_OPEN,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_ID,
  SET_IS_POPUP_SIGNIN_OPEN,
  SET_POPUP_ERROR_TEXT,
  SET_IS_LOGGED_IN,
  SET_CURRENT_USER,
  SET_IS_POPUP_ERROR_OPEN,
  SET_POPUP_WICH_WAS_OPEN,
} from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  isCityChoicePopupOpen: false,
  currentCityId: undefined,
  currentCity: undefined,
  isPopupSigninOpen: false,
  popupErrorText: '',
  currentUser: {},
  isLoggedIn: false,
  popupWichWasOpen: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_CHOICE_POPUP_OPEN:
      return { ...state, isCityChoicePopupOpen: action.payload };
    case SET_CURRENT_CITY_ID:
      return { ...state, currentCityId: action.payload };
    case SET_CURRENT_CITY:
      return { ...state, currentCity: action.payload };
    case SET_IS_POPUP_SIGNIN_OPEN:
      return { ...state, isPopupSigninOpen: action.payload };
    case SET_POPUP_ERROR_TEXT:
      return { ...state, popupErrorText: action.payload };
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_IS_POPUP_ERROR_OPEN:
      return { ...state, isPopupErrorOpen: action.payload };
    case SET_POPUP_WICH_WAS_OPEN:
      return { ...state, popupWichWasOpen: action.payload };
    default:
      return state;
  }
};
