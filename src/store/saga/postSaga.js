import {put, takeEvery, call} from "redux-saga/effects"
import { postAPI } from "../../api"
import { FETCH_POSTS, setPosts } from "../postsReducer"


const fetchPostsFromApi = () => fetch('https://jsonplaceholder.typicode.com/posts')
function* fetchPostWorker() {
    const data = yield call(fetchPostsFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setPosts(json))
}

export function* postWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostWorker)
}