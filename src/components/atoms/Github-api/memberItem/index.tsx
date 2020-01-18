/*
githubユーザーの１単位
*/

import React from 'react'

interface Props {
  user_name: string
  github_id: number
  image_url: string
}

export const MemberItem: React.FC<Props> = ({ user_name, github_id, image_url }) => {
  return (
    <ul>
      <li>user_name : {user_name}</li>
      <li>Github_ID : {github_id}</li>
      <li>{image_url}</li>
      <li><img src={image_url} alt='image_url' /></li> {/* ここ<image>だとダメです */}
    </ul>
  )
}