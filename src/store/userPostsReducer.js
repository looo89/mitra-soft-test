import { GET_USER_POSTS, SET_USER_POSTS } from "./helpers/constans";


const initialState = {
  userPosts: [],
  status: null,
};

const userPostsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: payload,
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default userPostsReducer
export const getUserPosts = (id) => ({type: GET_USER_POSTS, payload: {id}});
export const setUserPosts = (payload) => ({type: SET_USER_POSTS, payload});