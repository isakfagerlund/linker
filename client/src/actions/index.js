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

export const deleteLink = id => {
  return {
    type: "DELETE_LINK",
    id
  };
};

export const updateLink = (id, url) => {
  return {
    type: "UPDATE_LINK",
    id,
    url
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

export function fetchLinkAndDelete(hash) {
  return function(dispatch) {
    axios.delete(`/v1/${hash}`).then(function(response) {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        dispatch(deleteLink(response.data._id));
      }
    });
  };
}

export function fetchLinkAndUpdate(hash, url) {
  return function(dispatch) {
    axios.put(`/v1/${hash}`, { url }).then(function(response) {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        dispatch(updateLink(response.data._id, url));
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
