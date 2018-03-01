import axios from "axios";

export const getNewLink = (url, hash) => {
  return {
    type: "GET_NEW_LINK",
    url,
    hash
  };
};

export function getTheHash(url) {
  return function(dispatch) {
    axios
      .post("/v1/links", {
        url
      })
      .then(response => dispatch(getNewLink(url, response.data)));
  };
}
