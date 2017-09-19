
export const addTodo = (text) => {
   let currentId = localStorage.getItem('todoItems')? JSON.parse(localStorage.getItem('todoItems')).slice(-1)[0].id : -1
  return {
    type: 'ADD_TODO',
    id: currentId + 1,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const grabTodos = () => {
  return {
    type: 'GRAB_TODOS'
  }
}
