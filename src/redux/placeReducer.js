import {
  SET_IS_POPUP_WHERE_TO_GO_OPEN,
  SET_WHERE_TO_GO_CARDS_DATA,
  SET_WHERE_TO_GO_TAGS_DATA,
} from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  whereToGoCardsData: [],
  whereToGoTagsData: [],
  isPopupWhereToGoOpen: false,
};

export const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHERE_TO_GO_CARDS_DATA:
      return { ...state, whereToGoCardsData: action.payload };
    case SET_WHERE_TO_GO_TAGS_DATA:
      return { ...state, whereToGoTagsData: action.payload };
    case SET_IS_POPUP_WHERE_TO_GO_OPEN:
      return { ...state, isPopupWhereToGoOpen: action.payload };
    default:
      return state;
  }
};
