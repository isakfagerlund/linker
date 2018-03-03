import React from "react";
import { Link } from "react-router-dom";

const TheLink = props => (
  <div className="Link-wrapper">
    <Link to={props.short_url}>
      <div className="Link">
        <p>{props.short_url}</p>
        <span>{props.long_url}</span>
      </div>
    </Link>
    <div className="Link-buttons">
      <button onClick={() => props.updateLink(props.hash)}>
        <i className="fas fa-pencil-alt fa-lg" />
      </button>
      <button onClick={() => props.deleteLink(props.hash)}>
        <i className="fas fa-ban fa-lg" />
      </button>
    </div>
  </div>
);

export default TheLink;
