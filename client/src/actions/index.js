import axios from "axios";

export const getAllLinks = links => {
  return {
    type: "GET_ALL_LINKS",
    links
  };
};

export const getNewLink = (url, hash, id) => {
  return {
    type: "GET_NEW_LINK",
    url,
    hash,
    id
  };
};

export function fetchTheHash(url) {
  return function(dispatch) {
    axios
      .post("/v1/links", {
        url
      })
      .then(function(response) {
        if (response.data.error) {
          alert(`Link for ${url} already exixts! Check the list`);
        } else {
          dispatch(getNewLink(url, response.data.shortUrl, response.data._id));
        }
      });
  };
}

export function fetchAllLinks() {
  return function(dispatch) {
    axios
      .get("/v1/links")
      .then(response => dispatch(getAllLinks(response.data)));
  };
}
