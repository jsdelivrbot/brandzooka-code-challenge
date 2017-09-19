
// console.log('actionsgetting cur id',localStorage.getItem('todoItems'));
// let currentId = localStorage.getItem('todoItems')? JSON.parse(localStorage.getItem('todoItems')).slice(-1)[0].id : -1
// let currentId = JSON.parse(localStorage.getItem('todoItems')).slice(-1)[0].id
// console.log('in actions', currentId);

// let nextTodoId = currentId
export const addTodo = (text) => {
   console.log('actionsgetting cur id',localStorage.getItem('todoItems'));
   let currentId = localStorage.getItem('todoItems')? JSON.parse(localStorage.getItem('todoItems')).slice(-1)[0].id : -1
   console.log('in actions', currentId + 1);
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
