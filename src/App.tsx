import React from 'react';

import { Todo } from './components/organisms/Todo'
import { GithubApi } from './components/organisms/Github-api'

const App: React.FC = () => {
  return (
    <>
      <Todo />
      <GithubApi />
    </>
  );
}

export default App;