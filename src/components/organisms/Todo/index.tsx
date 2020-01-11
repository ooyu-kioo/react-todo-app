/*
todoリストの全体
*/

import React from 'react';

import { AddTodo } from '../../molecules/addTodo'
import { TodoList } from '../../molecules/todoList'
import { Filter } from '../../molecules/filter'

export const Todo: React.FC = () => {

  return (
    <>
      <AddTodo />
      <TodoList />
      <Filter />
    </>
  )
}