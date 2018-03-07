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
          // Check if there is anything in input
          if (!input.value.trim()) {
            return;
          }
          // If there is dispatch and create the hash + make the input lowercase for easy handling
          dispatch(fetchTheHash(input.value.toLowerCase()));
          input.value = "";
        }}
      >
        <input
          placeholder="Paste url here"
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
