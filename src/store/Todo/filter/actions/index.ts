export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// FilterTypeの型の定義
type showAll = {
  type: 'SHOW_ALL'
}

type showCompleted = {
  type: 'SHOW_COMPLETED'
}

type showActive = {
  type: 'SHOW_ACTIVE'
}

export type FilterType
  = showAll
  | showCompleted
  | showActive


// action
export const show_all = (): FilterType => ({
  type: SHOW_ALL as typeof SHOW_ALL
})
export const show_completed = (): FilterType => ({
  type: SHOW_COMPLETED as typeof SHOW_COMPLETED
})
export const show_active = (): FilterType => ({
  type: SHOW_ACTIVE as typeof SHOW_ACTIVE
})

// 引数としてfiltertypeを受けとり、payloadにfilterをセットするactionを定義
// それをreducerでaction.payload.filterで渡してやって、動的に変える
// componentでactionをdispatchする際に、引数にfilterを入れてやる

export const setVisibilityFilter = (filter: FilterType) => ({
  type: SET_VISIBILITY_FILTER as typeof SET_VISIBILITY_FILTER,
  payload: { filter }
})

// まとめます(reducerで使用するactionの型を作る)
export type FilterActions = ReturnType<typeof setVisibilityFilter>