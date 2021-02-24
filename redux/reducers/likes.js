const likes = (state = [], action) => {

  switch(action.type) {
    case 'ADD_LIKE_SUCCEEDED':
      return [
        ...state,
        {
          ...action.payload
        }
      ]

    case 'FETCH_LIKES_SUCCEEDED':
      return [
        ...action.payload
      ]

    case 'REMOVE_LIKE_SUCCEEDED':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    
    default:
      return state
  }
}

export default likes