import React from "react";
import Link from "./Link";
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
        <Link
          long_url={link.long_url}
          hash={window.location.href + link.hash}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default Links;
