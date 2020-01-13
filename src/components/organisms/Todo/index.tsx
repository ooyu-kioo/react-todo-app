/*
todoリストの全体
*/

import React from 'react';

import { AddTodo } from '../../molecules/Todo/addTodo'
import { TodoList } from '../../molecules/Todo/todoList'
import { Filter } from '../../molecules/Todo/filter'

export const Todo: React.FC = () => {

  return (
    <>
      <AddTodo />
      <TodoList />
      <Filter />
    </>
  )
}