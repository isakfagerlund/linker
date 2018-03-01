const links = (state = [], action) => {
  switch (action.type) {
    case "GET_NEW_LINK":
      return [
        ...state,
        {
          url: action.url,
          hash: action.hash
        }
      ];
    default:
      return state;
  }
};

export default links;
