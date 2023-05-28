const defaultState = {
    posts: []
}

export const FETCH_POSTS = "FETCH_POSTS"
export const SET_POSTS = "SET_POSTS"

export default function postsReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload}
    }
    return state
}
export const fetchPosts = () => ({type: FETCH_POSTS})
export const setPosts = payload => ({type: SET_POSTS, payload})