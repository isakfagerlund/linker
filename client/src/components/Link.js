import React from "react";
import { Link } from "react-router-dom";

const TheLink = props => (
  <div>
    <Link to={props.short_url}>
      <div className="Link">
        <p>{props.short_url}</p>
        <span>{props.long_url}</span>
      </div>
    </Link>
    <button onClick={() => props.deleteLink(props.hash)}>Delete link</button>
    <button onClick={() => props.updateLink(props.hash, "this url has dawda")}>
      Update link
    </button>
  </div>
);

export default TheLink;
