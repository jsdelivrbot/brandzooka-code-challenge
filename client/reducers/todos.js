const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    //
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
   case 'DELETE_TODO':
     return Object.assign([], state)
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newAddState = [
        ...state,
        todo(undefined, action)
      ]
      localStorage.setItem('todoItems', JSON.stringify(newAddState));
      return newAddState
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
   case 'DELETE_TODO':
     let newDeleteState = todo(state.filter((t) => action.id !== t.id), action)
     localStorage.setItem('todoItems', JSON.stringify(newDeleteState));
     return newDeleteState

     case 'GRAB_TODOS':
       let newGrabState = localStorage.getItem('todoItems');
       return JSON.parse(newGrabState)?  JSON.parse(newGrabState) : state
    default:
      return state
  }
}

export default todos
