import { takeEvery, call, put } from '@redux-saga/core/effects';
import {
  GET_COMMENTS, GET_POSTS,
  GET_USER, GET_USER_POSTS,
  SET_POSTS_ERROR, SET_COMMENTS_ERROR,
  SET_USER_ERROR
} from '../helpers/constans';

import { getComments, getPosts, getUser } from '../../api';
import { setPosts } from '../postsReducer';
import { setUser } from '../userReducer';
import { setComments } from '../commentsReducer';


const delay = () => new Promise((resolve) => {
  setTimeout(resolve, 500);
});

//Posts
export function* handlePosts() {
  yield delay();
  try {
    const { data } = yield call(getPosts);
    yield put(setPosts(data));
  } catch {
    yield put({ type: SET_POSTS_ERROR, payload: 'Error fetching posts' });
  }
}

//User
export function* handleUser({ payload: { id }}) {
  yield delay();
  try {
    const { data } = yield call(getUser, id);
    yield put(setUser(data));
  } catch {
    yield put({ type: SET_USER_ERROR, payload: 'Error fetching user' });
  }
}

//Comments
export function* handleComments() {
  yield delay();
  try {
    const { data } = yield call(getComments);
    yield put(setComments(data));
  } catch {
    yield put({ type: SET_COMMENTS_ERROR, payload: 'Error fetching comments' });
  }
}

export function* watchSaga() {
  yield takeEvery(GET_POSTS, handlePosts);
  yield takeEvery(GET_USER, handleUser);
  yield takeEvery(GET_COMMENTS, handleComments);
}

export default function* rootWatcher() {
  yield watchSaga();
}