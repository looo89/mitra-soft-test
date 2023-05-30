import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'

import postsReducer from "./postsReducer"
import commentsReducer from "./commentsReducer"
import userReducer from "./userReducer";
import rootWatcher from "./saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    postsReducer,
    commentsReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)