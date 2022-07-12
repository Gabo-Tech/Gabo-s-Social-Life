import { combineReducers } from 'redux';

import posts from './PostReducer';
import auth from './AuthReducer';

export const reducers = combineReducers({ posts, auth });