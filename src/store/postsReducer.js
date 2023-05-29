import { GET_POSTS, SET_POSTS } from "./helpers/constans";


const initialState = {
  posts: [],
  status: null,
};

const postsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...payload],
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default postsReducer;
export const getPosts = () => ({type: GET_POSTS});
export const setPosts = (payload) => ({type: SET_POSTS, payload});