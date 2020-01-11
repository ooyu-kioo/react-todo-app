/*
todoの１単位
TODO：こういう特定の用途に特化したcomponentってどうdir置けばいい？
*/

import React from 'react'
// import { Todo } from '../../../store/todo';

interface Props {
  id: number,
  text: string,
  done: boolean
  onClick: () => void;
}

export const TodoItem: React.FC<Props> = ({ id, text, done, onClick }) => {

  return (
    <div onClick={onClick}>
      {id} : {text} {done && 'done'}
    </div>
  );
};
