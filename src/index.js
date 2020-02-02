import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';



const App = () => {
  
  const isLoggedIn = false;  
  const loginBox = <span>Login please</span>;
  const welcomeBox = <span>Welcome back</span>;

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
};

ReactDOM.render(<App />,
  document.getElementById('root'));