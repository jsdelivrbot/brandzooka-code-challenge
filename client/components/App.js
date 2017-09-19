import React from 'react'

import '../style/app.css';

import NavBar from './NavBar'
import Toggles from './Toggles'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

//will mount calls actionn that sets state to local storage or []


const App = () => (
  <div>
    <NavBar />
      <div className="container">
          <AddTodo />
          <VisibleTodoList />
          <Toggles />
      </div>
  </div>
)

export default App
