import { GET_USER, SET_USER } from "./helpers/constans";


const initialState = {
  user: null,
  status: null,
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default userReducer;
export const getUser = (id) => ({type: GET_USER, payload: {id}})
export const setUser = (payload) => ({type: SET_USER, payload});