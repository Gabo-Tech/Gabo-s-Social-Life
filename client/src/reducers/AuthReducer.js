import { AUTH, LOGOUT } from '../constants/ActionTypes';

export default function authReducer(state = { authData: null }, action){
  switch (action.type) {
    case AUTH:
      console.log("THIS IS ACTION DATA", action.data);
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data, loading: false, errors: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};