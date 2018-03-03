import React from "react";
import TheLink from "./Link";
import PropTypes from "prop-types";
import "../styles/Links.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Links = props => (
  <TransitionGroup component="div" className="Links" enter={true}>
    {props.links.map((link, i) => (
      <CSSTransition
        classNames="fade"
        key={i}
        timeout={{ enter: 300, exit: 300 }}
      >
        <TheLink
          long_url={link.long_url}
          short_url={window.location.href + link.hash}
          hash={link.hash}
          deleteLink={props.deleteLink}
          updateLink={props.updateLink}
          id={link._id}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

Links.propTypes = {
  links: PropTypes.array.isRequired,
  deleteLink: PropTypes.func.isRequired,
  updateLink: PropTypes.func.isRequired
};

export default Links;
