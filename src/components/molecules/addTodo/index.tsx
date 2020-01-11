/*
todoの追加のinput, addのbuttonの領域
*/

import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../atoms/button';
// import { Input } from '../../atoms/input'

import { addTodo } from '../../../store/todo';


export const AddTodo: React.FC = () => {

  const dispatch = useDispatch();
  let inputText = React.createRef<HTMLInputElement>();

  // TODO：inputにrefを置いてやればアクセスできるぽい？

  return (
    <>
      {/* refの仕様上inputは引っ張ってこれない？のでimportでなくここで書いてく */}
      {/* <Input label={'test'} /> */}
      <input type='text' name='addtodo' ref={inputText} />
      <Button label={'Add'} onClick={() => dispatch(addTodo(inputText.current!.value))} />
    </>
  )
}