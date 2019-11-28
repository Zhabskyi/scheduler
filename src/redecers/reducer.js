import {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
  SET_SPOTS
} from "./actionTypes";

export const INITIAL_STATE = {
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_DAY:
      return { ...state, day: action.payload };
    case SET_APPLICATION_DATA:
      return {
        ...state,
        days: action.days,
        appointments: action.appointments,
        interviewers: action.interviewers
      };
    case SET_INTERVIEW:
      return { ...state, appointments: action.payload };
    case SET_SPOTS:
      return { ...state, days: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};
