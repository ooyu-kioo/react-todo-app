/*
githubのmember一覧
*/

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { User } from '../../../../api/github-api/models'
import { Button } from '../../../atoms/Common/button'
import { MemberItem } from '../../../atoms/Github-api/memberItem'
import { getMembers } from '../../../../store/Github-api/actions'
import { GetAllUsers } from '../../../../store/Github-api/'


import { State } from '../../../../store/index'


// githubから取得するorganizationの指定
// TODO:ここsymbol的な感じで作れない？
const organizationName = ['netflix', 'facebook', 'airbnb']

export const MemberList: React.FC = () => {

  console.log('render MemberList')
  const dispatch = useDispatch()

  // useEffectでmount後にapi通信,storeに格納
  // 空[] => 初回render時のみ実行
  useEffect(() => {
    console.log('fn useEffect')
    dispatch(getMembers(organizationName[0]))
  }, [dispatch]) // TODO:依存値がdispatchなのは何で？

  // storeのapiデータを取得
  const users = useSelector(GetAllUsers)


  return (
    <div>
      {/* 分離めんどいのでapiボタン一旦ここに */}
      <div>
        <Button label='API通信〜' onClick={() => dispatch(getMembers(organizationName[0]))} />
      </div>
      {users.map((user: User) => (
        <MemberItem
          key={user.id}
          user_name={user.login}
          github_id={user.id}
          image_url={user.url}
        />
      ))}

    </div>
  )
}