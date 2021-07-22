import {
  SET_CITY_CHOICE_POPUP_OPEN,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_ID,
  SET_IS_POPUP_SIGNIN_OPEN,
} from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  isCityChoicePopupOpen: false,
  currentCityId: undefined,
  currentCity: undefined,
  isPopupSigninOpen: false,
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
    default:
      return state;
  }
};
