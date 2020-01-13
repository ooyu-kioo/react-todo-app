
/*
todoで使用するstateの定義と各種ファイルの再export(このindexに集める)
*/

export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

export * from './actions'
export * from './selectors'
export { default } from './reducers'