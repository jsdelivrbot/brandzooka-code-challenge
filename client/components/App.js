import React, { Component } from 'react'

import '../style/app.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { grabTodos } from '../actions'
import NavBar from './NavBar'
import Toggles from './Toggles'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import MediaShare from "./MediaShare"


class App extends Component {
   componentDidMount() {
     this.props.grabTodos();
   }
   render() {
      return(
        <div>
        <h1> todos </h1>
          <NavBar />
            <div className="container">
                <AddTodo />
                <VisibleTodoList />
                <Toggles />
            </div>
            <MediaShare />
        </div>
            )
         }
}

function mapStateToProps (state) {
   return { todos: state.todos}
}

function mapDispatchToProps (dispatch) {
   return bindActionCreators( { grabTodos }, dispatch )
}

export default connect (mapStateToProps, mapDispatchToProps)(App)
// export default connect((state) => state, { grabTodos })(App);
