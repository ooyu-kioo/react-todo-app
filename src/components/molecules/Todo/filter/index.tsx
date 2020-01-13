/*
filterの表示切り替え
*/

import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../atoms/Common/button';

import { show_all, show_completed, show_active, setVisibilityFilter } from '../../../../store/Todo/filter'

export const Filter: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <Button label='show_all' onClick={() => dispatch(setVisibilityFilter(show_all()))} />
      <Button label='show_active' onClick={() => dispatch(setVisibilityFilter(show_active()))} />
      <Button label='show_completed' onClick={() => dispatch(setVisibilityFilter(show_completed()))} />
    </div>
  )
}