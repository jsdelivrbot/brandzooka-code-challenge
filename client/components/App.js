import React from 'react'

import '../style/app.css';

import NavBar from './NavBar'
import Toggles from './Toggles'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'


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
