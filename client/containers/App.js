import React, { Component } from 'react'
import '../style/app.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { grabTodos } from '../actions'
import NavBar from '../components/NavBar'
import Toggles from '../components/Toggles'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import MediaShare from "./MediaShare"


class App extends Component {
   componentDidMount() {
     this.props.grabTodos();
   }
   render() {
      return(
        <div>
            <h1> todos </h1>
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
