import { Reducer } from 'redux'
import { TodoActions, ADDTODO, TOGGLETODO } from '../actions'
import { Todo } from '../index'


// state
export interface TodosState {
  todos: Todo[]
}

// initialState
export const initialState: TodosState = {
  todos: []
}

// reducer
const TodoReducer: Reducer<TodosState, TodoActions> = (
  state: TodosState = initialState,
  action: TodoActions
): TodosState => {
  switch (action.type) {
    case ADDTODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload.text,
            done: false
          }
        ]
      }
    case TOGGLETODO:
      return {
        // viewから渡されたpayloadと一致するtodoのdoneだけ変える
        todos: state.todos.map((todo) => {
          return todo.id == action.payload.id ? { ...todo, done: !todo.done } : todo
        })
      }
    default:
      return state
  }
}

export default TodoReducer