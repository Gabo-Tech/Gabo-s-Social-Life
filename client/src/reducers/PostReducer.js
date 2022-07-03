import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/ActionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log("This is get posts reducer action.payload: ", action.payload);
      return action.payload;
    case LIKE:
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};