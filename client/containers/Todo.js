import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'


let Todo = ({ dispatch, onClick, completed, text, id }) => (
   <div>
     <li onClick={onClick}  style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <div className="view">
			<input
				className="toggle"
				type="checkbox"
			/>
        <label> {text} </label>
        <button className="destroy" onClick={ () =>  dispatch(deleteTodo(id)) } />
      </div>
     </li>
   </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

Todo = connect()(Todo)

export default Todo
