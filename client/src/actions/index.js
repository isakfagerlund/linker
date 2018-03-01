import fetch from "cross-fetch";

export const getNewLink = (url, hash) => {
  return {
    type: "GET_NEW_LINK",
    url,
    hash
  };
};

export function getTheHash(url) {
  return function(dispatch) {
    fetch("/v1/links", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(
        res => res.json(),
        error => console.log("An error occurred.", error)
      )
      .then(response => dispatch(getNewLink(url, response)));
  };
}
