import {
  SET_CHECKED_TO_DELETE_PROFILE_STORY,
  SET_DELETE_STORY_POPUP_OPEN,
  SET_IS_STORY_FORM_REDACT_OPEN,
  SET_PROFILE_CALENDAR_CARDS,
  SET_PROFILE_NARRATIVES_CARDS,
} from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  isDeleteStoryPopupOpen: false,
  profileNarrativesCards: [],
  profileCalendarCards: [],
  checkedToDeleteProfileStory: undefined,
  isStoryFormRedactOpen: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELETE_STORY_POPUP_OPEN:
      return { ...state, isDeleteStoryPopupOpen: action.payload };
    case SET_PROFILE_NARRATIVES_CARDS:
      return { ...state, profileNarrativesCards: action.payload };
    case SET_PROFILE_CALENDAR_CARDS:
      return { ...state, profileCalendarCards: action.payload };
    case SET_CHECKED_TO_DELETE_PROFILE_STORY:
      return { ...state, checkedToDeleteProfileStory: action.payload };
    case SET_IS_STORY_FORM_REDACT_OPEN:
      return { ...state, isStoryFormRedactOpen: action.payload };
    default:
      return state;
  }
};
