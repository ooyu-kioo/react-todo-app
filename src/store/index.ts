import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducerのimport(default export)
import Todo from './Todo/todos'
import Filter from './Todo/filter'
import GithubApi from './Github-api'

/*
reducerまとめたりstore生成したり
*/

// reducer結合
const reducers = combineReducers({ Todo, Filter, GithubApi })
export const Store = createStore(reducers, applyMiddleware(thunk))
export type State = ReturnType<typeof Store.getState>