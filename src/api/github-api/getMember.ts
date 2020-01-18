/*
githubの組織に属するメンバー一覧をapi取得
*/

import axios from 'axios'
import { User } from './models'

const API_CONFIG = {
  baseURL: 'https://api.github.com',
  timeout: 7000,
}


export const getMembersInfo = async (organizationName: string) => {

  const apiInstance = axios.create({ ...API_CONFIG })

  try {
    const response = await apiInstance.get(`/orgs/${organizationName}/members`)

    if (response.status !== 200) {
      throw new Error('Server Error')
    }

    const members: User[] = response.data

    return members

  } catch (err) {
    throw err
  }
}