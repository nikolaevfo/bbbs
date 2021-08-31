import { SET_VIDEO_DATA } from './types';

/* eslint-disable import/prefer-default-export */
const initialState = {
  videoData: [],
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEO_DATA:
      return { ...state, videoData: action.payload };
    default:
      return state;
  }
};
