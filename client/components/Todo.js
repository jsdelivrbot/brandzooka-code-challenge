import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
   <div>
     <li
       onClick={onClick}
       style={{
         textDecoration: completed ? 'line-through' : 'none'
       }}
     >
       {text}
     </li>
     <button onClick={ () =>  console.log('im the gr8est') } > deltime </button>
    </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
