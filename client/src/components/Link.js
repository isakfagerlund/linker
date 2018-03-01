import React from "react";

const Links = props => (
  <div className="Link">
    <p>
      <a href={props.hash}>{props.hash}</a>
      - {props.long_url}
    </p>
  </div>
);

export default Links;
