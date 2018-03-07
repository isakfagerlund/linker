const links = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_LINKS":
      return action.links;
    case "GET_NEW_LINK":
      return [
        ...state,
        {
          _id: action.id,
          long_url: action.url,
          hash: action.hash
        }
      ];
    case "DELETE_LINK":
      const newState = state;
      // Return as long as link id is not the same as action id
      return newState.filter(link => link._id !== action.id);
    case "UPDATE_LINK":
      const updatedState = state.map(link => {
        if (link._id === action.id) {
          // If link id = action id change to the updated values
          link.long_url = action.url;
          return link;
        }
        // Else just return the original object
        return link;
      });
      // Then return the updated state
      return updatedState;
    default:
      return state;
  }
};

export default links;
