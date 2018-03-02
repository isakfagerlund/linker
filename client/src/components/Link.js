import React from "react";
import { Link } from "react-router-dom";

const Links = props => (
  <div className="Link">
    <p>
      <Link to={props.hash}> {props.hash} </Link>
      - {props.long_url}
    </p>
  </div>
);

export default Links;
