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
      // console.log(`Deleted ${action.id}`);
      const newState = state;
      return newState.filter(link => link._id !== action.id);
    case "UPDATE_LINK":
      // console.log(`Update ${action.id} with ${action.url}`);
      const updatedState = state.map(link => {
        if (link._id === action.id) {
          link.long_url = action.url;
          return link;
        }
        return link;
      });
      return updatedState;
    default:
      return state;
  }
};

export default links;
