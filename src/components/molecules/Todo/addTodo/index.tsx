/*
todoの追加のinput, addのbuttonの領域
*/

import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../atoms/Common/button';
import { addTodo } from '../../../../store/Todo/todos';


export const AddTodo: React.FC = () => {
  const dispatch = useDispatch();
  const inputText = React.createRef<HTMLInputElement>();
  // TODO:form処理のBP

  return (
    <>
      {/* TODO:本当はここじゃなくてatomsからInput持ってきたい(refでエラー) */}
      <input type='text' name='addtodo' ref={inputText} />
      <Button label={'Add'} onClick={() => dispatch(addTodo(inputText.current!.value))} />
    </>
  )
}