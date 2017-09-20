import React, { Component } from 'react'
import '../style/app.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { grabTodos } from '../actions'
import Toggles from '../components/Toggles'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import MediaShare from "./MediaShare"
import Acknowledgment from "../components/Acknowledgment"

class App extends Component {
   componentDidMount() {
     this.props.grabTodos();
   }
   render() {
      return(
        <div>
            <div className="container todoApp">
            <h1> todos </h1>
                <AddTodo />
                <VisibleTodoList />
                <Toggles />
            </div>
            <MediaShare />
            <Acknowledgment />
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
