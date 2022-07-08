import { AUTH } from '../constants/ActionTypes.js'
import * as api from '../api/ApiIndex';

export const signin = (formData, router) => async (dispatch) => {
  try {
    console.log("signin called  with form data: ",formData);
    const { data } = await api.signIn(formData);
    console.log("signin called  DATA: ",data);
    // localStorage.setItem('profile', JSON.stringify({ ...data }));
    dispatch({ type: AUTH, data });
    router.push('/');
  } catch (err) {
    console.error("THIS IS THE SIGNIN ERROR", err);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log("signup called  with form data: ",formData);
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push('/');
  } catch (err) {
    console.error("THIS IS THE SIGNUP ERROR", err.response.data.message, err);
  }
};