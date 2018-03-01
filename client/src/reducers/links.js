const links = (state = [], action) => {
    switch (action.type) {
      case 'GET_NEW_LINK':
        return [
          ...state,
          {
            url: action.url
          }
        ]
      default:
        return state
    }
  }
   
  export default links