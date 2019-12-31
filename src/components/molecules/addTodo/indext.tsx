/*
todoの追加のinput, addのbuttonの領域
*/

import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'

import { addTodo, GetAllTodos } from '../../../store/todo'

export const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(GetAllTodos);

  // TODO：inputにrefを置いてやればアクセスできるぽい？

  return (
    <>
      <Input label={'test'} />
      <Button label={'Add'} onClick={() => dispatch(addTodo())}></Button>
    </>
  )
}