import { AxiosError } from 'axios'
import { getMembersInfo } from '../../../api/github-api/getMember'

import { User } from '../../../api/github-api/models'


export const GET_MEMBERS_START = 'GITHUB/GET_MEMBERS_START';
export const GET_MEMBERS_SUCCEED = 'GITHUB/GET_MEMBERS_SUCCEED';
export const GET_MEMBERS_FAIL = 'GITHUB/GET_MEMBERS_FAIL';

const getMembersStart = () => ({
  type: GET_MEMBERS_START as typeof GET_MEMBERS_START,
})

const getMembersSucceed = (users: User[]) => ({
  type: GET_MEMBERS_SUCCEED as typeof GET_MEMBERS_SUCCEED,
  payload: { users }
})

const getMembersFail = (error: AxiosError) => ({
  type: GET_MEMBERS_FAIL as typeof GET_MEMBERS_FAIL,
  payload: { error },
  error: true
})

// api取得
export const getMembers = (organizationName: string) => {
  return async (dispatch: any) => { // TODO:ここの型何入れればいい？

    console.log('fn getMembers')

    dispatch(getMembersStart())
    try {
      const users = await getMembersInfo(organizationName)

      console.log('api_action')
      console.log(users)

      dispatch(getMembersSucceed(users))
    } catch (error) {
      dispatch(getMembersFail(error))
      alert(error)
    }
  }
}

export type GithubApiActions =
  ReturnType<typeof getMembersStart>
  | ReturnType<typeof getMembersSucceed>
  | ReturnType<typeof getMembersFail>