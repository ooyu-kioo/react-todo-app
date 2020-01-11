import { State } from '../../../store'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../filter/actions'

/*
selector：
*/

// export const GetAllTodos = (state: State) => state.Todo.todos
export const GetAllTodos = (state: State) => {
  const todos = state.Todo.todos
  switch (state.Filter.visibility.type) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.done)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.done)
    // no default
  }
}