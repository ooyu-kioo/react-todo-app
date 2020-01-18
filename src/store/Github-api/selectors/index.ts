/*
selector
*/

import { State } from '../..'

export const GetAllUsers = (state: State) => {
  const users = state.GithubApi.users
  return users
}