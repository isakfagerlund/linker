import React from "react";
import { connect } from "react-redux";
import { fetchTheHash } from "../actions";

let CreateNewLink = ({ dispatch }) => {
  let input;

  return (
    <div className="url-input">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(fetchTheHash(input.value.toLowerCase()));
          input.value = "";
        }}
      >
        <input
          placeholder="Place url here"
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Create short link</button>
      </form>
    </div>
  );
};
CreateNewLink = connect()(CreateNewLink);

export default CreateNewLink;
