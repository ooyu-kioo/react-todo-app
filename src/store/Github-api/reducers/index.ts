import { Reducer } from 'redux'
import { AxiosError } from 'axios'
import { User } from '../../../api/github-api/models'
import { GithubApiActions, GET_MEMBERS_START, GET_MEMBERS_SUCCEED, GET_MEMBERS_FAIL } from '../actions'


// state
export interface GithubApiState {
  users: User[],
  isLoading: boolean,
  error?: AxiosError | null;
}

// inisitalState
export const initialState: GithubApiState = {
  users: [],
  isLoading: true
}

const githubApiReducer: Reducer<GithubApiState, GithubApiActions> = (
  state: GithubApiState = initialState,
  action: GithubApiActions
): GithubApiState => {
  switch (action.type) {
    case GET_MEMBERS_START:
      return {
        ...state,
        users: [],
        isLoading: true
      }
    case GET_MEMBERS_SUCCEED:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      }
    case GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: true,
        error: action.payload.error
      }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action
      return state
    }
  }
}

export default githubApiReducer
