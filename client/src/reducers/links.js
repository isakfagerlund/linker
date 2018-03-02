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
      console.log(`Deleted ${action.id}`);
      const newState = state;
      return newState.filter(link => link._id !== action.id);
    default:
      return state;
  }
};

export default links;
