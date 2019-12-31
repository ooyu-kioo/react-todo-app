import { Reducer } from 'redux'
import {
  FilterType,
  FilterActions,
  show_all,
  SET_VISIBILITY_FILTER
} from '../actions'


// state
export interface State {
  visibility: FilterType
}

// initialState
export const initialState = {
  visibility: show_all()
}

// reducer
const FilterReducer = (
  state: State = initialState,
  action: FilterActions
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        visibility: action.payload.filter
      }
    default:
      return state;
  }
}

export default FilterReducer