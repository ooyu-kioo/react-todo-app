import { Reducer } from 'redux'
import { FilterType, FilterActions, show_all, SET_VISIBILITY_FILTER } from '../actions'


// state
export interface FilterState {
  visibility: FilterType
}

// initialState
export const initialState = {
  visibility: show_all()
}

// reducer
const FilterReducer: Reducer<FilterState, FilterActions> = (
  state: FilterState = initialState,
  action: FilterActions
): FilterState => {

  switch (action.type) {
    case SET_VISIBILITY_FILTER:

      console.log(action.payload.filter)

      return {
        visibility: action.payload.filter
      }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type
      return state
  }
}

export default FilterReducer