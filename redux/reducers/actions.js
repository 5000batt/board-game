const actions = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ACTION':
      return [
        ...state,
        {
          ...action.payload
        }
      ]
    case 'REMOVE_ACTION':
      return [
        ...state.filter(item => item.genre != action.payload && item.id != action.payload)
      ]
    default:
      return state
  }
}
export default actions