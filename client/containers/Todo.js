import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'


let Todo = ({ dispatch, onClick, completed, text, id }) => (
     <li
     className={ completed ? 'completed' : '' }>
      <div className="view">
			<input
            onClick={onClick}
				className="toggle"
				type="checkbox"
			/>
        <label>
            <span> {text} </span>
         </label>
        <button className="destroy" onClick={ () =>  dispatch(deleteTodo(id)) } />
      </div>
     </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

Todo = connect()(Todo)

export default Todo
