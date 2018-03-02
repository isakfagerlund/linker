import React from "react";
import { Link } from "react-router-dom";

const Links = props => (
  <Link to={props.hash}>
    <div className="Link">
      <p>{props.hash}</p>
      <span>{props.long_url}</span>
    </div>
  </Link>
);

export default Links;
