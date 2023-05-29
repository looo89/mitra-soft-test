import { GET_COMMENTS, SET_COMMENTS } from "./helpers/constans";


const initialState = {
  comments: [],
  status: null,
};

const commentsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: [...payload],
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default commentsReducer;
export const getComments = () => ({type: GET_COMMENTS});
export const setComments= (payload) => ({type: SET_COMMENTS, payload});