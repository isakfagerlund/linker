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
    default:
      return state;
  }
};

export default links;
