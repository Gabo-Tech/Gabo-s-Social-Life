import * as ActionType from '../constants/ActionTypes';

export default function authReducer(state = { authData: null }, action){
  switch (action.type) {
    case ActionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data, loading: false, errors: null };
    case ActionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};