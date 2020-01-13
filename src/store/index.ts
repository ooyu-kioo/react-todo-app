import { combineReducers, createStore } from 'redux'
import Todo from './Todo/todos' // reducerのimport(default export)
import Filter from './Todo/filter'

/*
reducerまとめたりstore生成したり
*/

// reducer結合
const reducers = combineReducers({ Todo, Filter })

export const Store = createStore(reducers)
export type State = ReturnType<typeof Store.getState>