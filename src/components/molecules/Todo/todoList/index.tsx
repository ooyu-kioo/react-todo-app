/*
入力したtodoを一覧表示
*/

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GetAllTodos, toggleTodo, Todo } from '../../../../store/Todo/todos';

import { TodoItem } from '../../../atoms/Todo/todoItem'


export const TodoList: React.FC = () => {

  const dispatch = useDispatch();
  const todos = useSelector(GetAllTodos);

  console.log('***')

  {
    todos.map(todo => {
      console.log(todo)
    })
  }

  return (
    // todoをmapで回しながらlistに流してく
    <>
      <div>
        {todos.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
          )
        })}
        {/* {...todo} => todoのpropを展開(id, text, doneのprop渡しと一緒) */}
      </div>
    </>
  )
}