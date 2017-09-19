import React from 'react'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="new-todo" ref={node => {
          input = node
        }}
        placeholder="What would you like to get done?"
        />

      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo


// <button type="submit" className="btn">
//   Add Todo
// </button>
