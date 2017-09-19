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
      break
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
   case 'DELETE_TODO':
     let newDeleteState = todo(state.filter((t) => action.id !== t.id), action)
     localStorage.setItem('todoItems', JSON.stringify(newDeleteState));
     return newDeleteState
     break
     //--------------
     //GRAB TOD0 case
     //check local storage (.get item)
     //if !empty return json parse of LS
     //else return state
    default:
      return state
  }
}

export default todos
