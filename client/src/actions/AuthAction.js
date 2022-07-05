import { AUTH } from '../constants/ActionTypes'
import * as api from '../api/ApiIndex';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push('/');
  } catch (err) {
    console.error("THIS IS THE SIGNIN ERROR", err.message);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push('/');
  } catch (err) {
    console.error("THIS IS THE SIGNUP ERROR", err.message);
  }
};