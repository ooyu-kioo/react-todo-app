import { State } from '../../../store'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions'

/*
selector： ここはtodoに吸収されるからいらんですね
*/

export const FilterTodos = (state: State) => {
  const todos = state.Todo.todos
  switch (state.Filter.visibility.type) {
    case SHOW_ALL:
      return todos
    case SHOW_ACTIVE:
      return todos.filter(todo => todo.done)
    case SHOW_COMPLETED:
      return todos.filter(todo => !todo.done)
    // no default
  }
}