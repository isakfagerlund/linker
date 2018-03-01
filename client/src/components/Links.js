import React from "react";
import Link from "./Link";
import "../styles/Links.css";

const Links = props => (
  <div className="Links">
    {props.links.map((link, i) => (
      <Link
        key={i}
        long_url={link.long_url}
        hash={window.location.href + link.hash}
      />
    ))}
  </div>
);

export default Links;
