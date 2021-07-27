/* eslint-disable import/prefer-default-export */
import {
  SET_CALENDAR_DATA,
  SET_CALENDAR_MONTH_LIST,
  SET_CHECKED_TO_DELETE_PROFILE_STORY,
  SET_CITY_CHOICE_POPUP_OPEN,
  SET_CLICKED_CALENDAR_CARD,
  SET_POPUP_WICH_WAS_OPEN,
  SET_IS_LOGGED_IN,
  SET_CURRENT_USER,
  SET_POPUP_ERROR_TEXT,
  SET_IS_POPUP_ERROR_OPEN,
  SET_CURRENT_CITY,
  SET_CURRENT_CITY_ID,
  SET_DELETE_STORY_POPUP_OPEN,
  SET_IS_POPUP_CALENDAR_CONFIRM_OPEN,
  SET_IS_POPUP_CALENDAR_DESCRIPTION_OPEN,
  SET_IS_POPUP_CALENDAR_DONE_OPEN,
  SET_IS_POPUP_SIGNIN_OPEN,
  SET_IS_POPUP_WHERE_TO_GO_OPEN,
  SET_MAIN_PAGE_CALENDAR_CARD,
  SET_MAIN_PAGE_DATA,
  // SET_POPUP_CALENDAR_ERROR_TEXT,
  SET_POPUP_CALENDAR_WICH_WAS_OPEN,
  SET_PROFILE_CALENDAR_CARDS,
  SET_PROFILE_NARRATIVES_CARDS,
  SET_QUESTIONS_DATA,
  SET_QUESTIONS_TAGS_DATA,
  SET_WHERE_TO_GO_CARDS_DATA,
  SET_WHERE_TO_GO_TAGS_DATA,
  SET_IS_STORY_FORM_REDACT_OPEN,
} from './types';

// APP ========================================================================
export function setCityChoicePopupOpenRedux(data) {
  return {
    type: SET_CITY_CHOICE_POPUP_OPEN,
    payload: data,
  };
}
export function setCurrentCityIdRedux(data) {
  return {
    type: SET_CURRENT_CITY_ID,
    payload: data,
  };
}
export function setCurrentCityRedux(data) {
  return {
    type: SET_CURRENT_CITY,
    payload: data,
  };
}
export function setIsPopupSigninOpenRedux(data) {
  return {
    type: SET_IS_POPUP_SIGNIN_OPEN,
    payload: data,
  };
}
export function setPopupErrorTextRedux(data) {
  return {
    type: SET_POPUP_ERROR_TEXT,
    payload: data,
  };
}
export function setIsPopupErrorOpenRedux(data) {
  return {
    type: SET_IS_POPUP_ERROR_OPEN,
    payload: data,
  };
}
export function setIsLoggedInRedux(data) {
  return {
    type: SET_IS_LOGGED_IN,
    payload: data,
  };
}
export function setCurrentUserRedux(data) {
  return {
    type: SET_CURRENT_USER,
    payload: data,
  };
}
export function setPopupWichWasOpenRedux(data) {
  return {
    type: SET_POPUP_WICH_WAS_OPEN,
    payload: data,
  };
}

// MAIN =========================================================================
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

// PROFILE =========================================================================
export function setDeleteStoryPopupOpenRedux(data) {
  return {
    type: SET_DELETE_STORY_POPUP_OPEN,
    payload: data,
  };
}
export function setProfileNarrativesCardsRedux(data) {
  return {
    type: SET_PROFILE_NARRATIVES_CARDS,
    payload: data,
  };
}
export function setProfileCalendarCardsRedux(data) {
  return {
    type: SET_PROFILE_CALENDAR_CARDS,
    payload: data,
  };
}
export function setCheckedToDeleteProfileStoryRedux(data) {
  return {
    type: SET_CHECKED_TO_DELETE_PROFILE_STORY,
    payload: data,
  };
}
export function setIsStoryFormRedactOpenRedux(data) {
  return {
    type: SET_IS_STORY_FORM_REDACT_OPEN,
    payload: data,
  };
}

// CALENDAR =========================================================================
export function setCalendarDataRedux(data) {
  return {
    type: SET_CALENDAR_DATA,
    payload: data,
  };
}
export function setMonthListRedux(data) {
  return {
    type: SET_CALENDAR_MONTH_LIST,
    payload: data,
  };
}
export function setIsPopupCalendarDescriptionOpenRedux(data) {
  return {
    type: SET_IS_POPUP_CALENDAR_DESCRIPTION_OPEN,
    payload: data,
  };
}
export function setClickedCalendarCardRedux(data) {
  return {
    type: SET_CLICKED_CALENDAR_CARD,
    payload: data,
  };
}
export function setIsPopupCalendarConfirmOpenRedux(data) {
  return {
    type: SET_IS_POPUP_CALENDAR_CONFIRM_OPEN,
    payload: data,
  };
}
export function setIsPopupCalendarDoneOpenRedux(data) {
  return {
    type: SET_IS_POPUP_CALENDAR_DONE_OPEN,
    payload: data,
  };
}
// export function setPopupErrorTextRedux(data) {
//   return {
//     type: SET_POPUP_CALENDAR_ERROR_TEXT,
//     payload: data,
//   };
// }
export function setPopupCalendarWichWasOpenRedux(data) {
  return {
    type: SET_POPUP_CALENDAR_WICH_WAS_OPEN,
    payload: data,
  };
}

// PLACE =========================================================================
export function setWhereToGoCardsDataRedux(data) {
  return {
    type: SET_WHERE_TO_GO_CARDS_DATA,
    payload: data,
  };
}
export function setWhereToGoTagsDataRedux(data) {
  return {
    type: SET_WHERE_TO_GO_TAGS_DATA,
    payload: data,
  };
}
export function setIsPopupWhereToGoOpenRedux(data) {
  return {
    type: SET_IS_POPUP_WHERE_TO_GO_OPEN,
    payload: data,
  };
}

// QUESTIONS =========================================================================
export function setQuestionsDataRedux(data) {
  return {
    type: SET_QUESTIONS_DATA,
    payload: data,
  };
}
export function setQuestionsTagsDataRedux(data) {
  return {
    type: SET_QUESTIONS_TAGS_DATA,
    payload: data,
  };
}
