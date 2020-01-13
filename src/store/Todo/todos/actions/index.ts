/*
todoのaction
*/

export const ADDTODO = 'ADDTODO'
export const TOGGLETODO = 'TOGGLETODO' // 完了・未完了の反転

// action
export const addTodo = (text: string) => ({
  type: ADDTODO as typeof ADDTODO, // 
  payload: { text }
})

export const toggleTodo = (id: number) => ({
  type: TOGGLETODO as typeof TOGGLETODO,
  payload: { id }
})

// まとめます
export type TodoActions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>